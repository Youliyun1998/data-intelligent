<template>
  <div id="app">
    <Head />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '_c/Footer.vue'
import Head from '_c/Head.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Head
  }
}
</script>

<style lang="less">
#app {
  background: #1c2133;
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }
}
</style>
