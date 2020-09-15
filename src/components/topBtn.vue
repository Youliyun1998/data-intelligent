<template>
  <div class="img">
    <img
      :src="suspensionUrl1"
      alt=""
      title="020-85829519"
      @mouseover="MouseOver1"
      @mouseleave="MouseLeave1"
    />
    <img
      :src="suspensionUrl2"
      alt=""
      title="020-85829519"
      @mouseover="MouseOver2"
      @mouseleave="MouseLeave2"
      @click="handleTop"
    />
  </div>
</template>

<script>
export default {
  methods: {
    handleTop () {
      window.scrollTo(0, 0)
      this.suspensionUrl2 = ''
    },
    MouseOver1 () {
      this.suspensionUrl1 = require('../assets/img/phone_act.png')
    },
    MouseLeave1 () {
      this.suspensionUrl1 = require('../assets/img/phone.png')
    },
    MouseOver2 () {
      this.suspensionUrl2 = require('../assets/img/top_act.png')
    },
    MouseLeave2 () {
      this.suspensionUrl2 = require('../assets/img/top.png')
    }
  }
}
</script>

<style lang="less" scoped>
.img {
  position: fixed;
  top: 700px;
  right: 100px;
}
</style>
