<template>
  <q-page class="q-pa-md flex flex-center">

    <q-list >
      <q-item class="row justify-center">
        <q-card flat class="q-px-md col-md-8 col-sm-10">
          <div class="q-px-md justify-center">
            <p class="text-h5 text-bold text-center">{{article.project_experience_Beverage_title}}</p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs row justify-center col-md-10 col-sm-12 col-xs-12">
                <q-img src="../../images/Smart_Contract_Beverage/Smart_Contract_Beverage_1.png"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> Smart Contract: Beverage</p>
            </div>

            <div class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              <p> {{article.project_experience_Beverage_content_1}} </p>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_Beverage_content_2_1}}<a class='link_text' target="_blank" href="http://remix.ethereum.org/"> Remix </a>{{article.project_experience_Beverage_content_2_2}}<a class='link_text' target="_blank" href="https://metamask.io/"> MetaMask </a>{{article.project_experience_Beverage_content_2_3}}
            </p>

            <div class="row q-pa-none justify-center items-center">
              <q-card flat class=" col-md-4 col-sm-12 col-xs-12">
                <q-img src="../../images/Smart_Contract_Beverage/Smart_Contract_Beverage_2.png"></q-img>
              </q-card>
              &nbsp;&nbsp;&nbsp;
              <q-card flat class=" col-md-4 col-sm-12 col-xs-12">
                <q-img src="../../images/Smart_Contract_Beverage/Smart_Contract_Beverage_3.png"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> Smart Contract: Compile & Deploy</p>
            </div>

            <br/>

            <div class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              <p>
                {{article.project_experience_Beverage_content_2_4}}
              </p>
              <li>飲料業主：合約擁有者，負責開展新店、指派店長、配置新店貨品數量。</li>
              <li>飲料店長：店面負責人，需要進行補貨、管理店面營收利潤。</li>
              <li>顧客：購買飲料。 </li>
            </div>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_Beverage_content_3}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-5 col-sm-12 col-xs-12">
                <q-img src="../../images/Smart_Contract_Beverage/Smart_Contract_Beverage_5.png"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> Smart Contract: Beverage's function</p>
            </div>


            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_Beverage_content_4_1}} <br/>
              {{article.project_experience_Beverage_content_4_2}}
            </p>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_Beverage_content_5_1}} <br/>
              {{article.project_experience_Beverage_content_5_2}} <br/>
              {{article.project_experience_Beverage_content_5_3}}
            </p>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal;">
              {{article.project_experience_Beverage_content_6_1}} <br/>
              {{article.project_experience_Beverage_content_6_2}}
            </p>

            <p class="text-h6" style="margin-bottom:1em; font-weight:normal; word-break: break-all;">
              {{article.project_experience_Beverage_content_7_1}}<a class='link_text' target="_blank" href="https://ropsten.etherscan.io/address/0x5fd9531854e9f5325f79bd8125d9cada86ea757e"> Etherscan </a>{{article.project_experience_Beverage_content_7_2}}
            </p>

            <div class="row q-pa-sm justify-center">
              <q-card class="q-ma-xs col-md-10 col-sm-12 col-xs-12">
                <q-img src="../../images/Smart_Contract_Beverage/Smart_Contract_Beverage_6.png"></q-img>
              </q-card>
              <p class="col-12 justify-center row q-ma-xs" style="color:grey; font-size:1em;"> Ethereum Block Explorer and Analytics Platform: Etherscan</p>
            </div>

            <br/>

            <p class="text-bold" style="margin-bottom:1em">
              <a class='link_text' href="https://github.com/Pianochicken/Smart_Contract_Beverage" target="_blank" style="font-size:1.3em;">Github 》</a>
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
        project_experience_Beverage_title: '智能合約 Beverage',
        project_experience_Beverage_content_1: '　　智能合約(Smart contract)是目前在區塊鏈內制定合約時常用的特殊協議，透過程式碼的撰寫，以及建立在區塊鏈的特性上，在合約滿足特定條件或是接受外部相對應的指令時，端看合約的設計和規範，我們就能讓鏈上的使用者和合約進行互動，來達成交易、紀錄資料、傳送以太幣等各種不同目的。',
        
        project_experience_Beverage_content_2_1: '　　Beverage 是我用來練習的一個簡單的智能合約，雖然功能還很陽春，不過至少能讓我們透過這個智能合約，來初步瞭解和認識智能合約的應用情境和操作模式。在這個範例中，我會使用線上版的 Solidity IDE',
        project_experience_Beverage_content_2_2: '來撰寫合約，並透過區塊鏈錢包',
        project_experience_Beverage_content_2_3: '將智能合約部署到 Ropsten 測試網路。',
        
        project_experience_Beverage_content_2_4: '　　在這個智能合約下所想要呈現的使用情景是經營一個飲料集團以及販售飲料 （這個案例我們賣咖啡、拿鐵和珍珠奶茶三種飲料），那麼我們可以簡單分為三個角色：',
        
        project_experience_Beverage_content_3: '　　為了要讓這三個角色完成他們能做的事，就必須撰寫相對應的函式 Funtion，只要你所撰寫的程式語法沒有問題，經過編譯和部署之後，在下方 Deployed Contracts 的部分就會自動顯示出智能合約內所包含的功能，我們就可以在這個區塊來直接和合約進行互動。',
        project_experience_Beverage_content_4_1: '【飲料業主】',
        project_experience_Beverage_content_4_2: 'addStore: 合約的擁有者(業主)可以指派一個 account address 為店長，且必須最少要投入 0.05 ethers (50 finneys) 來作為開店資金，以及設定新店的初始飲料存貨。',
        
        project_experience_Beverage_content_5_1: '【飲料店長】',
        project_experience_Beverage_content_5_2: 'add_inventory: 店家的擁有者（店長）可以透過這個 Function 來進行咖啡、拿鐵和珍珠奶茶這三種飲料的補貨。',
        project_experience_Beverage_content_5_3: 'withdraw: 店長可以提取販賣飲料獲得的利潤。',
        
        project_experience_Beverage_content_6_1: '【顧客】',
        project_experience_Beverage_content_6_2: 'Buy_Drink: 顧客透過以太幣來購買咖啡、拿鐵、珍珠奶茶。',        
        
        project_experience_Beverage_content_7_1: '　　目前這個智能合約已經部署到 Ropsten 測試網路上，你也可以透過 Remix 直接載入合約地址 [0x5FD9531854e9F5325f79bd8125d9CAda86eA757E] 來和這個合約互動，在智能合約上的行為都會被記錄，因此我們就可以透過',
        project_experience_Beverage_content_7_2: '等相關搜尋工具來確認剛剛所執行的拓展新店、補貨或買賣飲料的行為囉！',
        
      },
    }
  },
}
</script>

<style lang="sass" scoped>
.link_text
  color: #0062E1
  text-decoration: none
</style>

