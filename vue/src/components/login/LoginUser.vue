<template>
<div>
    <v-app id="inspire">
        <v-content>
            <v-container fluid > 
                <!-- fill-height -->
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <v-card class="elevation-12">
                            <p v-if="auth.user.id">Você está logado</p>
                            <v-toolbar color="primary" dark flat>
                                <v-toolbar-title>Login</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-icon>mdi-account</v-icon> <v-text-field label="Login" v-model="inputs.email" name="login" type="text"></v-text-field>

                                    <v-icon>mdi-lock</v-icon><v-text-field id="password" v-model="inputs.password" label="Password" name="password" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
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
    <!-- <v-card class="mx-auto" max-width="500">
        <v-card-title class="display-1">
          Login
        </v-card-title>
        <v-card-text>
          <v-text-field
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>
         <v-text-field
          v-model="password"
          label="Senha"
          required
        ></v-text-field>

        </v-card-text>
        <v-card-actions>
            <v-btn text color="primary" @click="logar()">
                LOGAR
            </v-btn>
            <v-btn text color="Error" @click="destroyToken()">
                DESLOGAREMOS
            </v-btn>
        </v-card-actions>
    </v-card> -->

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
            inputs:{},
           
        }
    },
    mounted() {
        // this.getToken()
    },
    beforeMount(){
        this.confirmAuthenticated()
        this.inputs.email = "jorgeserranojunior@gmail.com"
        this.inputs.password = "sondeminas"
    },
    computed: {
        ...mapState({
            auth: state => state.Auth,
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

    }
}
</script>
