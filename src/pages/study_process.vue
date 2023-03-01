<template>
  <q-page class="q-pa-md flex">
    <q-card flat class="q-pa-md">
      <div class="q-pa-md">
        <p class="text-h5">【求學經歷】</p>
        <!-- <span class="text-h6" style="white-space:pre-line; text-indent:2em; display:inline-block;"> -->
        <p class="text-h6" style="margin-bottom:1em">
          <span class="text-bold">{{article.study_process_1_title}}</span>：
          <span style="font-weight:normal;">{{article.study_process_1_content}}</span>
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          <span class="text-bold">{{article.study_process_2_title}}</span>：
          <span style="font-weight:normal;">{{article.study_process_2_content}}</span>
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          <span class="text-bold">{{article.study_process_3_title}}</span>：
          <span style="font-weight:normal;">{{article.study_process_3_content}}</span>
        </p>
      </div>

    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
    data () {
    return {
      article: {
        study_process_1_title: '「團隊合作、多方思考」',
        study_process_1_content: '高中時就讀新竹高中，在新竹的九降風、竹中的自由民主學風薰陶之下成長。大學就讀國立臺北大學經濟系，許多人時常會將經濟系誤列為商學院，實際上屬於社會科學院，修習經濟學幫助我的思考點從人的選擇出發，探究每個人在不同的機會成本、供給需求的思維下所做出的各種決定，從小就喜歡與人互動和合作的我，閱讀空氣的能力也是必備之一。',
        study_process_2_title: '「積極參與、主動學習」',
        study_process_2_content: '大三時因課程參與數場 Fintech 講座，認知到資訊科技的重要性及未來發展性，便毅然決然接觸程式語言，修習校內資工、電機系所開設的資訊課程如 C 語言程式設計、Data Structure、Database System 等。大四時參加為期一年的資訊種子培訓計畫，與 35 位來自各校各個領域的夥伴一起經歷課程及專案的培訓，我也擔任其中海外參訪專案的總召，組織團隊部門、開設工作坊、進行企業參訪等，培養跨領域的資訊思維。',
        study_process_3_title: '「培養專業、累積經驗」',
        study_process_3_content: '畢業於國立臺北大學資訊管理研究所，論文研究主題為根基於礦池大小之收益最大化策略研析，與教授研究和探討採用 PoW (Proof of Work) 共識機制的區塊鏈挖礦機制，並修習 Artificial Intelligence、Big Data Analysis、Software Engineering 等專業知識課程。碩二上學期時，擔任課程組長，和組員從需求分析、使用情境著手，實作即時口罩偵測系統，順利達到即時警示、歷史統計的目標。同時於果實科技有限公司擔任實習全端工程師，實作疫苗雲溫度監控雲端管理平台、智能e櫃等專案，期盼自己未來也能持續累積實作經驗，培養專業知識，增強自己的職場實戰力。',
        },
    }
  },
}
</script>
