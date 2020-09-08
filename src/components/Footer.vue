<template>
  <div class="foot">
    <div class="footer">
      <div class="footer_content wrap">
        <div class="left">
          <dl>
            <dt>服务</dt>
            <dd
              v-for="(item, index) in serveData"
              :key="index"
              @click="handleServe"
            >
              {{ item }}
            </dd>
          </dl>
          <dl>
            <dt>产品</dt>
            <dd
              v-for="(item, index) in productData"
              :key="index"
              @click="handleProduct"
            >
              {{ item }}
            </dd>
          </dl>
          <dl>
            <dt>典型案例</dt>
            <dd
              v-for="(item, index) in exampleData"
              :key="index"
              @click="handleExample"
            >
              {{ item }}
            </dd>
          </dl>
        </div>
        <div class="right">
          <dl>
            <dt>
              关于我们
            </dt>
            <dd
              v-for="(item, index) in aboutData"
              :key="index"
              @click="handleAbout(index)"
            >
              {{ item }}
            </dd>
          </dl>
        </div>
      </div>
      <div class="copy">
        <p>
          版权所有Copyright（C）2020
        </p>
        <p>广州纳指数据智能科技有限公司</p>
        <p>粤ICP备 17105415号-10</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serveData: ['数据采集', '数据治理', '数据建模', '数据可视化', '智能应用'],
      productData: ['智慧灯杆', '智慧环保', '智慧园区', '智慧旅游', '云物管'],
      exampleData: ['海关', '铁路', '环保', '旅游', '高校'],
      aboutData: [
        '企业简介',
        '联系我们',
        '电话：020-85829519',
        '地址：广东省广州市番禺区小谷围街青蓝街28号创智大厦3栋408室'
      ]
    }
  },
  methods: {
    handleServe () {
      this.$router.push({ path: '/serve' })
    },
    handleProduct () {
      this.$router.push({ path: '/product' })
    },
    handleExample () {
      this.$router.push({ path: '/example' })
    },
    handleAbout (e) {
      if (e === 0 || e === 1) {
        this.$router.push({ path: '/about' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  width: 1200px;
  // height: 100%;
  margin: 0 auto;
}

.foot {
  background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
  .footer {
    .footer_content {
      display: flex;
      justify-content: space-between;
      .left {
        display: flex;
        width: 700px;
        dl {
          width: 200px;
          dt {
            color: #fff;
            padding: 30px 0;
          }
          dd {
            cursor: pointer;
            color: #aaaaaa;
            font-size: 14px;
            padding-bottom: 20px;
            &:hover {
              color: #fff;
            }
          }
        }
      }
      .right {
        flex: 1;
        dl {
          flex: 1;
          dt {
            color: #fff;
            padding: 40px 0;
          }
          dd {
            cursor: pointer;
            color: #aaaaaa;
            font-size: 14px;
            padding-bottom: 30px;
            &:nth-child(4) {
              display: flex;
              &::before {
                content: url("~_img/foot_phone2.png");
                display: block;
                width: 20px;
                height: 20px;
                color: #aaaaaa;
              }
            }
            &:nth-child(5) {
              display: flex;
              &::before {
                content: url("~_img/foot_address2.png");
                display: block;
                width: 20px;
                height: 20px;
                color: #aaaaaa;
              }
            }
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
    .copy {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #565b66;
      font-size: 14px;
      padding-bottom: 30px;
      p {
        margin-right: 20px;
      }
    }
  }
}
</style>
