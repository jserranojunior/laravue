<template>
  <div>
  <hello-world></hello-world>
  <router-link to="login">
    LOGIN
  </router-link>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';


export default {
  components: {
    HelloWorld,
  },
};
</script>
 