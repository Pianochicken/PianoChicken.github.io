<template>
  <q-page >

    <div class="q-pa-md" style="max-width: auto-fill">
      <div class="col-12" align='center' style='margin-top: -8px;'>

        <!-- 頁面上方總覽 -->
        <div :key='componentKey' class="q-pa-sm row justify-center col-xs-6 col-sm-4 col-md-3 col-lg-2" style="max-width: auto-fill;">

          <q-card class="col col-xs-5 col-sm-4 col-md-2 col-lg-1" flat bordered style="midth:auto-fill; margin: 3px">
            <q-card-section class="q-pa-sm" style="background-color: #DDDDDD;">
                <q-avatar icon="flag" color="warning" text-color="white" />
                <q-item-label style="font-size:1rem;">今日警告總數</q-item-label>
            </q-card-section>
            <q-separator />
              <q-card-section >
                <b style="font-size:1rem;">{{total_summary().warning_accumulate}}</b> 筆
              </q-card-section>
          </q-card>

          <q-card class="col col-xs-5 col-sm-4 col-md-2 col-lg-1" flat bordered style="margin: 3px">
            <q-card-section class="q-pa-sm" style="background-color: #DDDDDD;">
                <q-avatar color="negative" icon="priority_high" text-color="white" ></q-avatar>
                <q-item-label style="font-size:1rem;">溫度警告</q-item-label>
            </q-card-section>
            <q-separator />
              <q-card-section >
                <b style="color:red; font-size:1.2rem;">{{total_summary().temperature_warning_number}}</b> 台
              </q-card-section>
          </q-card>

          <q-card class="col col-xs-5 col-sm-4 col-md-2 col-lg-1" flat bordered style="margin: 3px">
            <q-card-section class="q-pa-sm" style="background-color: #DDDDDD;">
                <q-avatar icon="directions_run" color="positive" text-color="white" />
                <q-item-label style="font-size:1rem;">正常溫度範圍</q-item-label>
            </q-card-section>
            <q-separator />
              <q-card-section >
                <b class="text-positive" style="font-size:1.2rem;">{{total_summary().working_number}}</b> 台
              </q-card-section>
          </q-card>

          <q-card class="col col-xs-5 col-sm-4 col-md-2 col-lg-1" flat bordered style="margin: 3px">
            <q-card-section class="q-pa-sm" style="background-color: #DDDDDD;">
                <q-avatar icon="wifi_off" color="dark" text-color="white" />
                <q-item-label style="font-size:1rem;">裝置失聯</q-item-label>
            </q-card-section>
            <q-separator />
              <q-card-section >
                <b style="color:red; font-size:1.2rem;">{{total_summary().offline_number}}</b> 台
              </q-card-section>
          </q-card>

        </div>

        <!-- 底下 Device 表格 -->
        <div class="q-pa-sm justify-center text-center" style="max-width: auto-fill;">
          <q-table
            grid
            grid-header
            class="flex-center"

            :rows="dataArray"
            :columns="columns"
            :filter="filter"
            no-data-label="你好像還沒有任何設備哦...快來這邊看看有什麼"
            no-results-label="搜尋不到任何結果..."
            @request="onRequest"
            :card-container-class="cardContainerClass"
            :v-model:propName="pagination"
            :rows-per-page-options="rowsPerPageOptions"
          >

            <template v-slot:header-cell="props">
              <div class='inline-block' style="white-space:nowrap;">
                <q-th sort="" class="justify-center text-center" v-if="props.col.label !== ''" :props="props"  :style="(props.col.label !== '')?'background-color: #DDDDDD; font-size: 1.1em':'' ">
                  <q-icon name="sort" size="1.2em" />
                    {{ props.col.label }}
                </q-th>
              </div>
            </template>

            <template v-slot:item="props" >
              <div class="q-pa-xs col-auto flex flex-center">
                <q-card style="height: 100%; background-color: #DDDDDD; width: 150px;">
                  
                  <q-card-section class="q-pa-xs" :class="props.row.switch_off_msg_color" style="background-color: white">

                    <b v-if="props.row.temperature_warning_status!=='offline' && props.row.temperature_warning_status!==''" :style="temperature_color(props.row.temperature_1, props.row.high_temperature_warning, props.row.low_temperature_warning)">{{ props.row.temperature_1 }} <span style="font-size: 0.5rem">°C</span></b>
                    <b v-if="props.row.temperature_warning_status==='offline' || props.row.temperature_warning_status===''" :style="temperature_color(props.row.temperature_1, props.row.high_temperature_warning, props.row.low_temperature_warning)"></b>
                    
                    <br>
                    
                    <b v-if="props.row.temperature_warning_status!=='offline' && props.row.temperature_warning_status!==''" :style="temperature_color(props.row.temperature_2, props.row.high_temperature_warning, props.row.low_temperature_warning)">{{ props.row.temperature_2 }} <span style="font-size: 0.5rem">°C</span></b>
                    <b v-if="props.row.temperature_warning_status==='offline' || props.row.temperature_warning_status===''" :style="temperature_color(props.row.temperature_2, props.row.high_temperature_warning, props.row.low_temperature_warning)"></b>
                    
                    <br>

                    <q-circular-progress
                      v-if="props.row.temperature_warning_status!=='offline'"
                      show-value
                      class="q-ma-md"
                      indeterminate
                      :value="circular_value"
                      :angle="circular_angle"
                      :instant-feedback="circular_instant_feedback"
                      :reverse="circular_reverse"
                      size="3.5rem"
                      :thickness="0.12"
                      :color="circular_status_color(props.row.temperature_warning_status)"
                      track-color='grey-4'
                    >
                      <q-img key="temperature_warning_status" :props="props" :src='detect_type(props.row.device_type)' style="height:2.5rem; width:2.5rem;"></q-img>
                    </q-circular-progress>


                    <q-circular-progress
                      v-if="props.row.temperature_warning_status==='offline'"
                      show-value
                      class="q-ma-md"
                      :value = 0
                      size="3.5rem"
                      :thickness="0.12"
                      color="primary"
                      :track-color="(props.row.switch_status) ? 'grey-4': 'grey-6'"
                    >
                      <q-img key="temperature_warning_status" :props="props" :src='detect_type(props.row.device_type)' style="height:2.5rem; width:2.5rem;"></q-img>
                    </q-circular-progress>

                    <br>

                    <b class="text-grey-8" style="font-size:1rem;">{{ props.row.device_name }}</b>
                    <br>

                    <q-badge style="font-size: 8px;" :props="props" v-if="props.row.temperature_warning_status==='regular'" color='positive' label='正常範圍內' />
                    <q-badge style="font-size: 8px;" :props="props" v-if="props.row.temperature_warning_status==='high'" color='negative' label='高溫警告' />
                    <q-badge style="font-size: 8px;" :props="props" v-if="props.row.temperature_warning_status==='low'" color='info' label='低溫警告' />
                    
                    <q-badge style="font-size: 8px;" :props="props" v-if="props.row.temperature_warning_status===''" color='dark' label='等待溫度資訊' />
                    <q-badge style="font-size: 8px;" :props="props" v-if="props.row.temperature_warning_status==='offline'" color='dark' label='感測器失聯' />
                  </q-card-section>

                  <!-- 底下詳細資訊 -->
                  <q-card-section :props="props" class="q-pa-md" style="fontSize:12px; position:bottom; height:auto-fill; background-color: #DDDDDD;">
                    
                    <div v-if="props.row.device_type==='temperature_100'" class="col-12 text-h8 text-grey-7" style="font-size: 14px">容許溫度範圍</div>

                    <div v-if="props.row.device_type==='temperature_100'" class="col-12 text-h8 text-grey-7" style="font-size: 14px;"> {{ props.row.low_temperature_warning }} ℃ ~ {{ props.row.high_temperature_warning }} ℃ </div>
                    
                    <q-separator style="margin-bottom: 5px; margin-top: 5px"/>

                    <div v-if="props.row.device_type==='temperature_100'" class="col-12 text-h8 text-grey-7"> 今日警告次數： {{ props.row.warning_count }}</div>
                    <div v-if="role==='admin'" class="col-12 text-h8 text-grey-7"> {{ props.row.device_owner }}</div>

                  </q-card-section>

                </q-card>
              </div>
            </template>

            <q-separator spaced inset/>

          </q-table>
        </div>

      </div>
    </div>

    <div>
      <q-page-sticky position="bottom-right" :offset="[12, 12]">
        <q-btn 
          fab
          flat 
          color="black"
          @click="$q.fullscreen.toggle()"
          :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
          label=""
        >
          <q-tooltip :v-model="$q.fullscreen.isActive" anchor="center left" self="center right" :offset="[10, 10]">
          全螢幕
          </q-tooltip>
          <q-tooltip :v-model="!$q.fullscreen.isActive" anchor="center left" self="center right" :offset="[10, 10]">
          退出全螢幕
          </q-tooltip>
        </q-btn>
      </q-page-sticky>
    </div>


  </q-page>
