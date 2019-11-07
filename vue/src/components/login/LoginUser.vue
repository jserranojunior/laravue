<template>
<div>
    <div class="content-wrapper" style="min-height: 176px;">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0 text-dark">LOGIN</h1>
                    </div><!-- /.col -->
                </div>
            </div>
        </div>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <div class="card">
                            <div class="card-header border-0">
                                <div class="d-flex justify-content-between">
                                    
                                </div>
                            </div>
                            <div class="card-body">

                                <input type="text" class="form-control" v-model="inputs.email"> <br>
                                <input type="password" class="form-control" v-model="inputs.password"><br>

                                <button v-if="!auth.user.id" class="btn btn-block btn-primary btn-sm" @click="logar()">
                                    Login
                                </button> 
                            </div>
                            <div v-if="auth.user.id" class="btn btn-block btn-danger btn-sm" @click="logout()">
                                Sair
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>


</template>

<script>
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
            status: "",
        }
    },
    mounted() {
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token')
            this.loginRedirect()
        }
    },
    beforeMount() {
        this.confirmAuthenticated()
        this.inputs.email = "jorgeserranojunior@gmail.coms"
        this.inputs.password = "sondeminas"
    },
    computed: {
        ...mapState({
            auth: state => state.Auth,
            idUser: state => state.Auth.user.id,
            typeUser: state => state.Auth.user.type,
        })
    },
    methods: {
        ...mapActions([
            'login',
            'confirmAuthenticated',
            'logout'
        ]),
        loginRedirect() {
            if (this.typeUser) {
                this.$router.push({
                    name: this.auth.user.type
                })
            }
        },
        logar() {
            this.login(this.inputs)
        }
    },
    watch: {
        typeUser() {
            this.loginRedirect()
        }
    },
}
</script>
