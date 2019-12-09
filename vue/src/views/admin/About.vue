<template>
  <div class="about">
      <HeaderAdmin>
       <template v-slot:titlepage>
            ABOUT         
        </template>
      </HeaderAdmin>
    <h1>ABOUT ADMIN</h1>
  </div>
</template>
<script>

     import HeaderAdmin from '@/views/admin/layouts/LayoutAdmin.vue'
    export default {
        name:"About",
        components:{           
            HeaderAdmin,
        }
    }
</script>
<style>

</style>
