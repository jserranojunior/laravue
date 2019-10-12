<template>
  <div class="home">
    <div class="btn" @click="puxarDados">PUXAR DADOS ativos</div>
    <div>{{appTitle}}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bem vindo ao Vue Cliente"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
    //  urlApi: process.env.LARAVEL_APP_API_URL,
    appTitle: process.env.VUE_APP_TITLE,
    apiUrl: process.env.VUE_APP_LARAVEL_API_URL,
    }  
  },
  mounted(){ 
    console.log(process.env.VUE_APP_LARAVEL_API_URL)
    console.log("AAAsM")  
    // this.urlApi = 
    // eslint-disable-next-line
    // console.log(process.env.LARAVEL_APP_API_URL)
    // console.log(this.urlApi) 
  },
  methods:{
    puxarDados(){
      let url = this.apiUrl + 'apiteste'

      console.log(url)
      axios({
        method: 'get',
        url: url,
        responseType: 'stream'
      })
        .then(function (response) {
          // console.log(url)
          // console.log(window.location.hostname)
          console.log(response.data)
        });
    }
  }
}
</script>
