import axios from "axios"

export default {
    state: {
        // register:{},
        // message:"",
        user:{},      
    },
    mutations: {
        
        USER(state, user){
            state.user = user
        },
        
        // LOGON(state, logon) {
        //     state.data = logon.data.data[0]           
        //     state.message = logon.data.message
        // },
        // REGISTER(state, register) {
        //     state.register = register
        // },
        // LOGOUT(state, exit) {
        //     state.data = exit
        // },
        // SET_LOCAL_STORAGE(state, localStorage){
        //     state.data = {
        //         'id': localStorage.id,
        //         'obreiro': localStorage.obreiro,
        //     }
        // }
        GET_TOKEN(state,data){
            state.auth = data
        },

        SET_TOKEN(state, data){
            state.data = data            
        },
        LOGOUT(state){
            state.user = ''

        }
    },
    actions: {
        logout({commit}){
            localStorage.removeItem("token");    
            localStorage.removeItem("expiration");   
            commit('LOGOUT') 
        },
        // get Token
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
                // console.log(response.data)
                auth.access_token = response.data.access_token
                auth.expires_at = response.data.expires_at
                
                storage()
            


            }).catch(error => {
                console.log(error.response + 'erro login')
            });         

            dispatch('getToken').then(() => {
                dispatch('user');
              })
              
            
            
            
            
            
        },
        user({commit}){
            let urlApi = process.env.VUE_APP_LARAVEL_API_URL
            let token = localStorage.getItem('token');
            // dispatch('getToken')
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
        // getToken({commit},){
        //     let data = {};
        //     data.token = localStorage.getItem('token')
        //     data.expiration = localStorage.getItem('expiration')

        //     if(!data.token || !data.expiration){
        //         commit('GET_TOKEN', 'aqui') 
        //     // }
        //     // if(Date.now() > parseInt(data.expiration)){
        //     //     console.log(data.expiration)
        //     //     console.log(Date.now())
        //     //     dispatch('destroyToken')                
        //     //     commit('GET_TOKEN', 'second') 
        //     }else{
        //         commit('GET_TOKEN', data) 
        //     }
        // },
        destroyToken(context) {   
                       
        },
        
        // Logon(context, data) {        
        // let url = '/acolher/public/api/auth/login';        
        // axios
        //     .post(url, data)
        //       .then(response => {

        //         context.commit('LOGON', response)  

        //         window.localStorage.setItem("user_obreiro", response.data.data[0].obreiro);
        //         window.localStorage.setItem("user_id", response.data.data[0].id);

        //         //   console.log(data)
        //         //   console.log("DATA DO VUEX")

        //         // console.log(response.data.data[0])
        //         // if(response.data.data[0] == undefined){
        //         //     context.commit('LOGON', response.data.message)
        //         //   console.log(response.data.message)
        //         // }else{
        //         //     context.commit('LOGON', response)
        //             // console.log('logado')
        //         // }
                

        //         // console.log(response.data.data)
        //       }                
        //     )
        //     .catch(function (error) {
        //     console.log(error);
        //     });
        // },

        // Logout(context, data) {   
        //     window.localStorage.removeItem("user_id");    
        //     window.localStorage.removeItem("user_obreiro");   
        //     context.commit('LOGOUT', "")            
        // },
        
        // Register(context, data) {        
        //     let url = '/acolher/public/api/auth/register';        
        //     axios
        //         .post(url, data)
        //         .then(response => {
        //             context.commit('REGISTER', response)  
                     

        //         })
        //         .catch(function (error) {
        //             console.log(error)
        //             // response => context.commit('REGISTER', response.customMessages)
        //             console.log(error.response)
                    
        //         });
        // },

        // EmailCadastroConcluido(){
        //     console.log("email, funcionando");
        // }
    }
}