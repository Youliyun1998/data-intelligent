<template>
  <div class="about">
    <!-- <Head /> -->
    <!-- <full-page :options="options" ref="page"> -->
    <!--      第一屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <!-- <div class="slide"> -->
    <div class="banner">
      <div class="big_title1 wrap">
        <div class="big_title2">
          <div class="title">数据服务和智能应用的高新技术企业</div>
          <div class="sub_title">
            致力于帮助客户实现数据探索
          </div>
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
          企业简介
        </div>
        <p>
          广州纳指数据智能科技有限公司成立于2016年，是大数据端到端服务提供商，致力于数据服务和智能应用的高科技创新型企业。
        </p>
        <p>
          纳指数据拥有大数据专业分析团队和系列数据智能产品，为科研单位、政府机构和大型企业用户提供咨询规划、数据采集、数据清洗、数
        </p>
        <p>
          据地图、数据质量管控、数据安全、数据共享等数据服务，数据智能产品推出智慧环保、智慧灯杆、智慧园区、智慧旅游、云物管等系列产品。
        </p>
        <div class="block">
          <ul>
            <li v-for="(item, index) in enData" :key="index">
              <!-- <p>{{ item }}</p> -->
              <!-- <div class="line"></div> -->
            </li>
            <div class="block_footer">
              <div v-for="(item, index) in enDataDetail" :key="index">
                <div class="text_title">{{ item.Chinesetitle }}</div>
                <div class="text_subtitle">{{ item.Englishtitle }}</div>
                <div class="text_content">{{ item.content }}</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="section"> -->
    <!-- <div class="box3"> -->
    <!-- 联系方式 -->
    <div class="videoPlay">
      <div class="video wrap">
        <div class="title">关于我们</div>
        <video
          width="100%"
          autoplay
          controls
          loop
          poster="~_img/video/screen.png"
        >
          <source src="~_img/video/movie.mp4" type="video/mp4" />
          您的浏览器不支持 video 标签。
        </video>
      </div>
    </div>

    <div class="contact">
      <div class="contact_content wrap">
        <div class="title">联系方式</div>
        <div class="title_detail">
          <p>广州纳指数据智能科技有限公司</p>
          <p>020-85829519</p>
          <p>广州市番禺区广州大学城青蓝街28号创智大厦C栋智汇谷3栋408室</p>
        </div>
        <div class="map">
          <img src="~_img/about_map.png" alt="" />
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
export default {
  data () {
    return {
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
      },
      enData: ['服务', '产品', '项目'],
      enDataDetail: [
        {
          Chinesetitle: '服务',
          Englishtitle: 'Service',
          content: '咨询规划、数据服务、应用开发、技术支撑等全流程服务。'
        },
        {
          Chinesetitle: '产品',
          Englishtitle: 'Product',
          content:
            '数据中台、数据建模、智慧环保、智慧灯杆、智慧园区、智慧旅游、云物管等。'
        },
        {
          Chinesetitle: '项目',
          Englishtitle: 'Project',
          content:
            '科研、政府和企业的数据治理、数据挖掘与分析，智能应用开发等项目规划和实施'
        }
      ]
    }
  },
  methods: {
    handleMore () {
      window.scrollTo({
        top: 870,
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
    // width: 100%;
    height: 830px;
    background: url("~_img/about_banner2.png") no-repeat;
    background-size: 100% 100%;

    .big_title1 {
      .big_title2 {
        // position: absolute;
        // top: 40%;
        // left: 50%;

        color: #fff;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        // align-items: center;

        .title {
          margin-top: 350px;
          font-size: 50px;
          font-weight: bold;
          color: #fff;
          margin-bottom: 16px;
        }
        .sub_title {
          color: rgba(255, 255, 255, 0.7);
          font-size: 24px;
          margin-bottom: 60px;
        }
        .line {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          color: #171a25;
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
    // margin-top: 75px;
    height: 900px;
    background-color: #fff;

    .big_title {
      // padding: 40px 0;
      padding-top: 40px;
      padding-bottom: 20px;
      font-size: 30px;
      font-weight: 600;
      color: #171a25;
      text-align: center;
    }
    p {
      // text-indent: 2em;
      &:nth-child(2) {
        padding-bottom: 20px;
      }
      &:nth-child(4) {
        // text-indent: 0;
      }
      color: #171a25;
      font-size: 20px;
      // text-align: left;
    }
    .block {
      margin-top: 40px;
      margin-bottom: 40px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          // flex: 1;
          margin-right: 20px;
          width: 386px;
          height: 296px;
          background-size: 100% 100%;
          &:first-child {
            background: url("~_img/about_en1.png") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(2) {
            background: url("~_img/about_en2.png") no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(3) {
            background: url("~_img/about_en3.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 0;
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
            text-indent: 0;
            color: #fff;
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 30px;
          }
          .line {
            width: 50px;
            height: 6px;
            background: #ffffff;
            border-radius: 3px;
          }
        }
        .block_footer {
          display: flex;

          div {
            flex: 1;
            margin-right: 20px;
            // height: 577px;

            background: #f6f8fb;
            padding: 0 20px;

            // padding-left: 35px;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            &:last-child {
              margin-right: 0;
            }
            .text_title {
              padding-top: 50px;

              font-size: 30px;
              color: #171a25;
              font-weight: bold;
            }
            .text_subtitle {
              color: #171a25;
              opacity: 0.3;
              font-size: 24px;
            }
            .text_content {
              padding-top: 40px;
              font-size: 20px;
              color: #33384c;

              padding-bottom: 32px;
            }
          }
        }
      }
    }
  }
  .videoPlay {
    height: 900px;
    background: url("~_img/example_traval/content2_bg.png") no-repeat;
    background-size: 100% 100%;
    .video {
      .title {
        margin-top: 60px;
        margin-bottom: 54px;
        font-size: 30px;
        font-weight: bold;
        color: rgba(23, 26, 37, 1);
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // width: 1180px;
      // height: 664px;
      // background: #000000;
      video {
        box-shadow: 8px 10px 26px 8px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
      // opacity: 0.1;
    }
  }
  .contact {
    height: 900px;
    background: #eef0f5;

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
        // padding: 28px 0;
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .title_detail {
        font-size: 20px;
        color: #33384c;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          margin-right: 37px;
          display: flex;
          align-items: center;
          &:last-child {
            margin-right: 0;
          }
          &:nth-child(2)::before {
            content: "";
            display: inline-block;
            width: 13px;
            height: 16px;
            background: url("~_img/about_foot_phone.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 10px;
          }
          &:nth-child(3)::before {
            content: "";
            display: inline-block;
            width: 13px;
            height: 16px;
            background: url("~_img/about_foot_address.png") no-repeat;
            background-size: 100% 100%;
            margin-right: 10px;
          }
        }
      }
      .map {
        margin-top: 40px;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
