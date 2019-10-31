<template>
    <div>        
        <login-user></login-user>       
    </div>
</template>

<script>
    import LoginUser from '@/components/login/LoginUser.vue'
    export default {
        name:"Login",
        components:{
            LoginUser,           
        }
    }
</script>

