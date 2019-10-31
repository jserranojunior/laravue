<template>
<div>
    
    <v-app id="inspire">
        <v-content>
            <v-container fluid>
                <!-- fill-height -->
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        
                        <v-card class="elevation-12">                           
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-icon>mdi-account</v-icon>
                                    <v-text-field label="Login" v-model="inputs.email" name="login" type="text"></v-text-field>
                                    <v-icon>mdi-lock</v-icon>
                                    <v-text-field id="password" v-model="inputs.password" label="Password" name="password" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>                                
                                <v-alert v-show="auth.error.message" border="top" color="red lighten-2" dark>
                                    {{auth.error.message}}
                                </v-alert>
                                <v-alert v-show="auth.user.id" border="top" color="blue lighten-2" dark>
                                    Você está logado
                                </v-alert>
                                <v-spacer></v-spacer>
                                <v-btn v-if="!auth.user.id" @click="logar()" color="primary">Login</v-btn>
                                <v-btn v-if="auth.user.id" @click="logout()" color="pink">Sair</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</div>
</template>

<script>
import axios from 'axios'
import {
    mapState,
    mapActions
} from "vuex"

export default {
    name: "LoginUser",
    data() {
        return {
            //  urlApi: process.env.LARAVEL_APP_API_URL,
            appTitle: process.env.VUE_APP_TITLE,
            inputs: {},
            
            status:"",

        }
    },
    mounted() {
        this.token = localStorage.getItem('token')
        if(this.auth.user.id){
            this.$router.push({ path: 'dashboard' })
        }
        
    },
    beforeMount() {
        this.confirmAuthenticated()
        this.inputs.email = "jorgeserranojunior@gmail.com"
        this.inputs.password = "sondeminas"
    },
    computed: {
        ...mapState({
            auth: state => state.Auth,
            idUser: state => state.Auth.user.id,
        })
    },
    methods: {
        ...mapActions([
            'login',
            'destroyToken',
            'getToken',
            'user',
            'confirmAuthenticated',
            'logout'
        ]),

        logar() {
            this.login(this.inputs)
        }
    },
    watch: {
        token() {   
            if(this.token > ''){
                this.idUser = this.auth.user.id 
            }      
            
        },
        idUser(){
        if(this.idUser){                      
                this.$router.push({ path: 'dashboard' })         
            }
        }
    },
}
</script>
