<template>
  <q-page class="q-pa-md flex flex-center">

    <q-list >
      <q-item class="row justify-center">
        <q-card flat class="q-px-md col-md-8 col-sm-10">
          <div class="q-px-md justify-center">
            <p class="text-h5 text-bold text-center">{{article.project_experience_iMaskerYA_title}}</p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-9 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_Demo_1.gif'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> iMaskerYA Front-End: Main Dashboard</p>
            </div>

            <div class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              <p> {{article.project_experience_iMaskerYA_content_1}} </p>
              <li>前端呈現： <a style="text-decoration: none; color: teal" target="_blank" href="https://quasar.dev/">Quasar Framework</a></li>
              <li>影像偵測： <a style="text-decoration: none; color: teal" target="_blank" href="https://github.com/AlexeyAB/darknet">Yolo v4</a> </li>
              <li>程式執行： Python </li>
              <li>數據紀錄： C、C++ </li>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_2}}
            </p>
            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_3}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-9 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_software_engineering_product_vision.png'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> Ian Sommerville (2019), Engineering Software Products: An Introduction to Modern Software Engineering, Pearson.</p>
            </div>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-12 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_Gantt_Chart.png'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> iMaskerYA: Project's Gantt Chart</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_4}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-9 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_Frame_Diagram.png'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> iMaskerYA Flowchart</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_5}}
            </p>

            <div class="row q-pa-none justify-center">
              <q-card class=" col-md-6 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_dashboard_with_mask.png'></q-img>
              </q-card>
              <q-card class=" col-md-6 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_dashboard_no_mask.png'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> iMaskerYA Detection: With Mask / No Mask</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_6}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-9 col-sm-12 col-xs-12">
                <q-img src='../../images/iMaskerYA/iMaskerYA_Demo_2.gif'></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> iMaskerYA Front-End: History Data</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_7}}
            </p>

            
            <p class="text-bold" style="margin-bottom:1em">
              <a href="https://youtu.be/GY70J7ilkrk" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">Demo 影片 》</a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Pianochicken/iMaskerYA" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">Github 》</a>
            </p>

            <br/>

            <p class="text-h6 q-pa-xs text-center" style="background-color: #F2F4F4; margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_iMaskerYA_content_8}}
            </p>

          </div>
        </q-card>
      </q-item>
    </q-list>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      article: {
        project_experience_iMaskerYA_title: '口罩即時偵測系統 iMaskerYA',
        project_experience_iMaskerYA_content_1: '　　iMaskerYA 是我在就學期間修習軟體工程課程時所做的小組專案，我是專案的負責人兼開發人員，負責帶領和統籌小組進行開會討論及擬定開發計畫，而我們在此專案運用到的技術主要為：',
        project_experience_iMaskerYA_content_2: '　　我們的生活受到 Covid-19 疫情的影響，學校的每個學院都需要輪派工讀生到門口檢查進出人員是否配戴口罩，對於學校來說，十分耗費人力資源；\
                                                對於工讀生來說也非常浪費時間，因此我們小組決定要實作一個即時口罩偵測系統，希望能解決這費時累人的問題。',
        project_experience_iMaskerYA_content_3: '　　為了先釐清專案的方向，除了依照軟體工程的流程進行討論與後續開發，我們也以甘特圖列出整體時程，較能清楚呈現出整個專案的開發流程，接著再透過 Moore’s Product Vision 幫助我們先快速確定系統的需求以及定位，包含專案產品的目標群眾 TA/TC (Target Audience/Custoemr)、群眾特質、產品角色、關鍵優勢、競爭分析等。',
        project_experience_iMaskerYA_content_4: '　　這是以 diagrams.net 畫出的 iMaskerYA 運作流程：我們首先透過攝影裝置將影像輸入至 Yolo v4 影像辨識演算法所訓練出的口罩模型來進行判讀，當偵測到的人若是有戴口罩的話就顯示通過，若發現有未戴口罩的人則會依選擇的聲音模式來發出不同形式的警示。偵測的數據資料將會同步以 JSON 格式儲存，再由前端的頁面和圖表來呈現過去的歷史偵測紀錄。',
        project_experience_iMaskerYA_content_5: '　　Yolo v4 物件偵測演算法在 2020 年 4 月時發佈，由俄羅斯開發者 Alexey 與臺灣中研院的廖弘源特聘研究員以及王建堯博士後研究員所共同開發，無論是在偵測速度、準確率等方面的表現皆優於上一代的 Yolo v3，由於我在實習時就有接觸及使用過 Yolo v3 的經驗，因此在這次發想 iMaskerYA 專案時，就想到可以運用此項技術來達到我們的需求。在此專案中我們所訓練及使用的是 Yolo v4 的 tiny 模型，在運算上所耗費及需要的資源和門檻較低，因此不需要特別強大的 GPU 就可以有高 FPS 的影像保線，滿足我們專案對即時口罩偵測的需求。',
        project_experience_iMaskerYA_content_6: '　　在這個專案當中，我認為最困難的部分是在整合各個技術的內容，必須要將各自程式運算的結果串接起來並且呈現才能達成我們的專案目標。為了在 Dashboard 即時呈現偵測畫面，我們需要以 iframe 去讀取 Yolo v4 所輸出至其他 port 的即時偵測影像。為了紀錄和顯示偵測的資料，我們從 Yolo v4 的 C++ 程式進行改寫，將偵測後的數據結果直接儲存為前端圖表所要的 JSON 格式檔案。最後則是再透過 Python multithreading 來同步執行 Quasar 前端以及 Yolo v4影像偵測。',
        project_experience_iMaskerYA_content_7: '　　雖然還有不少細節和功能可以再調整改善，不過最初所設立的三個專案目標「即時偵測、清楚警示、歷史統計」都已經能夠達成，這個專案能夠順利完成真的讓我獲得不少成就感，一是能將過去所學和新學習的項目互相結合，二是產出可以實際運作執行的專案，也讓我在期末專題呈現時獲得同學和老師共同票選出的最佳小組和最佳個人獎。',
        project_experience_iMaskerYA_content_8: '　　最後，希望也祝福全世界的 Covid-19 疫情都能趨緩。',
      
      },
    }
  },
  methods:{
    getImageUrl(imagePath) {
      return new URL(`../../${imagePath}`, import.meta.url).href
    },
  }
}
</script>

