<template>
  <div class="content2 wrap">
    <div class="left">
      <div class="title">{{title}}</div>
      <div class="content">
        <dl v-for="(item, index) in contentData" :key="index">
          <dt>{{ item.title }}</dt>
          <dd v-for="(v, i) in item.content" :key="i">{{ v }}</dd>
        </dl>
      </div>
    </div>
    <div class="right">
      <img :src="url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String },
    title: {
      type: String
    },
    contentData: {
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.content2 {
      padding-top: 207px;
      display: flex;
      .left {
        .title {
          width: 654px;
          height: 36px;
          background: url("~_img/serve-title.png") no-repeat;
          background-size: 100% 100%;
          display: flex;
          justify-content: center;
          padding-left: 40px;
          align-items: center;
          font-size: 30px;
          color: #171a25;
          font-weight: bold;
        }
        .content {
          padding-top: 78px;
          padding-left: 56px;
          dl {
            margin-bottom: 48px;
            dt {
              color: #33384c;
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 16px;
            }
            dd {
              font-size: 16px;
              color: #75777d;
            }
          }
        }
      }
    }
</style>
