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
            state.auth = {}
        }
    },
    actions: {
        logout({commit}){
            try{
                localStorage.removeItem("token");    
            localStorage.removeItem("expiration");   
            localStorage.removeItem("type"); 
            commit('LOGOUT') 
            }catch(error) {
                // eslint-disable-next-line
                console.log(error)
                commit('ERROR', error.response.data)                
            } 
            
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
                // eslint-disable-next-line
                console.log(error.response.data)
                commit('ERROR', error.response.data)                
            })    
            
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
                localStorage.setItem('type', response.data.type); 
            }).catch(error => {
                // eslint-disable-next-line
                console.log(error.response)
            });
        },
        getToken(){
            return new Promise((resolve) => {
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
             
    }
}