<template>
  <q-layout view="hHh Lpr lFf">
    <q-header bordered class="text-black bg-grey">
      <q-toolbar class="bg-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class="text-bold">
          CHUN
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :overlay='overlay'
      :breakpoint="0"
      class="bg-grey-1"
    >
      <q-list >
        <q-item class="q-pa-md" clickable v-ripple to="/home_page">
          <q-item-section avatar>
            <q-avatar size="80px">
              <img src="../images/my_photo.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section >
            <span style="font-size:1.5em;">黃俊友</span>
            <q-item-label style="color:grey; font-size:0.8em;">pianochicken1996@gmail.com</q-item-label>
          </q-item-section>
        </q-item>

        <transition-group name="fade">
          <EssentialLink
            v-for="link in essentialLinks"
            :key="link._key"
            v-bind="link"
          />
          <EssentialLinkOut
            v-for="link in essentialLinksOut"
            :key="link._key"
            v-bind="link"
          />
        </transition-group>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import EssentialLinkOut from 'components/EssentialLinkOut.vue'

const linksData = [
  {
    title: '關於我',
    caption: 'About me',
    icon: 'account_circle',
    link: 'about_me',
    _key: 0,
  },
  {
    title: '作品集 & 專案經歷',
    caption: 'Portfolio & Project',
    icon: 'fact_check',
    link: '/portfolio_project',
    _key: 1,
  },
  {
    title: '求學經歷',
    caption: 'Study process',
    icon: 'school',
    link: 'study_process',
    _key: 2,
  },
];

const linksOutData = [
  {
    title: 'Github',
    caption: 'My Github',
    icon: 'fa-brands fa-github',
    target: '_blank',
    url: 'https://github.com/pianochicken',
    _key: 0,
  },
  {
    title: 'Linkedin',
    caption: 'My Linkedin',
    icon: 'fa-brands fa-linkedin',
    target: '_blank',
    url: 'https://linkedin.com/in/pianochicken/',
    _key: 1,
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink, EssentialLinkOut },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
      essentialLinksOut: linksOutData,
      overlay: null,
      window: {
        width: 0,
        height: 0
      }
    }
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  methods:{
    click_outside(){
      this.leftDrawerOpen = false
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
      if(this.window.width > 750){
        this.overlay = false
      }
      else{
        this.overlay = true
      }
    }
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  compute: {
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 3s;
  }

  .fade-enter, .fade-leave {
    opacity: 0;
  }
</style>

