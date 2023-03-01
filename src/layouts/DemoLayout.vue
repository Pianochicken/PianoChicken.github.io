
<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-white" height-hint="100" style="height:auto">
      <q-toolbar class="bg-white text-blue-grey-9 justify-center">
        
        <div class="col-5" style="text-align: left;">
          <q-btn flat no-caps to='/portfolio_project/VaccineCloud' label="">
            <span style="font-size: 20px; color:red; font-weight:bold;">Vaccine<span style="color:black; font-weight:normal; ">Cloud</span></span>
          </q-btn>
        </div>

        <q-img src="../images/iMaskerYA_history.png"></q-img>

        <div class="col-2">
          <q-img src="../images/VaccineCloud_logo_4_3.png" style="height:50%; width:50%;"/>
        </div>

        <div class="col-5" style="text-align: right;">
          <q-btn no-caps outline color="blue-grey-8" icon="accessibility_new" :label="loginInfo.user_info.first_name" style="position:relative; right: 5%; font-size:110%;  width:auto-fill">
            <q-menu transition-show="scale" transition-hide="scale">

              <q-list style="min-width: 100%">                
                <q-item to="/portfolio_project/VaccineCloud"  clickable v-ripple>
                  <q-item-section align="center" >登出</q-item-section>
                </q-item>
              </q-list>

            </q-menu>
          </q-btn>
        </div>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>



<script>

export default {
  data () {
    return {
      slide: '',
      search_text: '',
      search_show: false,

      loginInfo : {
        user_info: {
          first_name: 'Demo',
        }
      }
    }
  },
  methods:{
    // logout(){
    //   // localStorage.removeItem('loginInfo');
    //   this.$router.push('portfolio_project/VaccineCloud');
    // },
  }
}
</script>
