<template>
  <q-page class="q-pa-md flex">
    <q-card flat class="q-pa-md">
      <div class="q-pa-md">
        <p class="text-h5">【關於我】</p>
        <!-- <span class="text-h6" style="white-space:pre-line; text-indent:2em; display:inline-block;"> -->
        <p class="text-h6" style="margin-bottom:1em">
          {{article.about_me_1}}
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          {{article.about_me_2}}
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          <span class="text-bold">{{article.about_me_advantage}}</span>{{article.about_me_3}}
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
        about_me_1: '我是黃俊友，畢業於國立臺北大學資訊管理研究所。希望能開始培養書寫的習慣，將所學所遇紀錄起來，相信總有一天會用上，或許未來在回顧時又是另一番風味。',
        about_me_2: '平時寫寫程式燃燒腦力，偶爾打打排球活絡肌力，近期也對投資及區塊鏈應用的產業感到興趣，資訊的技術時時都在進步，期許自己活到老也要學到老。',
        about_me_advantage: '「適應力強、多元思考、專業學習」',
        about_me_3: '是我用來描述自己的三個特質。大學時念經濟系探究人與市場的供給需求，研究所跨領域至資管所學習，這些經驗讓我在面對新事物或挑戰時，都更能保持著積極、樂觀，以及勇於嘗試的態度去學習新知。\
除了喜歡寫程式解決問題帶來的成就感，也喜歡在寫程式的同時讓自己換位思考，以更貼近使用者需求、商業市場的角度端看所做的產品，進一步去完善產品的各個層面。',
      },
    }
  },
}
</script>
