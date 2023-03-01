<template>
  <q-page class="q-pa-md flex flex-center">

    <q-list >
      <q-item>
        <q-card class="q-pa-md">
          <div class="q-pa-md">
            <p class="text-h5">【{{article.project_experience_iMaskerYA_title}}】</p>

            <div class="row">
              <q-card class="q-ma-xs col-md col-sm-12 col-xs-12">
                <q-img src="../images/即時口罩偵測系統_iMaskerYA_dashboard.png"></q-img>
              </q-card>
              <q-card class="q-ma-xs col-md col-sm-12 col-xs-12">
                <q-img src="../images/即時口罩偵測系統_iMaskerYA_history.png"></q-img>
              </q-card>
            </div>
            
            <!-- <span class="text-h6" style="white-space:pre-line; text-indent:2em; display:inline-block;"> -->
            <p class="text-h6" style="margin-bottom:1em">
              <!-- <span class="text-bold">{{article.project_experience_1_content}}</span> -->
              {{article.project_experience_iMaskerYA_content_1}}
            </p>
            <p class="text-h6" style="margin-bottom:1em">
              {{article.project_experience_iMaskerYA_content_2}}
            </p>

            <p class="text-bold" style="margin-bottom:1em">
              <a href="https://youtu.be/GY70J7ilkrk" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">Demo 影片 》</a>
              &nbsp;&nbsp;&nbsp;
              <a href="https://github.com/Pianochicken/iMaskerYA" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">Github 》</a>
            </p>
          </div>
        </q-card>
      </q-item>

      <q-item>
        <q-card class="q-pa-md">
          <div class="q-pa-md">
            <p class="text-h5">【{{article.project_experience_itseed_title}}】</p>

            <div class="row">
              <div class="row q-ma-xs col-md col-sm-12 col-xs-12">
                <q-card class="q-ma-xs col-md col-sm-12 col-xs-12">
                  <q-img src="../images/itseed_1.jpg"></q-img>
                </q-card>
                <label class="row justify-center col-12">學術交流：大連海事大學</label>
              </div>
              <div class="row q-ma-xs col-md col-sm-12 col-xs-12">
                <q-card class="q-ma-xs col-md col-sm-12 col-xs-12">
                  <q-img src="../images/itseed_2.jpg"></q-img>
                </q-card>
                <label class="row justify-center col-12">企業參訪：IBM Studios</label>
              </div>
            </div>
            
            <!-- <span class="text-h6" style="white-space:pre-line; text-indent:2em; display:inline-block;"> -->
            <p class="text-h6" style="margin-bottom:1em">
              <!-- <span class="text-bold">{{article.project_experience_1_content}}</span> -->
              {{article.project_experience_itseed_content_1}}
            </p>
            <p class="text-h6" style="margin-bottom:1em">
              {{article.project_experience_itseed_content_2}}
            </p>

            <p class="text-bold" style="margin-bottom:1em">
              <a href="https://drive.google.com/drive/folders/1EZNak-ulLT_2LxGcG6nQi5w4h6nFdjTj?usp=sharing" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">前往查看 》</a>
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
        project_experience_iMaskerYA_title: '口罩實時偵測系統iMaskerYA',
        project_experience_iMaskerYA_content_1: 'Covid-19 疫情影響，學校需要輪派工讀生至各學院門口檢查進出人員是否配戴口罩，因此決定實作即時口罩偵測系統，希望能解決如此耗人費時的問題。',
        project_experience_iMaskerYA_content_2: '我們小組使用 YOLOv4 演算法訓練一個可辨識人員有無配戴口罩的模型，再將影像直接結合至以 Quasar 架設的前端頁面，達到「即時偵測、警示、統計」的專案目標，最後在實際操作的階段順利Demo，獲得教授和其他小組的讚賞！',
        
        project_experience_itseed_title: '資訊種子培訓計畫15th－海外參訪專案總召',
        project_experience_itseed_content_1: '資訊種子培訓計畫是由新北市電腦商業同業公會所創建為期一年的培訓活動，由 35 位來自各領域的夥伴一起經歷 6 大專案、20 堂課程及多次企業參訪的機會。',
        project_experience_itseed_content_2: '在六大專案之中，我擔任資訊種子 15 屆的海外參訪專案的總召，負責組織學術、企業、文化、設計四個部門，至中國大連市當地五間企業進行參訪，瞭解產業知識與發展，並與大連理工大學、大連海事大學超過100名學生交流互動，安排設計思考工作坊SDGs、網紅經濟探討講座等活動，度過一段充實愉快、收穫滿滿的海外參訪之旅。',
        },
    }
  },
}
</script>

