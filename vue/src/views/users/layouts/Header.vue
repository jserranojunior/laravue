<template>
 <v-card
    color="grey lighten-4"
    flat
    height="110px"
    tile
  >
    <v-toolbar dense>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>LARAVUE</v-toolbar-title>
      <v-spacer></v-spacer>
      <p class="text-center center" v-show="auth.user.name">{{auth.user.name}}</p>
        <router-link to="/home">
            <v-btn icon>
                <v-icon>mdi-home Home</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/about">
            <v-btn icon>
                <v-icon>mdi-heart About</v-icon>
            </v-btn>
        </router-link>
        <router-link to="/">
            <v-btn icon>
                <v-icon>fas fa-circle-notch fa-spin Login</v-icon>
            </v-btn>
      </router-link>
      
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn v-if="auth.user.id" @click="logout()" color="pink">Sair</v-btn>
    </v-toolbar>
  </v-card>
    <!-- <div>      
         |
       |
       
       sair o aplicativo
    </div> -->
</template>

<script>
import {
    mapState,
    mapActions
} from "vuex"
    export default {
        name:"Header",
        data(){
          return{
          }
        },
        computed: {
        ...mapState({
            auth: state => state.Auth,
            idUser: state => state.Auth.user.id,
        })
    },
    mounted(){
      
      if(!this.auth.user.id){
        this.$router.push({ path: 'login' })
      }
      },
      methods:{
         ...mapActions([            
            'logout'
        ]),
      },
      watch:{        
        idUser(){
        if(!this.idUser){                      
                this.$router.push({ path: 'login' })         
            }
        }
      }
    }
</script>
