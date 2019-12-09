<template>
    <div>        
        <HeaderPublic/>
        <login-user></login-user>       
    </div>
</template>

<script>
    import LoginUser from '@/components/login/LoginUser.vue'
     import HeaderPublic from '@/views/public/layouts/HeaderPublic.vue'
    export default {
        name:"Login",
        components:{
            LoginUser,
            HeaderPublic,           
        }
    }
</script>

