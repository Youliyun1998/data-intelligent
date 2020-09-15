<template>
  <div class="under_content">
    <div class="left">
      <div class="left_top">
        <span>{{ detailData.title }}</span>
      </div>
      <div
        class="left_center"
        v-for="(item, index) in detailData.content"
        :key="index"
      >
        <p>{{ item }}</p>
      </div>
      <div class="left_bottom">{{ detailData.detail }}</div>
    </div>
    <div class="right">
      <img :src="detailData.imgUrl" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    detailData: {
      type: Object
    }
  }
}
</script>

<style lang="less" scoped>
.under_content {
  display: flex;
  justify-content: space-between;
  padding-top: 79px;
  .left {
    .left_top {
      display: flex;
      // justify-content: center;
      align-items: center;
      width: 158px;
      height: 158px;
      font-size: 25px;
      color: #171a25;
      font-weight: bold;
      background: url("~_img/data_serve_left_bg.png") no-repeat;
      background-size: 100% 100%;
    }
    .left_center {
      font-size: 16px;
      color: #75777d;
    }
    .left_bottom {
      width: 180px;
      height: 44px;
      border-radius: 25px;
      border: 2px solid #59a6ba;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #59a6ba;
      margin-top: 90px;
      &:hover {
        width: 180px;
        height: 44px;
        background: #59a6ba;
        border-radius: 25px;
        border: 2px solid #8ec7d5;
        color: #fff;
      }
    }
  }
  .right {
    img {
      width: 558px;
      height: 492px;
    }
  }
}
</style>
