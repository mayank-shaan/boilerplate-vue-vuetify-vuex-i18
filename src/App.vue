<template>
  <v-app>
    <component :is="layout">
      <router-view/>
    </component>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  mounted() {
    console.log(this.$route);
  },
  data: () => ({
    defaultLayout: 'default',
  }),
  computed: {
    layout() {
      return `${(this.$route.meta.layout || this.defaultLayout)}-layout`;
    },
  },
};
</script>
