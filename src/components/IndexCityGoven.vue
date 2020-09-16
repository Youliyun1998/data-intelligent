<template>
  <div class="right">
    <p class="title">{{ CityGoven.title }}</p>
    <div class="line"></div>
    <p v-for="(i, v) in CityGoven.content" :key="v">{{ i }}</p>
    <div class="check" @click="handleChange">
      <span>{{ CityGoven.detail }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    CityGoven: {
      type: Object
    }
  },
  methods: {
    handleChange () {
      this.$emit('changeJump')
    }
  }
}
</script>

<style lang="less" scoped>
.right {
  margin-left: 85px;
  padding-top: 40px;
  .title {
    font-size: 24px;
    font-weight: bold;
    color: #171a25;
  }
  .line {
    margin-top: 25px;
    width: 46px;
    height: 4px;
    background: #1a356f;
    border-radius: 2px;
    margin-bottom: 56px;
  }
  p {
    color: #75777d;
  }
  .check {
    cursor: pointer;
    margin-top: 100px;
    width: 180px;
    height: 44px;
    border-radius: 25px;
    border: 2px solid #59a6ba;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #59a6ba;
    font-size: 20px;
    &:hover {
      width: 180px;
      height: 44px;
      background: #59a6ba;
      border-radius: 25px;
      border: 2px solid #8ec7d5;
      color: #ffffff;
    }
  }
}
</style>
