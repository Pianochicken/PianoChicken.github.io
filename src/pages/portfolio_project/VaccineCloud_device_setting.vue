<template>
<q-page q-pa-md row no-wrap items-center justify-around>

  <!-- <q-dialog v-model="registerDialog" persistent>
    <q-card class="my-card">
      <q-card-section>
        <q-form @submit="updateDevReg">
          <div v-if="show === true">
          <q-btn icon="delete" color="grey" label="x Clear All" @click="clearRegis"/>
          </div>
          <p class="q-mt-sm"/>
            <q-table
              class="my-register-table"
              title="Register Devices"
              :data="register_device_list"
              :columns="register_columns"
              :filter="reg_filter"
              row-key="MAC"
              selection="multiple"
              :selected.sync="selected"
              :selected-rows-label="getSelectedString"
               @update:selected="checkselect"
              no-data-label="Good ! No unregistered devices"
              dense
            >
            <template v-slot:top-right>
              <q-input borderless dense debounce="300" v-model="reg_filter" placeholder="Search device">
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

              <template v-slot:body="props" >
                <q-tr :props="props">
                  <q-td >
                    <q-checkbox v-model="props.selected"/>
                  </q-td>
                  
                  <q-td key="MAC" :props="props">{{ props.row.MAC }}</q-td>
                  
                  <q-td key="rackName" :props="props">{{ props.row.rackName }}
                    <q-popup-edit v-model="props.row.rackName" title="Update RackName" buttons label-set="Save" label-cancel="Close"
                                  @show="updatecageInfo(props.row.rackName, props.row.cageID)" 
                                  @hide="refresh_cage_option()">
                      <q-select v-model="props.row.rackName" :options="rack_options" label="" />
                    </q-popup-edit>
                  </q-td>
                  
                  <q-td key="cageID" :props="props">{{ props.row.cageID }}
                    <q-popup-edit v-model="props.row.cageID" title="Update cageID" buttons label-set="Save" label-cancel="Close"
                                  @show="updatecageInfo(props.row.rackName, props.row.cageID)" 
                                  @hide="refresh_cage_option()">
                      <q-select name="select_cageID" v-model="props.row.cageID" :options="cage_options" option-label="itemName" label="" />
                    </q-popup-edit>
                  </q-td>

                  <q-td key="area" :props="props">{{ props.row.area }}
                    <q-popup-edit v-model="props.row.area" title="Update area" buttons label-set="Save" label-cancel="Close">
                      <q-input v-model="props.row.area" dense autofocus />
                    </q-popup-edit>
                  </q-td>

                  <q-td key="location" :props="props">{{ props.row.location }}
                    <q-popup-edit v-model="props.row.location" title="Update location" buttons label-set="Save" label-cancel="Close">
                      <q-input v-model="props.row.location" dense autofocus />
                    </q-popup-edit>
                  </q-td>

                  <q-td key="remarks" :props="props"> 
                      <q-select
                        label=""
                        filled
                        v-model="props.row.remarks"
                        use-input
                        use-chips
                        multiple
                        dense
                        hide-dropdown-icon
                        input-debounce="0"
                        @new-value="createValue"
                        :rules="[ val => verify_columns('reg_remarks', val) ]"
                        style="width:300px; top:50%; position:relative; "
                      />
                  </q-td>

                  </space>
                </q-tr>
              </template>
            </q-table>
          <p class="q-mt-sm"/>
          <q-btn color="primary" type="submit" style="left:38%" label="Register" :disable="RegBtnDisable"/>
          <q-btn color="white" text-color="black" style="left:40%" align="right" label="Cancel" @click="control_dialog('close_register')" />
        </q-form>
        
      </q-card-section>
    </q-card>
  </q-dialog> -->

  <div class="q-pa-md">
    <q-table
      title="裝置清單"
      class="my-devices-list-table"
      :dense="$q.screen.lt.md"
      :data="device_list"
      :columns="columns"
      :filter="filter"
      no-data-label="你好像還沒有任何設備哦..."
      row-key="MAC"
      :loading="!finish_init_device_data"
      :pagination="initialPagination"
      :rows-per-page-options="rowsPerPageOptions"
    >

      <template v-slot:loading>
        <q-inner-loading showing>
          <q-spinner-ios size="4em" color="primary" />
        </q-inner-loading>
      </template>

      <template v-slot:top-right>
        <q-input borderless dense debounce="100" v-model="filter" placeholder="搜尋裝置">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
       <template v-slot:body="props">

        <q-tr :props="props" ref="table_tr">
          
          <!-- table data: mac -->
          <q-td key="mac" :props="props">{{ props.row.mac }}</q-td>

          <!-- table data: device_name -->
          <q-td key="device_name" :props="props">
            <q-card flat bordered> {{props.row.device_name}} </q-card>
            <q-popup-edit v-model="props.row.device_name" title="設定設備名稱" buttons label-set="儲存" label-cancel="取消">
              <q-input v-model="props.row.device_name" dense autofocus />
            </q-popup-edit>
          </q-td>
          
          <!-- table data: device_type -->
          <q-td key="device_type" :props="props">
              <q-img key="temperature_warning_status" :props="props" :src='detect_type(props.row.device_type)' style="height:2.5rem; width:2.5rem;"></q-img>
              <br/>{{ props.row.device_type }}
          </q-td>

          <!-- table data: low_temperature_warning -->
          <q-td key="low_temperature_warning" ref="table_td" :props="props">
            <span style="color:#0094DB">{{props.row.low_temperature_warning}} </span>
            
            <q-popup-edit 
              v-if="props.row.low_temperature_warning"
              ref="low_temperature_popup"
              @before-show="show_setting_low_temperature_threshold(props.row.mac, props.row.low_temperature_warning)"
              @before-hide="hide_setting_low_temperature_threshold(props.row.mac)"
              
              :persistent="!check_flag.low_temperature_warning"

              label-set="儲存"
              label-cancel="取消"
              v-model="props.row.low_temperature_warning" 
              title=""
              style="height:auto; width:auto;"
              class="row justify-center"
              >

              <q-card class="row justify-center" flat style="width:300px; height:200px">
                <div ref="bar_dv_low_temperature" class="row center justify-center q-pa" :style="{width:'100%',height:'100%', align:'center', margin: '0px 0px 0px 0px'}"></div>
              </q-card>

              <div align="right" style="margin-right: 30px">
                <q-icon name="fas fa-info-circle" size="18px"> 
                  <q-tooltip>
                    若感應溫度值高於設定門檻值，將於主畫面看見該設備溫度偏高的警示。
                  </q-tooltip>
                </q-icon>
              </div>

              <div v-if="finish_init_chart_data_low_temperature===false" class="q-pa-sm flex align-center justify-center" style="line-height: 2em"> 
                <span>
                  請稍候...等待資料中。<br/>
                  若等候過久，請確認裝置是否正常運行並重新點選。
                </span>
              </div>
              
              <div v-if="finish_init_chart_data_low_temperature===true" class="q-pa-sm flex justify-center items-center">
                設定低溫警示門檻：
                <q-input 
                  square 
                  filled 
                  dense 
                  v-model="recommended_low_temperature_threshold" 
                 
                  :rules="[ val => verify_columns('low_temperature_warning', val, props.row.high_temperature_warning)]"> 
                </q-input>
              </div>

              <div class="q-pa-sm flex justify-center items-center" v-if="finish_init_chart_data_low_temperature===true">
                預計狀態：<span :style="estimate_temperature_status_style"> {{estimate_temperature_status}} </span>
              </div>

            </q-popup-edit>
          </q-td>


          <!-- table data: high_temperature_warning -->
          <q-td key="high_temperature_warning" ref="table_td" :props="props">
            <span style="color:#EE0000">{{props.row.high_temperature_warning}} </span>
            
            <q-popup-edit 
              v-if="props.row.high_temperature_warning"
              ref="low_temperature_popup"
              @before-show="show_setting_high_temperature_threshold(props.row.mac, props.row.high_temperature_warning)"
              @before-hide="hide_setting_high_temperature_threshold(props.row.mac)"
              
              :persistent="!check_flag.high_temperature_warning"

              label-set="儲存"
              label-cancel="取消"
              v-model="props.row.high_temperature_warning" 
              title=""
              style="height:auto; width:auto;"
              class="row justify-center"
              >

              <q-card class="row justify-center" flat style="width:300px; height:200px">
                <div ref="bar_dv_high_temperature" class="row center justify-center q-pa" :style="{width:'100%',height:'100%', align:'center', margin: '0px 0px 0px 0px'}"></div>
              </q-card>

              <div align="right" style="margin-right: 30px">
                <q-icon name="fas fa-info-circle" size="18px"> 
                  <q-tooltip>
                    若感應溫度值高於設定門檻值，將於主畫面看見該設備溫度偏高的警示。
                  </q-tooltip>
                </q-icon>
              </div>

              <div v-if="finish_init_chart_data_high_temperature===false" class="q-pa-sm flex align-center justify-center" style="line-height: 2em"> 
                <span>
                  請稍候...等待資料中。<br/>
                  若等候過久，請確認裝置是否正常運行。
                </span>
              </div>
              
              <div v-if="finish_init_chart_data_high_temperature===true" class="q-pa-sm flex justify-center items-center">
                設定高溫警示門檻：
                <q-input 
                  square 
                  filled 
                  dense 
                  v-model="recommended_high_temperature_threshold" 
                 
                  :rules="[ val => verify_columns('high_temperature_warning', val, props.row.low_temperature_warning)]"> 
                </q-input>
              </div>

              <div class="q-pa-sm flex justify-center items-center" v-if="finish_init_chart_data_high_temperature===true">
                預計狀態：<span :style="estimate_temperature_status_style"> {{estimate_temperature_status}} </span>
              </div>

            </q-popup-edit>
          </q-td>
        
          <!-- table data: notes -->
          <q-td key="notes" :props="props"> 
              <q-select
                label=""
                filled
                v-model="props.row.notes"
                use-input
                use-chips
                multiple
                dense
                hide-dropdown-icon
                input-debounce="0"
                @new-value="createValue"
                :rules="[ val => verify_columns('notes', val) ]"
                style="width:350px; top:15%; position:relative; "
              />
          </q-td>

          <!-- table data: expiration_time -->
          <!-- <q-td key="expiration_time" :props="props">{{ props.row.expiration_time }}</q-td> -->

          <!-- table data: more information -->
          <!-- <q-td style="text-align:center;">
            <q-btn
              flat
              rounded
              color="primary"
              dense
              @click="open_new()"
              label='我要續約'
            />
          </q-td> -->


        </q-tr>
      </template>
    </q-table>
  </div>
  <center>
    <q-btn :loading="updateDeviceInfo_loading" color="primary" type="submit" label="儲存更新" :disable="notes_flag" @click="updateDeviceInfo()">
      <template v-slot:loading>
        <q-spinner-hourglass class="on-center" />
      </template>
    </q-btn> 
  </center>

  <!-- <q-page-sticky position="bottom-right" :offset="[25, 25]">
    <q-fab
      icon="add"
      direction="up"
      color="primary"
    >
      <q-fab-action @click="control_dialog('open_register')" color="green" icon="phonelink_setup">
        <q-tooltip anchor="center left" self="center right">Register Devices</q-tooltip>
      </q-fab-action>
      <q-fab-action @click="onClick" color="primary" icon="mail" />
    </q-fab>
  </q-page-sticky> -->

