<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <!-- I am Home -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    console.log('axios: ', this.$axios.defaults);
  },
};
</script>
