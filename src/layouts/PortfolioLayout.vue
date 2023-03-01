
<template>
  <q-layout view="hHh lpR fFf">
    <q-header bordered class="bg-white text-white" height-hint="100" style="height:auto">
      <q-toolbar class="bg-white text-blue-grey-9 justify-center">
        
        <div class="col-12" style="text-align: left;">
          <q-btn flat no-caps to='/portfolio_project' label="">
            <span style="font-size: 20px; font-weight:bold;">Portfolio & Project</span>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
