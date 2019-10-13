<template>
  <div>
    <Header></Header>
  <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import Header from '@/views/users/layouts/Header.vue'

export default {
  components: {
    HelloWorld,
    Header,
  },
};
</script>
 