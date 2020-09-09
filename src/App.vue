<template>
  <div id="app">
    <Head v-if="isShow" />
    <router-view />
  </div>
</template>

<script>
import Head from '_c/Head.vue'
export default {
  name: 'App',
  components: {
    Head
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
        this.$route.path === '/example'
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
#app {
  background: #1c2133;
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }
}
</style>
