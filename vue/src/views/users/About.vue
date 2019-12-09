<template>
  <div class="about">
      <Header>
       <template v-slot:titlepage>
            ABOUT         
        </template>
      </Header>
  </div>
</template>
<script>

     import Header from '@/views/users/layouts/LayoutUser.vue'
    export default {
        name:"About",
        components:{           
            Header,
        }
    }
</script>
