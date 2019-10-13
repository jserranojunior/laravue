<template>
    <div>
        <input type="email" v-model="email" placeholder="Email">
        <input type="password" v-model="password" placeholder="Senha">
        
        <div class="btn" @click="logar()">LOGAR</div>
        <div class="btn" @click="destroyToken()">DESLOGAR</div>
    </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from "vuex"

    export default {
        name:"LoginUser",
        data(){
    return{
    //  urlApi: process.env.LARAVEL_APP_API_URL,
    appTitle: process.env.VUE_APP_TITLE,
    apiUrl: process.env.VUE_APP_LARAVEL_API_URL,
    email:"jorgeserranojunior@gmail.com",
    password:"sondeminas",
    }  
  },
  mounted(){  
    this.getToken()
  },
  computed: {
        ...mapState({
            auth: state => state,            
        })
    },
  methods:{
    ...mapActions([
            'setToken',  
            'destroyToken',    
            'getToken',  
        ]),
    puxarDados(){
      let url = this.apiUrl + 'apiteste'

      axios({
        method: 'get',
        url: url,
        responseType: 'stream'
      })
        .then(function (response) {
          // eslint-disable-next-line
          console.log(response.data)
        });
    },
    logar(){
      let $this = this    
      axios({
        method: 'post',
        url: 'http://localhost:8000/oauth/token',
        data: {
          client_id: 2, 
          client_secret: 'DGABP1rGMt7Ep5aT42InyeLQw0lzRY3aSQkACnZf',
          grant_type: 'password',
          username: this.email,
          password:this.password,
        }
      })
        .then(function (response) {          
          $this.setToken(response.data)
          // eslint-disable-next-line
          console.log(response)
          
        });
    }
    
  }
    }
</script>

