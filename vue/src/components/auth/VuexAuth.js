// import axios from "axios"

export default {
    state: {
        data: {},
        // register:{},
        // message:"",        
    },
    mutations: {
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
            state.data = data
        },

        SET_TOKEN(state, data){
            state.data = data            
        },
        DESTROY_TOKEN(state, data){
            state.data = data

        }
    },
    actions: {
        getToken({commit},){
            let data = {};
            data.token = localStorage.getItem('token')
            data.expiration = localStorage.getItem('expiration')

            if(!data.token || !data.expiration){
                commit('GET_TOKEN', 'aqui') 
            // }
            // if(Date.now() > parseInt(data.expiration)){
            //     console.log(data.expiration)
            //     console.log(Date.now())
            //     dispatch('destroyToken')                
            //     commit('GET_TOKEN', 'second') 
            }else{
                commit('GET_TOKEN', data) 
            }
        },
        setToken(context, data){ 
            localStorage.setItem('token', data.access_token);
            localStorage.setItem('expiration', data.expires_in);
            context.commit('SET_TOKEN', data)           
        },
        destroyToken(context) {   
            localStorage.removeItem("token");    
            localStorage.removeItem("expiration");   
            context.commit('DESTROY_TOKEN')            
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