</q-page>
</template>

<script>
import echarts from 'echarts';
import { openURL } from 'quasar'

var bar_echarts_low_temperature = {}
var bar_echarts_high_temperature = {}

export default {
  name: 'device-cards',
  data () {
    return {
      rowsPerPageOptions: [0, 10, 30],
      initialPagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 0
        // rowsNumber: xx if getting data from a server
      },
      chart_data_low_temperature: {
        value_array: [],
        time_array: [],
      },
      chart_data_high_temperature: {
        value_array: [],
        time_array: [],
      },
      estimate_run_status: '',
      estimate_run_status_style: '',
      estimate_temperature_status: '',
      estimate_temperature_status_style: '',

      temp_mac: '',

      temp_low_device_temperature: 0,
      temp_high_device_temperature: 0,

      recommended_low_temperature_threshold: 0,
      recommended_high_temperature_threshold: 0,

      low_temperature_threshold_open: false,
      high_temperature_threshold_open: false,

      finish_init_chart_data_low_temperature: false,
      finish_init_chart_data_high_temperature: false,

      updateDeviceInfo_loading: false,
      finish_init_device_data: false,

      check_flag:{
        low_temperature_warning: true,
        high_temperature_warning: true,
      },
      notes_flag: false, 
      device_list: [],
      filter: '',
      columns: [
        // { name: 'switch_status', label: '', field: 'switch_status'},
        // { name: 'switch_off', label: '', field: 'switch_off' },
        // { name: 'switch_off_msg_color', label: '', field: 'switch_off_msg_color' },
        // { name: 'switch_event_msg', label: '', field: 'switch_event_msg' },
        { name: 'mac', label: 'MAC', field: 'mac', sortable: false, align: 'center' },
        { name: 'device_name', label: '裝置名稱', field: 'device_name', sortable: true, align: 'center' },
        { name: 'device_type', label: '裝置型號', field: 'device_type', sortable: true, align: 'center' },
        // { name: 'run_threshold', label: '運行門檻', field: 'run_threshold', sortable: true, align: 'center' },
        { name: 'low_temperature_warning', label: '低溫門檻', field: 'low_temperature_warning', sortable: true, align: 'center' },
        { name: 'high_temperature_warning', label: '高溫門檻', field: 'high_temperature_warning', sortable: true, align: 'center' },
        // { name: 'one_time_duration', label: '單次運行時間（分鐘）', field: 'one_time_duration', sortable: true, align: 'center' },
        // { name: 'one_time_price', label: '單次運行價格', field: 'one_time_price', sortable: true, align: 'center' },
        // { name: 'price_per_second', label: '每秒計算價格', field: 'price_per_second', sortable: true, align: 'center' },
        { name: 'notes', label: '備註標籤', field: 'notes', align: 'left' },
        // { name: 'expiration_time', label: '租賃期限', field: 'expiration_time', sortable: true, align: 'center' },
        // { name: 'detail', label: '更多資訊', field: 'detail', sortable: true, align: 'center' },
        
        // { name: 'run_time_reading', label: '', field: 'run_time_reading'},
        // { name: 'run_accumulate_time_reading', label: '', field: 'run_accumulate_time_reading' },
        // { name: 'toggle_disable', label: '', field: 'toggle_disable' },
        // { name: 'run_percent', label: '運作比率', field: 'run_percent', sortable: true, align: 'center' },
        // { name: 'event_msg', label: '', field: 'event_msg' },
        // { name: 'run_status', label: '運行狀態', field: 'run_status', sortable: true, align: 'center' },
        // { name: 'accumulate_operation_count', label: '累積運行次數', field: 'accumulate_operation_count', sortable: true, align: 'center'},
      ],
      login_status: '',
      vertification_token: '',
      login_timestamp: 0,
      user_devices_list: [],
      role: '',

      errorProtein: false,
      errorMessageProtein: ''
    }
  },
  created () {
    this.device_list = []
    // get login user information
    var loginInfo = JSON.parse(localStorage.getItem('loginInfo'))
    console.log(loginInfo)
    this.role = loginInfo.role
    this.vertification_token = loginInfo.vertification_token
    this.user_devices_list = loginInfo.user_devices_list.vaccinecloud



    this.show_notification()
    // setTimeout(this.show_notification(), 3000)


    // subscribe mqtt
    this.$mqtt.subscribe('frrut/vaccinecloud/status/device/getdevices/#')
    // console.log('subscribe topic: ', 'frrut/vaccinecloud/status/device/getdevices/#')

    // this.$mqtt.unsubscribe('frrut/vaccinecloud/status/#')

    this.getdevices_data = {
      role: this.role,
      vertification_token: this.vertification_token,
      user_devices_list: this.user_devices_list,
    }
  
    this.$mqtt.publish('frrut/vaccinecloud/device/getdevices', JSON.stringify(this.getdevices_data))
  },
  mqtt:{
    'frrut/vaccinecloud/status/device/getdevices/#' (data, topic) {
      // console.log('topic: ', topic)
      if (topic === ('frrut/vaccinecloud/status/device/getdevices/' + this.vertification_token)) {
        this.dataobj = JSON.parse(data)
        console.log('this.dataobj: ', this.dataobj)
        this.device_list = this.dataobj.devices

        // for(var i = 0; i < this.device_list.length; i++){
        //   this.device_list[i].price_per_second = Math.round((this.device_list[i].one_time_price / (this.device_list[i].one_time_duration * 60)) * 10000) / 10000
        // }

        this.finish_init_device_data = true
      }
    },
    'frrut/vaccinecloud/device/device_update/receive_data/#' (data, topic) {
      // console.log('topic: ', topic)
      if (topic === ('frrut/vaccinecloud/device/device_update/receive_data/' + this.vertification_token)) {
        this.dataobj = JSON.parse(data)
        console.log('receive_data this.dataobj: ', this.dataobj)

        if(this.dataobj === true){
          this.updateDeviceInfo_loading = false
          window.location.reload()
        }
        else{
          this.updateDeviceInfo_loading = false
          console.log('something wrong.')
        }
      } 

    },
    'frrut/vaccinecloud/status/#' (data, topic){
      // if (!topic.includes('frrut/vaccinecloud/status/device/getdevices/')) {
      if (topic === ('frrut/vaccinecloud/status/' + this.temp_mac)) {
        this.single_obj = JSON.parse(data)
        this.single_obj.toggle_disable = false
        console.log('this.single_obj: ', this.single_obj)

        var temp_time_string = (new Date()).toLocaleTimeString().replace(/^\D*/, '')
        console.log('temp_time_string: ', temp_time_string)
        
        // 開啟設定溫度門檻值適用
        if(this.low_temperature_threshold_open === true){
          
          this.temp_low_device_temperature = this.single_obj.temperature_1
          
          this.chart_data_low_temperature.value_array.push(this.single_obj.temperature_1)

          if(this.chart_data_low_temperature.value_array.length >= 5){
            this.chart_data_low_temperature.value_array.shift()
          }
          this.chart_data_low_temperature.time_array.push(temp_time_string)

          if(this.chart_data_low_temperature.time_array.length >= 5){
            this.chart_data_low_temperature.time_array.shift()
          }
          
          var option_temperature = {
            xAxis: {
              type: 'category',
              data: this.chart_data_low_temperature.time_array,
              maxInterval: 3600 * 1000,
              silent: false,
              splitLine: {
                  show: false
              },
              splitArea: {
                  show: false
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              splitArea: {
                  show: false
              },
              axisTick: {
                show: false
              }
            },
            series: [{
              type: 'line',
              name: '溫度即時數值',
              data: this.chart_data_low_temperature.value_array,
              itemStyle: {
                  color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgb(255, 158, 68)'
                  }, {
                      offset: 1,
                      color: 'rgb(255, 70, 131)'
                  }])
              },
              // showBackground: true,
              states: { hover: 'none' },
              silent: true
            }]
          };
          
          bar_echarts_low_temperature.setOption(option_temperature)

          this.finish_init_chart_data_low_temperature = true
        }

        if(this.high_temperature_threshold_open === true){
          
          this.temp_high_device_temperature = this.single_obj.temperature_1
          
          this.chart_data_high_temperature.value_array.push(this.single_obj.temperature_1)

          if(this.chart_data_high_temperature.value_array.length >= 5){
            this.chart_data_high_temperature.value_array.shift()
          }
          this.chart_data_high_temperature.time_array.push(temp_time_string)

          if(this.chart_data_high_temperature.time_array.length >= 5){
            this.chart_data_high_temperature.time_array.shift()
          }
          
          var option_temperature = {
            xAxis: {
              type: 'category',
              data: this.chart_data_high_temperature.time_array,
              maxInterval: 3600 * 1000,
              silent: false,
              splitLine: {
                  show: false
              },
              splitArea: {
                  show: false
              },
              axisTick: {
                show: false
              }
            },
            yAxis: {
              type: 'value',
              splitArea: {
                  show: false
              },
              axisTick: {
                show: false
              }
            },
            series: [{
              type: 'line',
              name: '溫度即時數值',
              data: this.chart_data_high_temperature.value_array,
              itemStyle: {
                  color: 'rgb(255, 70, 131)'
              },
              areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: 'rgb(255, 158, 68)'
                  }, {
                      offset: 1,
                      color: 'rgb(255, 70, 131)'
                  }])
              },
              // showBackground: true,
              states: { hover: 'none' },
              silent: true
            }]
          };
          
          bar_echarts_high_temperature.setOption(option_temperature)

          this.finish_init_chart_data_high_temperature = true
        }
        
      }
    },
  },
  methods: {
    show_notification(){

      setTimeout(() => {
        this.$q.notify({
          icon: 'save',
          message: '小提醒',
          caption: '修改資料後，記得要點選下方的 "儲存更新" 哦！',
          position: 'bottom',
          actions: [
            { label: '瞭解', color: 'white' }
          ],
          timeout: 10000,
        })
      }, 3000)

    },
    show_setting_low_temperature_threshold(mac, threshold){

      this.low_temperature_threshold_open = true
      this.temp_mac = mac 
      this.topicmqtt = 'frrut/vaccinecloud/status/' + mac // + this.MAC
      this.$mqtt.subscribe(this.topicmqtt)
      console.log('subscribe mqtt: ', this.topicmqtt)

      this.recommended_low_temperature_threshold = threshold

      this.$nextTick(function () {
          // console.log("change!!!!")
          // this.initialize_charts(this.chart_data)

        let bar_dv_low_temperature = this.$refs.bar_dv_low_temperature;
        bar_echarts_low_temperature = echarts.init(bar_dv_low_temperature)

        var option_temperature = {
          title: {
              text: '溫度即時數值',
              left: 'center',
              top: '3%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
          },
          grid: {
            top: '20%',
            bottom: '5%',
            // left: '12%',
            right: '15%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: this.chart_data_low_temperature.time_array,
            maxInterval: 3600 * 1000,
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            splitArea: {
                show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [{
            type: 'line',
            name: '溫度即時數值',
            data: this.chart_data_low_temperature.value_array,
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            // showBackground: true,
            states: { hover: 'none' },
            silent: true
          }]
        };
        bar_echarts_low_temperature.setOption(option_temperature)

        window.addEventListener('resize', bar_echarts_low_temperature.resize);
      })
      // console.log("device mac: ", mac)

    },
    hide_setting_low_temperature_threshold(mac){
      this.temp_mac = ''
      this.topicmqtt = 'frrut/vaccinecloud/status/' + mac // + this.MAC
      this.$mqtt.unsubscribe(this.topicmqtt)
      console.log('unsubscribe mqtt: ', this.topicmqtt)
      
      this.chart_data_low_temperature =  {
        value_array: [],
        time_array: [],
      }

      // console.log("this.check_flag.low_temperature_warning: ", this.check_flag.low_temperature_warning)

      if(this.check_flag.low_temperature_warning === true){
        this.save_setting_low_temperature_threshold(mac)
      }

      this.finish_init_chart_data_low_temperature = false
      this.low_temperature_threshold_open = false
      // console.log("hide mac: ", mac)
    },
    save_setting_low_temperature_threshold(mac){
      for(var i = 0; i < this.device_list.length; i++){
        if(this.device_list[i].mac === mac){
          this.device_list[i].low_temperature_warning = this.recommended_low_temperature_threshold
        }
      }
    },

    show_setting_high_temperature_threshold(mac, threshold){

      this.high_temperature_threshold_open = true
      this.temp_mac = mac 
      this.topicmqtt = 'frrut/vaccinecloud/status/' + mac // + this.MAC
      this.$mqtt.subscribe(this.topicmqtt)
      console.log('subscribe mqtt: ', this.topicmqtt)

      this.recommended_high_temperature_threshold = threshold

      this.$nextTick(function () {
          // console.log("change!!!!")
          // this.initialize_charts(this.chart_data)

        let bar_dv_high_temperature = this.$refs.bar_dv_high_temperature;
        bar_echarts_high_temperature = echarts.init(bar_dv_high_temperature)

        var option_temperature = {
          title: {
              text: '溫度即時數值',
              left: 'center',
              top: '3%'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
          },
          grid: {
            top: '20%',
            bottom: '5%',
            // left: '12%',
            right: '15%',
            containLabel: true,
          },
          xAxis: {
            type: 'category',
            data: this.chart_data_high_temperature.time_array,
            maxInterval: 3600 * 1000,
            silent: false,
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'value',
            splitArea: {
                show: false
            },
            axisTick: {
              show: false
            }
          },
          series: [{
            type: 'line',
            name: '溫度即時數值',
            data: this.chart_data_high_temperature.value_array,
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            // showBackground: true,
            states: { hover: 'none' },
            silent: true
          }]
        };
        bar_echarts_high_temperature.setOption(option_temperature)

        window.addEventListener('resize', bar_echarts_high_temperature.resize);
      })
      // console.log("device mac: ", mac)
    },
    hide_setting_high_temperature_threshold(mac){
      this.temp_mac = ''
      this.topicmqtt = 'frrut/vaccinecloud/status/' + mac // + this.MAC
      this.$mqtt.unsubscribe(this.topicmqtt)
      console.log('unsubscribe mqtt: ', this.topicmqtt)
      
      this.chart_data_high_temperature =  {
        value_array: [],
        time_array: [],
      }

      if(this.check_flag.high_temperature_warning === true){
        this.save_setting_high_temperature_threshold(mac)
      }

      this.finish_init_chart_data_high_temperature = false
      this.high_temperature_threshold_open = false
      // console.log("hide mac: ", mac)
    },
    save_setting_high_temperature_threshold(mac){
      for(var i = 0; i < this.device_list.length; i++){
        if(this.device_list[i].mac === mac){
          this.device_list[i].high_temperature_warning = this.recommended_high_temperature_threshold
        }
      }
    },

    open_new(){
      openURL('https://frrut.com')
    },
    updateDeviceInfo(){
      // console.log(this.device_list)
      this.updateDeviceInfo_loading = true

      var putData = []
      for(var i = 0; i < this.device_list.length; i++){

        if(this.device_list[i].notes.length === 0){
          this.notes = []
        }
        else{
          this.notes = String(this.device_list[i].notes)
        }

        putData[i]= {
          'mac': this.device_list[i].mac,
          'device_name': this.device_list[i].device_name,
          'device_type': this.device_list[i].device_type,
          'low_temperature_warning': parseFloat(this.device_list[i].low_temperature_warning),
          'high_temperature_warning': parseFloat(this.device_list[i].high_temperature_warning),
          // "one_time_duration": this.device_list[i].one_time_duration,
          // "one_time_price": this.device_list[i].one_time_price,
          // "expiration_time": this.device_list[i].expiration_time,
          'notes': this.notes,
          'vertification_token': this.vertification_token
        }
      }
      // console.log("putData: ", putData)
      this.$mqtt.publish('frrut/vaccinecloud/device/device_update', JSON.stringify(putData))

      // subscribe mqtt for receiving result
      this.$mqtt.subscribe('frrut/vaccinecloud/device/device_update/receive_data/#')
      
    },
    detect_type (type) {
      if (type === 'tm100-ds18') {
        return require('../../images/tm100-ds18.png')
      } 
    },
    createValue (val, done) {
      if(val.length > 15 || val.includes(',')){
      }
      else{
        done(val, 'add-unique')
      }
    },
    verify_columns(which, val, compare_temperature_value){
      switch(which)
      {
        case 'low_temperature_warning':
          return new Promise((resolve) => {
            function validate_number(input) {
              var re = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/
              return re.test(String(input))
            }

            if (!val) {
              resolve(!!val || '此欄位不得為空')
              this.check_flag.low_temperature_warning = false
            } 
            else if (parseFloat(val) >= parseFloat(compare_temperature_value)) {
              resolve(parseFloat(val) < parseFloat(compare_temperature_value) || ('必須低於高溫警告門檻 ' + compare_temperature_value + ' ℃'))
              this.check_flag.low_temperature_warning = false
            }
            else if (!validate_number(val)){
              resolve(validate_number(val) || '格式不符，請確認是否輸入正確')
            }
            else {
              resolve(val => val || '')
              this.check_flag.low_temperature_warning = true
            }
          })

        case 'high_temperature_warning':
          return new Promise((resolve) => {
            function validate_number(input) {
              var re = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/
              return re.test(String(input))
            }

            if (!val) {
              resolve(!!val || '此欄位不得為空')
              this.check_flag.high_temperature_warning = false
            } 
            else if (parseFloat(val) <= parseFloat(compare_temperature_value)) {
              resolve(parseFloat(val) > parseFloat(compare_temperature_value) || ('必須高於低溫警告門檻 ' + compare_temperature_value + ' ℃'))
              this.check_flag.high_temperature_warning = false
            } 
            else if (!validate_number(val)){
              resolve(validate_number(val) || '格式不符，請確認是否輸入正確')
            }
            else {
              resolve(val => val || '')
              this.check_flag.high_temperature_warning = true
            }
          })


        case 'notes':
          return new Promise((resolve) => {
            if(typeof(val) === 'string'){
              resolve(val=> val || '')
            }
            else if (val.length > 3){
              resolve(val.length < 3 || '最多設置 3 個標籤')
              this.notes_flag = true
            }  
            else{
              resolve(val=> val || '')
              this.notes_flag = false
            }
          })
          break;
      }
    },
    // reloadPage () {
    //   window.location.reload()
    // },
  },
  watch: {
    device_list(){

      console.log('something shange')
    },

    recommended_low_temperature_threshold(){
      if(this.temp_low_device_temperature <= this.recommended_low_temperature_threshold){
        this.estimate_temperature_status = '低溫警告'
        this.estimate_temperature_status_style = 'color:#00E8EE; font-weight:bold;'
      }
      else{
        this.estimate_temperature_status = '溫度正常'
        this.estimate_temperature_status_style = 'color:#26CE00; font-weight:bold;'
      }
    },
    temp_low_device_temperature(){
      if(this.temp_low_device_temperature <= this.recommended_low_temperature_threshold){
        this.estimate_temperature_status = '低溫警告'
        this.estimate_temperature_status_style = 'color:#00E8EE; font-weight:bold;'
      }
      else{
        this.estimate_temperature_status = '溫度正常'
        this.estimate_temperature_status_style = 'color:#26CE00; font-weight:bold;'
      }
    },
    recommended_high_temperature_threshold(){
      if(this.temp_high_device_temperature >= this.recommended_high_temperature_threshold){
        this.estimate_temperature_status = '高溫警告'
        this.estimate_temperature_status_style = 'color:#EE0000; font-weight:bold;'
      }
      else{
        this.estimate_temperature_status = '溫度正常'
        this.estimate_temperature_status_style = 'color:#26CE00; font-weight:bold;'
      }
    },
    temp_high_device_temperature(){
      if(this.temp_high_device_temperature >= this.recommended_high_temperature_threshold){
        this.estimate_temperature_status = '高溫警告'
        this.estimate_temperature_status_style = 'color:#EE0000; font-weight:bold;'
      }
      else{
        this.estimate_temperature_status = '溫度正常'
        this.estimate_temperature_status_style = 'color:#26CE00; font-weight:bold;'
      }
    }

  }
}
</script>


<style lang="sass">
.my-devices-list-table
  /* max height is important */
  .q-table__middle
    min-height: 250px
    max-height: 500px

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

.my-card
  width: 100%
  min-width: 900px
  min-height: 300px
</style>
