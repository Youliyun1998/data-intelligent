<template>
  <div class="about">
    <!-- <Head /> -->
    <!-- <full-page :options="options" ref="page"> -->
    <!--      第一屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <!-- <div class="slide"> -->
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">智慧园区</p>
          <p class="sub_text">
            链接产业发展要素、深度整合物业资源、探索园区价值
          </p>
          <!-- <p class="sub_text">
            要素建立相应的业务平台
          </p> -->

          <!-- <div class="line" @click="handleMore">了解更多</div> -->
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!--      第二屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box2"> -->
    <!-- 企业简介 -->
    <div class="en_presume ">
      <div class="en_presume_contnent wrap">
        <div class="big_title">
          智慧园区，助力产业园区数字化转型
        </div>
        <p>
          通过智慧园区云平台，为各要素建立相应的业务平台，统一容纳各要素的信息资源，统一为各业务提供应用工具平台，统一用户接触面。
        </p>

        <div class="block">
          <!-- <ul>
            <li v-for="(item, index) in enData" :key="index">
              <p>{{ item }}</p>
              <div class="line"></div>
            </li>
            <div class="block_footer">
              <div v-for="(item, index) in enDataDetail" :key="index">
                <span>{{ item }} </span>
              </div>
            </div>
          </ul> -->
          <img
            src="~_img/productSmartPark/productSmartPark_content1.png"
            alt=""
          />
          <!-- <div class="img"></div> -->
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="section"> -->
    <!-- <div class="box3"> -->
    <!-- 联系方式 -->
    <div class="contact">
      <div class="contact_content wrap">
        <div class="title">智慧园区云平台</div>
        <div class="title_detail">
          <p>
            实现从基础设施、园区治理、运营服务、产业发展等多维度场景的全面互联和数据化，以一体化智能运营管理平台实现数据融合，释放
          </p>
          <p>数据运营价值，构建“园区智能中枢”，全面助力园区运营与产业升级</p>
        </div>
        <div class="map">
          <ServeRightLeft :contentData="contentData" :url="url" />
          <!-- <img
            src="~_img/productEnviroment/productEnviroment_bigData.png"
            alt=""
          /> -->
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- <Footer /> -->
    <!-- </div> -->
    <!-- </full-page> -->
  </div>
</template>

<script>
// import Head from '_c/Head.vue'
// import Footer from '_c/Footer'
import ServeRightLeft from '_c/ServeRightLeft.vue'
export default {
  data () {
    return {
      url: require('../../assets/img/productSmartPark/productSmartPark_content2.png'),
      contentData: [
        {
          title: '- 智能化',
          content: [
            '利用5G、loT、大数据等技术，优化园区基础建设，实现园区智能化管理。'
          ]
        },
        {
          title: '- 数字化',
          content: [
            '打造园区数字化管理体系，通过平台连接管理中心、企业、公众。'
          ]
        },
        {
          title: '- 生态化',
          content: [
            '通过产业生态构建，打通产业链，完善服务链，实现园区价值最大化。'
          ]
        }
      ],
      options: {
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        navigation: true, // 是否显示导航，默认为false
        navigationPosition: 'right', // 导航小圆点的位置
        scrollBar: false,
        keyboardScrolling: false, // 是否可以使用键盘方向键导航，默认为true
        continuousVertical: false, /// 是否循环滚动，默认为false。如果设置为true，则页面会循环滚动，而不像loopTop或loopBottom那样出现跳动，注意这个属性和loopTop、loopBottom不兼容和，不要同时设置
        menu: '#menu'
        // navigation: true,
        // anchors: ['page1', 'page2', 'page3'],
        // sectionsColor: [
        //   "#41b883",
        //   "#ff5f45",
        //   "#0798ec",
        //   "#fec401",
        //   "#1bcee6",
        //   "#ee1a59",
        //   "#2c3e4f",
        //   "#ba5be9",
        //   "#b4b8ab"
        // ]
      },

      enData: ['服务', '产品', '项目'],
      enDataDetail: [
        ' 咨询规划、数据服务、应用开发、技术支撑等全流程服务。',
        ' 数据中台、数据建模、智慧灯杆、智慧环保、智慧园区、智慧旅游、云物管等。',
        '  科研、政府和企业的数据治理、数据挖掘与分析，智能应用开发等项目规划和实施'
      ]
    }
  },
  components: {
    ServeRightLeft
    // Footer
    // Head
  },
  methods: {
    handleMore () {
      window.scrollTo({
        top: 900,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  height: 100%;
  background: #fff;
  .section {
    /deep/.iScrollVerticalScrollbar {
      width: 0;
      display: none;
    }
  }
  .banner {
    position: relative;
    height: 830px;
    background: url("~_img/productSmartPark/productSmartPark_banner.png")
      no-repeat;
    background-size: 100% 100%;
    .left_text {
      .left_text_l {
        position: absolute;
        top: 30%;

        .big_text {
          font-size: 50px;
          font-weight: bold;
          color: #fff;
        }
        .sub_text {
          font-size: 24px;
          color: #fff;
          margin-top: 16px;
          margin-bottom: 60px;
        }
        .line {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #171a25;
          font-size: 24px;
          font-weight: bold;
          width: 225px;
          height: 60px;
          background: #59a6ba;
          box-shadow: 0px 2px 14px 0px rgba(0, 0, 0, 0.5);
          border-radius: 4px;
          border-image: linear-gradient(
              315deg,
              rgba(61, 188, 212, 1),
              rgba(31, 63, 128, 1)
            )
            1 1;
        }
      }
    }
  }
  .en_presume {
    height: 900px;
    background-color: #fff;

    .big_title {
      padding-top: 40px;
      padding-bottom: 20px;
      font-size: 30px;
      font-weight: 600;
      color: #171a25;
      text-align: center;
    }
    p {
      text-align: center;
      color: rgba(23, 26, 37, 0.6);
      font-size: 20px;
    }
    .block {
      margin-top: 58px;
      margin-bottom: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 875px;
        height: 644px;
      }
    }
  }
  .contact {
    height: 900px;

    background: url("~_img/productEnviroment/productEnviroment_bg.png")
      no-repeat;
    background-size: 100% 100%;
    .contact_content {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title {
        font-size: 30px;
        font-weight: 600;
        color: #171a25;
        display: flex;
        justify-content: center;

        padding-top: 40px;
        padding-bottom: 20px;
      }
      .title_detail {
        font-size: 20px;
        color: #33384c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgba(23, 26, 37, 0.6);
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .map {
        margin-top: 40px;

        /deep/.content2 {
          padding-top: 0;
          display: flex;
          justify-content: space-between;
          .left {
            padding-top: 40px;
            .title {
              display: none;
            }
          }
          .right {
            img {
              width: 524px;
              height: 540px;
            }
          }
        }
      }
    }
  }
}
</style>
