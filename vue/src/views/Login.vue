<template>
    <div>
        <Header></Header>
        <login-user></login-user>
        dfg
    </div>
</template>

<script>
    import LoginUser from '@/components/login/LoginUser.vue'
     import Header from '@/views/users/layouts/Header.vue'
    export default {
        name:"Login",
        components:{
            LoginUser,
            Header,
        }
    }
</script>

