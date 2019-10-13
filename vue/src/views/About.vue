<template>
  <div class="about">
      <Header></Header>
    <h1>This is an about page</h1>
  </div>
</template>
<script>

     import Header from '@/views/users/layouts/Header.vue'
    export default {
        name:"About",
        components:{           
            Header,
        }
    }
</script>