</template>

<style>
</style>

<script>
import {Loading} from 'quasar'

export default {
  name: 'app',
  data () {
    return {
      role: '',
      vertification_token: '',
      user_devices_list: [],

      circular_value: 0,
      circular_angle: 0,
      circular_reverse: false,
      circular_instant_feedback: false,

      componentKey: 0,
      toggleKey: 0,

      dataArray: [],
      pagination: {
        page: 1,
        sortBy: '',
        descending: true,
        rowsPerPage: this.getItemsPerPage()
      },
      filter: '',
      columns: [
        { name: 'device_name', label: '裝置名稱', field: 'device_name', sortable: true, align: 'center' },
        { name: 'temperature_warning_status', label: '運行狀態', field: 'temperature_warning_status', sortable: true, align: 'center' },        
        { name: 'temperature_1', label: '裝置溫度', field: 'temperature_1', sortable: true, align: 'center' },
      ],

    }
  },
  created () {

    this.dataArray = this.init_devices_array(Math.floor(Math.random() * 4 + 3))

    console.log('this.dataArray: ', this.dataArray)

    // for device list
    this.onRequest({
      pagination: this.pagination,
      filter: undefined
    })

    Loading.hide()

    setInterval(() => {
      this.regular_update()
    }, 3000)
  },
  methods: {
    init_devices_array(device_number){

      var init_array = []

      for (var i = 0; i < device_number; i ++){

        let mac = this.make_random_token(6)
        let temperature_1 = Math.round(Math.random() * 10 * 10) / 10
        let random_number = Math.random() < 0.5 ? -Math.random() /5 : Math.random() / 5;
        let temperature_2 = Math.round((temperature_1 + random_number) * 10) / 10

        let new_device_object = {
          mac: 'mac_' + mac,
          device_name: 'Demo 裝置 ' + (i+1),
          device_owner: 'demo@brian.huang.com',
          device_type: 'temperature_100',
          high_temperature_warning: 8,
          low_temperature_warning: 2,
          offline_accumulate: 0,
          temperature_warning_status: '',
          // notes: ['Demo用', '備註'],
          warning_count: 0,
          temperature_1: temperature_1,
          temperature_2: temperature_2,
        }
        init_array.push(new_device_object)
      }
      
      init_array.forEach(obj => {
        if(obj.temperature_1 >= obj.high_temperature_warning || obj.temperature_2 >= obj.high_temperature_warning){
          obj.temperature_warning_status = 'high'
          obj.warning_count += 1
        }
        else if (obj.temperature_1 <= obj.low_temperature_warning || obj.temperature_2 <= obj.low_temperature_warning){
          obj.temperature_warning_status = 'low'
          obj.warning_count += 1
        }
        else{
          obj.temperature_warning_status = 'regular'
        }

        if(Math.random() < 0.05){
          obj.temperature_warning_status = 'offline'
        }
        
        obj.toggle_disable = false
      })

      return init_array
    },
    regular_update(){

      let temperature_1 = Math.round(Math.random() * 10 * 10) / 10
      let random_number = Math.random() < 0.5 ? -Math.random() /5 : Math.random() / 5;
      let temperature_2 = Math.round((temperature_1 + random_number) * 10) / 10

      let temp_index = Math.floor(Math.random() * this.dataArray.length)

      this.dataArray[temp_index].temperature_1 = temperature_1
      this.dataArray[temp_index].temperature_2 = temperature_2
      
      if(this.dataArray[temp_index].temperature_1 >= this.dataArray[temp_index].high_temperature_warning || this.dataArray[temp_index].temperature_2 >= this.dataArray[temp_index].high_temperature_warning){
        this.dataArray[temp_index].temperature_warning_status = 'high'
        this.dataArray[temp_index].warning_count += 1
      }
      else if (this.dataArray[temp_index].temperature_1 <= this.dataArray[temp_index].low_temperature_warning || this.dataArray[temp_index].temperature_2 <= this.dataArray[temp_index].low_temperature_warning){
        this.dataArray[temp_index].temperature_warning_status = 'low'
        this.dataArray[temp_index].warning_count += 1
      }
      else{
        this.dataArray[temp_index].temperature_warning_status = 'regular'
      }

      if(Math.random() < 0.05){
        obj.temperature_warning_status = 'offline'
      }

    },
    make_random_token(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    circular_status_color(temperature_warning_status){
      if(temperature_warning_status === 'high'){
        return 'negative'
      }
      else if (temperature_warning_status === 'low'){
        return 'info'
      }
      else if (temperature_warning_status === 'regular'){
        return 'positive'
      }
    },
    temperature_color(detect_temperature, high_temperature_threshold, low_temperature_threshold){
            
      if(detect_temperature >= high_temperature_threshold){
        return 'color: #EE0000; font-size: 1.8rem;'
      }
      else if(detect_temperature <= low_temperature_threshold){
        return 'color: #00E8EE; font-size: 1.8rem;'
      }
      else{
        return 'color: #26CE00; font-size: 1.8rem;'
      }

    },
    onRequest(props) {
      // const { page, rowsPerPage, sortBy, descending } = props.pagination
      // const filter = props.filter
      props.pagination
      props.filter
    },
    total_summary() {
      var working_number = 0
      var warning_accumulate = 0
      var temperature_warning_number = 0
      var offline_number = 0

      if(this.dataArray[0]){
        this.dataArray.forEach(obj => {
          if (obj.temperature_warning_status === 'high' || obj.temperature_warning_status === 'low') {
            temperature_warning_number += 1
          }  
          else if (obj.temperature_warning_status === 'regular') {
            working_number += 1
          }
          else if (obj.temperature_warning_status === 'offline'){
            offline_number += 1
          }
          warning_accumulate += obj.warning_count
        })
      }

      else{

      }

      return {
        warning_accumulate: warning_accumulate,
        temperature_warning_number: temperature_warning_number,
        working_number: working_number,
        offline_number: offline_number,
      }
    },
    detect_type (type) {
      if (type === 'temperature_100') {
        return require('../../images/temperature.png')
      } 
    },
    getItemsPerPage () {
      this.$q
      return 0
    },
  },
  computed: {
    cardContainerClass () {
      if (this.$q.screen.gt.xs) {
        return 'grid-masonry grid-masonry--' + (this.$q.screen.gt.sm ? '3' : '2')
      }
      return void 0
    },
    rowsPerPageOptions () {
      return [0]
    }
  },
  watch: {
    '$q.screen.name' () {
      this.pagination.rowsPerPage = this.getItemsPerPage()
    },
  }
}
</script>