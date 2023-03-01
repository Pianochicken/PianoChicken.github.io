<template>
  <q-page >

    <div class="q-pa-md q-gutter-md">
      <q-chip size="18px" icon="bookmark">
        前1000筆
      </q-chip>
    </div>

    <!-- 搜尋不到資料 -->
    <q-dialog v-model="find_no_data" persistent transition-show="scale" transition-hide="scale">
      <q-card class="text-black" style="width: 300px">
        <q-card-section>
          <div class="text-h6" style="font-weight:bold;">通知</div>
        </q-card-section>
        <q-separator/>
        <div class="q-pa-sm bg-white">
          <q-card-actions class="bg-white text-black justify-center items-center">
            <b>此日期範圍內找不到資料，或伺服器忙碌中，請重新再試。</b>
          </q-card-actions>  
        
          <div align="right">
            <q-btn push class="bg-blue-6 text-white" label="OK" v-close-popup />
          </div>
        </div>
      </q-card>
    </q-dialog>

     

    <!-- Data Table -->
    <div class="q-pa-md">
      <q-table
        class="Search-Data-Table"
        title="警告通知"
        :data="dataArray"
        :columns="columns"
        :filter="filter"
        no-data-label="目前沒有收到相關通知，到通知設定頁面看一下吧！"
        row-key="name"
        rows-per-page-label="每頁資料筆數"
        :rows-per-page-options="rowsPerPageOptions"
      >


      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input> 
      </template>


        <template v-slot:body="props">
          <q-tr :props="props" :class="(props.row.post_status==='success')?'text-black':'text-black'">
            <q-td key="time" :props="props">{{ props.row.time }}</q-td>
            <q-td key="post_status" :class="(props.row.post_status==='success')?'text-green':'text-red'" :props="props">{{ props.row.post_status_text }}</q-td>
            <q-td key="account" :props="props">{{ props.row.account }}</q-td>
            <q-td key="device_name" :props="props">{{ props.row.device_name }}</q-td>
            <q-td key="value1" :props="props">{{ props.row.value1 }}</q-td>
            <q-td key="value2" :props="props">{{ props.row.value2 }}</q-td>
            <q-td key="value3" :props="props">{{ props.row.value3 }}</q-td>
          </q-tr>
        </template>
        
        <template v-slot:top-left>
          <q-btn
            color="text-center bg-grey-6"
            text-color="grey-1"
            icon-right="archive"
            label="匯出 CSV 檔"
            no-caps
            @click="exportTable()"
          />
        </template>

      </q-table>
    </div>

  </q-page>
</template>

<style>
</style>

<script>
import axios from 'axios';
import {Loading, QSpinnerGears} from 'quasar'
import { exportFile } from 'quasar'

