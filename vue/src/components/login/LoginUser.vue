<template>
<div>
    <v-card class="mx-auto" max-width="500">
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
    </v-card>

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
            apiUrl: process.env.VUE_APP_LARAVEL_API_URL,
            email: "jorgeserranojunior@gmail.com",
            password: "sondeminas",
        }
    },
    mounted() {
        this.getToken()
    },
    computed: {
        ...mapState({
            auth: state => state,
        })
    },
    methods: {
        ...mapActions([
            'setToken',
            'destroyToken',
            'getToken',
        ]),
        puxarDados() {
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
        logar() {
            let $this = this
            axios({
                    method: 'post',
                    url: 'http://localhost:8000/oauth/token',
                    data: {
                        client_id: 2,
                        client_secret: 'DGABP1rGMt7Ep5aT42InyeLQw0lzRY3aSQkACnZf',
                        grant_type: 'password',
                        username: this.email,
                        password: this.password,
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
