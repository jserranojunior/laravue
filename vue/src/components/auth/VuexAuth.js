import axios from "axios"

export default {
    state: {
        // register:{},
        // message:"",
        user:{},
        error:{},      
    },
    mutations: {        
        USER(state, user){
            state.user = user
        },       
        
        GET_TOKEN(state,data){
            state.auth = data
        },
        ERROR(state, data){
            state.error = data            
        },
        SET_TOKEN(state, data){
            state.data = data            
        },
        LOGOUT(state){
            state.user = {}
        }
    },
    actions: {
        logout({commit}){
            localStorage.removeItem("token");    
            localStorage.removeItem("expiration");   
            commit('LOGOUT') 
        },
        login({commit, dispatch}, data){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            let auth = {}
            function storage(){
                localStorage.setItem('token', auth.access_token);
                localStorage.setItem('expiration', auth.expires_at);                
            }
            axios({
                method: 'post',
                url: urlApi + 'auth/login',
                data
            })
            .then(function (response) {
                auth.access_token = response.data.access_token
                auth.expires_at = response.data.expires_at                
                storage()
                commit('ERROR', '')            
                dispatch('getToken').then(() => {
                    dispatch('user');
                  })
            }).catch(function (error) {
                console.log(error.response.data)
                commit('ERROR', error.response.data)                
            });     
            
        },
        user({commit}){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            let token = localStorage.getItem('token');
            axios({                        
                method: 'get',
                url: urlApi + 'auth/user',
                headers: { 
                    Authorization: "Bearer " + token,
                    'Content-Type': 'application/json' 
                },
            })
            .then(function (response) {
                commit('USER', response.data)
            }).catch(error => {
                console.log(error.response + 'erro loco')
            });
        },
        getToken({commit},){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    let data = {};
                    data.token = localStorage.getItem('token')
                    data.expiration = localStorage.getItem('expiration')
                  resolve()
                }, 1000)
              })         
        },
        confirmAuthenticated({dispatch}){
            if(localStorage.getItem('token')){
                dispatch('user');
            }
        },      
        destroyToken(context) {                          
        },        
    }
}