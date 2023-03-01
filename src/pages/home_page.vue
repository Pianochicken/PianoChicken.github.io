<template>
  <q-page class="q-pa-md flex">
    <q-card flat class="q-pa-md">
      <div class="q-pa-md">
        <!-- <p class="text-h5">【關於我】</p> -->
        <!-- <span class="text-h6" style="white-space:pre-line; text-indent:2em; display:inline-block;"> -->
        <p class="text-h6" style="margin-bottom:1em">
          {{article.home_page_content_1}}
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          {{article.home_page_content_2}}
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          {{article.home_page_content_3}}
        </p>
        <p class="text-h6" style="margin-bottom:1em">
          {{article.home_page_content_4}}
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
        home_page_content_1: '嗨，我是 Brian 黃俊友 ʕ •ᴥ•ʔ',
        home_page_content_2: '我喜歡學習新的事物，享受過程中的挑戰，並且期待努力過後所帶來的成果。',
        home_page_content_3: '大學就讀經濟系，讓我喜歡探究人的行為動機；研究所學習資訊管理，讓我對資訊科技的無限可能性嘆為觀止。',
        home_page_content_4: '近期在努力逐步累積實作經驗，期待未來能和遇到的每一個團隊夥伴一起在各式各樣的專案中完成目標，透過這些努力，希望能讓這個世界變得再更好一點點。',
      },
    }
  },
}
</script>