function wrapCsvValue (val, formatFn) {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

// import { filter } from 'app/src-cordova/platforms/android/platform_www/cordova_plugins'

export default {
  name: 'app',
  data () {
    return {
      filter: '',
      time_out: false,
      email: '',
      vertification_token: '',
      user_devices_list: [],
      role: '',
      tempdata:'',
      get_daily_record: false,
      chart_data: {
        value_array: [],
        time_array: [],
      },
      // initialPagination: {
      //   sortBy: 'timestamp',
      //   descending: true,
      //   // page: 1,
      //   // rowsPerPage: 10
      //   // rowsNumber: xx if getting data from a server
      // },
      search_daily_record: false,
      find_no_data: false,
      filter_mode: 'all_event',
      rowsPerPageOptions: [0, 30],
      search_loading: false,
      temp_dataArray: [],
      dataArray: [],
      columns: [
        { name: 'time', required: true, label: '時間', align: 'center', field: row => row.time, format: val => `${val}`, sortable: true},
        { name: 'post_status',  class (val) { return val.post_status==='success' ? 'bg-green' : 'bg-red' }, label: '通知狀態', field: 'post_status', sortable: true, align: 'center' },
        { name: 'account', label: '使用者', field: 'account', sortable: true, align: 'center' },
        { name: 'device_name', label: '名稱', field: 'device_name', sortable: true, align: 'center' },
        { name: 'value1', label: '通知類別', field: 'value1', sortable: false, align: 'center' },
        { name: 'value2', label: '事件訊息', field: 'value2', sortable: false, align: 'left' },
        { name: 'value3', label: '其他資訊', field: 'value3', sortable: false, align: 'left' },
      ]
    }
  },
  async created () {
   // this.dataArray = new Array
   // this.temp_dataArray = new Array

    Loading.show({
      delay: 400,
      spinner: QSpinnerGears,
      message: '<b>載入中，請稍候...</b>'
    })

    var refresh = window.localStorage.getItem('refresh');
    console.log(refresh);
    if (refresh===null){
        window.location.reload();
        window.localStorage.setItem('refresh', '1');
    }

    console.log('force reload');

    // get login user information
    var loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    this.email = loginInfo.user_info.email
    this.role = loginInfo.role
    this.vertification_token = loginInfo.vertification_token
    this.user_devices_list = loginInfo.user_devices_list

    // console.log('subscribe topic: ', this.topicmqtt)

    const article = { command: 'listlog', email: this.email }
      const response = await axios.post('https://mk100.frrut.net:1880/vaccinepost', article);
      if (response.status == 200) {

      response.data.sort(function(a,b){
        return b.timestamp - a.timestamp ;
        }
      );

      this.dataArray = response.data
      console.log('response data: ')    
      console.log(this.dataArray)
      } else {
        console.log('ERROR happen on request ')       
      }

    if(response) {
     // this.dataArray = data;
     Loading.hide()
    }



  },
  methods: {
   
    exportTable () {
      // naive encoding to csv format
      const content = [ this.columns.map(col => wrapCsvValue(col.label)) ].concat(
        this.dataArray.map(row => this.columns.map(col => wrapCsvValue(
          typeof col.field === 'function'
            ? col.field(row)
            : row[col.field === void 0 ? col.name : col.field],
          col.format
        )).join(','))
      ).join('\r\n')

      const status = exportFile(
        'statistic-record.csv',
        content,
        'text/csv'
      )

      if (status !== true) {
        this.$q.notify({
          message: 'Browser denied file download...',
          color: 'negative',
          icon: 'warning'
        })
      }
    },

  },
  
  computed: {
  },
  watch: {
    filter_mode: function(){

      this.dataArray = Object.assign([], this.temp_dataArray)

      if(this.dataArray.length > 0 && this.filter_mode === 'all_event'){
          this.dataArray = Object.assign([], this.temp_dataArray)
      }

      else if(this.dataArray.length > 0 && this.filter_mode === 'timed_report'){
        this.dataArray = this.dataArray.filter(function(item){
          return item.value1 === '定時回報';
        })
      }

      // else if(this.dataArray.length > 0 && this.filter_mode === "every_day"){
      //   this.dataArray = this.dataArray.filter(function(item, index, array){
      //     return item.value1 === '今日匯報';
      //   })
      // }

      else if(this.dataArray.length > 0 && this.filter_mode === 'warning'){
        this.dataArray = this.dataArray.filter(function(item){
          return item.value1 === '※警示訊息※';
        })
      }

      else if(this.dataArray.length > 0 && this.filter_mode === 'testing'){
        this.dataArray = this.dataArray.filter(function(item){
          return item.value1 === '測試訊號' || item.value1 === '測試紀錄';
        })
      }
    },
  }
}
</script>
<style lang="sass">
.Search-Data-Table
  /* max height is important */
  .q-table__middle
    max-height: 400px
    min-height: 250px

  .q-table__top,

  .q-table__bottom,

  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #ebebeb

  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0

  /* this is when the loading indicator appears */
  &.q-table--loading thead tr:last-child th
    /* height of all previous header rows */
    top: 48px

.flex 
  display: flex
  flex-direction: column;
  justify-content: space-around;

</style>
