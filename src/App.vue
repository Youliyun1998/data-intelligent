<template>
  <div id="app" v-cloak>
    <Head v-if="isShow" />
    <router-view />
    <Footer v-if="isShow" />
  </div>
</template>

<script>
import Footer from '_c/Footer.vue'
import Head from '_c/Head.vue'
export default {
  name: 'App',
  components: {
    Head,
    Footer
  },
  data () {
    return {
      isShow: false
    }
  },

  watch: {
    $route (to, from) {
      // console.log(this.$route.path, "999");
      if (
        this.$route.path === '/home' ||
        this.$route.path === '/serve' ||
        this.$route.path === '/product' ||
        this.$route.path === '/about' ||
        this.$route.path === '/example' ||
        this.$route.path === '/product/SmartEnviroment' ||
        this.$route.path === '/product/SmartPark' ||
        this.$route.path === '/product/SmartTraval' ||
        this.$route.path === '/product/SmartWuGuan' ||
        this.$route.path === '/product/SmartLampStandard' ||
        this.$route.path === '/example/enviroment' ||
        this.$route.path === '/example/railway' ||
        this.$route.path === '/example/customs' ||
        this.$route.path === '/example/traval'
      ) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    }
  }
}
</script>

<style lang="less">
[v-cloak] {
  display: none !important;
}
#app {
  // background: #1c2133;
  background-color: #fff;

  html,
  body {
    height: 100vh;
  }
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }
}
</style>
