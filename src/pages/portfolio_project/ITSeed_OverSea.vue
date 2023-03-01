<template>
  <q-page class="q-pa-md flex flex-center">

    <q-list >
      <q-item class="row justify-center">
        <q-card flat class="q-px-md col-md-8 col-sm-10">
          <div class="q-px-md justify-center">
            <p class="text-h5 text-bold text-center">{{article.project_experience_ITSeed_OverSea_title}}</p>
              
            <div class="row q-pa-sm justify-center">
              <q-card flat class="q-ma-xs row justify-center col-md-6 col-sm-12 col-xs-12">
                <q-img width="60%" src="../../images/ITSeed_OverSea/ITSeed_logo.png"></q-img>
              </q-card>
            </div>

            <div class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              <p> <a style="text-decoration: none; color: teal" href="https://www.itseed.tw/" target="_blank">　　資訊種子培訓計畫</a>{{article.project_experience_ITSeed_OverSea_content_1}} </p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_ITSeed_OverSea_content_2}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-8 col-sm-12 col-xs-12">
                <q-img src="../../images/ITSeed_OverSea/ITSeed_OverSea_Organization.png"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> 海外參訪專案：組織架構圖</p>
            </div>

            <div class="q-pa-md text-h6" style="background-color: #F2F4F4; margin-bottom:1em; font-weight:normal; font-style: italic;">
              {{article.project_experience_ITSeed_OverSea_content_3}}
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_ITSeed_OverSea_content_4}}
            </p>

            <div class="row q-pa-md justify-center">
              <q-card class=" col-md-5 col-sm-12 col-xs-12">
                <q-img src="../../images/ITSeed_OverSea/ITSeed_OverSea_Maritime_University.jpg"></q-img>
              </q-card>
              <q-card class=" col-md-5 col-sm-12 col-xs-12">
                <q-img src="../../images/ITSeed_OverSea/ITSeed_OverSea_Technology_University.jpg"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> 學術交流：大連海事大學(網紅經濟) / 大連理工大學(SDGs)</p>
            </div>


            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-8 col-sm-12 col-xs-12">
                <q-img src="../../images/ITSeed_OverSea/ITSeed_OverSea_IBM.jpg"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> 企業參訪: IBM Studios</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_ITSeed_OverSea_content_5}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-8 col-sm-12 col-xs-12">
                <q-img src="../../images/ITSeed_OverSea/ITSeed_OverSea_banquet.jpg"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> 海外參訪專案：春酒晚宴</p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_ITSeed_OverSea_content_6}}
            </p>


            <p class="text-bold" style="margin-bottom:1em">
              <a href="https://drive.google.com/drive/folders/1EZNak-ulLT_2LxGcG6nQi5w4h6nFdjTj?usp=sharing" target="_blank" style="font-size:1.1em; text-decoration:none; color:#0062E1">相關資料 》</a>
            </p>

            <br/>

            <p class="text-h6 text-center" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_ITSeed_OverSea_content_8}}
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
        project_experience_ITSeed_OverSea_title: '資訊種子培訓計畫15th－海外參訪專案',
        project_experience_ITSeed_OverSea_content_1: '是由新北市電腦商業同業公會所創建為期一年的培訓活動，每一屆的專案及課程都會有所調整，在第十五屆當中，我們由 35 位來自各個學校不同領域的夥伴所組成，並一起經歷 6 大專案、20 堂課程以及多次企業參訪的機會，如 Google、Microsoft、Dcard 等知名企業。',
        project_experience_ITSeed_OverSea_content_2: '　　在六大專案之中，我擔任資訊種子第 15 屆的海外參訪專案的總召，負責組織學術、企業、文化、設計四個部門，至中國大連市五間企業，如 IBM、華錄集團等進行參訪，瞭解相關產業知識與技術發展，並與大連理工大學、大連海事大學超過100名學生交流互動，安排 SDGs 設計思考工作坊、網紅經濟探討講座等活動，度過一段充實愉快、收穫滿滿的海外參訪之旅。',
        project_experience_ITSeed_OverSea_content_3: '「我們每個人都能敞開心胸地去迎接世界，看見不一樣的文化，不一樣的企業，不一樣的人，不一樣的世界，彼此交流互動、開拓視野。」',
        
        project_experience_ITSeed_OverSea_content_4: '　　這是當時在參選總召時我所提出的願景，希望能透過這樣海外參訪的專案，讓同屆夥伴無論是在籌備期或實際參訪期都能有個難忘的歷練和體驗。資種給予我們學員在專案的發展空間很大，從參與競選提出政見開始，再到組織幹部團隊、安排計畫時程、撰寫企劃書與討論、聯絡企業單位，排練活動、問卷調查與設計文宣產品等，都必須要一手包辦，並且在正式出發前也需要經過三次的驗收與回饋，不斷針對各個細節去改善。',
        project_experience_ITSeed_OverSea_content_5: '　　專案的籌備過程中自然也遇到不少困難和艱辛，我還記得當時尚未參選的我有時候就會擔心，隨和的自己會不會沒辦法好好帶領一個團隊，但經過這次的海外參訪專案後，我發現這些特質卻反而能讓我幫助團隊合作變得更融洽，往往能在意料不到的地方派上用場，或許未來的自己就不會再那麼容易妄自菲薄，而是更懂得將自己的特質發揮地更好。',
        project_experience_ITSeed_OverSea_content_6: '　　最後，也是最令人感到開心的收穫就是，看見十五屆的夥伴們因為一起參加海參，又認識到更深入的彼此，並且能夠與相性極合的團隊共事，即便再累，仍能不失歡笑地將各種困難、突如其來的挑戰一件件通通完成。海外參訪是我在進入資種時就十分感興趣的專案，很慶幸自己沒有因為其他外在的壓力，而錯失踏出勇氣的這一步，我會帶著這些難能可貴的經驗和回憶，繼續朝向人生的下一個篇章前進。',
        // project_experience_ITSeed_OverSea_content_7: '　　雖然還有不少細節和功能可以再調整改善，不過最初所設立的三個專案目標「即時偵測、清楚警示、歷史統計」都已經能夠達成，這個專案能夠順利完成真的讓我獲得不少成就感，一是能將過去所學和新學習的項目互相結合，二是產出可以實際運作執行的專案，也讓我在期末專題呈現時獲得同學和老師共同票選出的最佳小組和最佳個人獎。',
        // project_experience_ITSeed_OverSea_content_8: '　　最後，希望也祝福全世界的 Covid-19 疫情都能趨緩。',
      
      },
    }
  },
}
</script>