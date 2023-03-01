<template>
  <q-page class="q-pa-md ">
    <q-table
      grid
      :rows="rows"
      :columns="columns"
      row-key="title"
      hide-header
      hide-bottom
      hide-selected-banner
      hide-pagination
      card-class="row q-pa-md justify-center"
    >

      <template v-slot:item="props">
        <div class="col-lg-3 col-md-4 col-sm-12 col-xs-12">
          <q-card class="q-ma-sm">
            <q-btn padding="0" style="height: 100%; width:100%;" flat @click="choose_project(props)">
              <q-img class="my-image" style="height:100%;" :src="require_image(props.row.type)">
                
                <div class="absolute-bottom text-subtitle3 text-center" style="line-height:1em;">
                  {{props.row.title}}
                </div>
              </q-img>
            </q-btn>
          </q-card>
        </div>
        
      </template>
    </q-table>

  </q-page>
</template>

<script>

export default {
  name: 'PageIndex',
  data () {
    return {
      article: {
        project_experience_iMaskerYA_title: '口罩實時偵測系統iMaskerYA',
        project_experience_iMaskerYA_content_1: 'Covid-19 疫情影響，學校需要輪派工讀生至各學院門口檢查進出人員是否配戴口罩，因此決定實作即時口罩偵測系統，希望能解決如此耗人費時的問題。',
        project_experience_iMaskerYA_content_2: '我們小組使用 YOLOv4 演算法訓練一個可辨識人員有無配戴口罩的模型，再將影像直接結合至以 Quasar 架設的前端頁面，達到「即時偵測、警示、統計」的專案目標，最後在實際操作的階段順利Demo，獲得教授和其他小組的讚賞！',
        
        project_experience_itseed_title: '資訊種子培訓計畫15th－海外參訪專案總召',
        project_experience_itseed_content_1: '資訊種子培訓計畫是由新北市電腦商業同業公會所創建為期一年的培訓活動，由 35 位來自各領域的夥伴一起經歷 6 大專案、20 堂課程及多次企業參訪的機會。',
        project_experience_itseed_content_2: '在六大專案之中，我擔任資訊種子 15 屆的海外參訪專案的總召，負責組織學術、企業、文化、設計四個部門，至中國大連市當地五間企業進行參訪，瞭解產業知識與發展，並與大連理工大學、大連海事大學超過100名學生交流互動，安排設計思考工作坊SDGs、網紅經濟探討講座等活動，度過一段充實愉快、收穫滿滿的海外參訪之旅。',
      },

      columns: [
        { name: 'title', align: 'center', label: '標題', field: 'title', sortable: true },
        { name: 'content_1', label: '內容1', field: 'content_1', sortable: true },
        { name: 'content_2', label: '內容2', field: 'content_2' },
        { name: 'demo_text', label: 'demo_text', field: 'demo_text' },
        { name: 'github_text', label: 'github_text', field: 'github_text' },
      ],

      rows: [
        {
          title: '智能合約 Beverage',
          type: 'smart_contract_beverage'
        },
        {
          title: '疫苗雲端監控系統 VaccineCloud',
          type: 'vaccinecloud'
        },
        {
          title: '口罩即時偵測系統 iMaskerYA',
          type: 'imaskerya'
        },
        {
          title: '資訊種子培訓計畫15th－海外參訪專案',
          type: 'itseed_oversea'
        }
      ]
    }
  },
  methods:{
    getImageUrl(imagePath) {
      return new URL(`${imagePath}`, import.meta.url).href
    },
    choose_project(prop){
      console.log('prop: ', prop)
      switch (prop.row.type){        
        case 'smart_contract_beverage':
          this.$router.push({ path: '/portfolio_project/Smart_Contract_Beverage'})
          break;

        case 'vaccinecloud':
          this.$router.push({ path: '/portfolio_project/VaccineCloud'})
          break;

        case 'imaskerya':
          this.$router.push({ path: '/portfolio_project/iMaskerYA'})
          break;
        
        case 'itseed_oversea':
          this.$router.push({ path: '/portfolio_project/ITSeed_OverSea'})
          break;
      }
        
    },
    require_image(type){
      switch (type){
        case 'smart_contract_beverage':
          return require('../images/Smart_Contract_Beverage/Smart_Contract_Beverage.png')

        case 'vaccinecloud':
          return require('../images/VaccineCloud/VaccineCloud_dashboard.png')

        case 'imaskerya':
          return require('../images/iMaskerYA_dashboard.png')

        case 'itseed_oversea':
          return require('../images/itseed_oversea_1.png')
      }
    }
  },
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  min-width: 250px

.my-image:hover
  opacity: 0.75
  transition: .25s

.my-image:not(:hover)
  opacity: 1
  transition: .25s
</style>
