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
          <p class="big_text">生态环境大数据平台</p>
          <p class="sub_text">
            监测一体化、管理精细化、决策智能化
          </p>

          <div class="line" @click="handleMore">了解更多</div>
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
          构筑“感知测量更透彻，智能应用更深入”的“智慧环保”体系
        </div>
        <p>
          基于物联网技术、云计算技术、3S技术、多网融合等多种技术方案，通过实时采集污染源、环境质量、生态、环境风险等信息，构建全
        </p>
        <p>
          方位、多层次、全覆盖的生态环境监测网络，实现环保数据智能分析及趋势预警，提升生态环境质量监管及综合决策能力。
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
            src="~_img/productEnviroment/productEnviroment_content.png"
            alt=""
          />
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
        <div class="title">环保大数据平台</div>
        <div class="title_detail">
          <p>
            环保大数据平台支持将各环境要素信息与GIS相结合，准确地获取环境信息，快速、有效地对自然与社会环境的动态变化进行监测，
          </p>
          <p>做出趋势预测，为环境监管、预警、指挥等环节提供服务支撑。</p>
        </div>
        <div class="map">
          <img
            src="~_img/productEnviroment/productEnviroment_bigData.png"
            alt=""
          />
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
  methods: {
    handleMore () {
      window.scrollTo({
        top: 850,
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
    // top: 75px;
    height: 830px;
    background: url("~_img/productEnviroment/productEnviroment_banner.png")
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
          // display: flex;
          // justify-content: center;
          // align-items: center;
          font-size: 24px;
          color: #fff;
          margin-top: 16px;
          margin-bottom: 60px;
          // width: 660px;
          // height: 70px;
          // background: rgba(255, 255, 255, 0.75);
          // border-radius: 8px;
          // margin: 16px 0 41px 0;
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
    // margin-top: 75px;
    height: 900px;
    background-color: #fff;

    .big_title {
      padding: 40px 0;
      font-size: 30px;
      font-weight: 600;
      color: #171a25;
      text-align: center;
    }
    p {
      // text-indent: 2em;
      // &:nth-child(2),
      // &:nth-child(3) {
      text-align: center;
      // }
      // &:nth-child(4) {
      //   text-indent: 0;
      // }
      color: rgba(23, 26, 37, 0.6);
      font-size: 20px;
      // text-align: left;
    }
    .block {
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      height: 900px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          // flex: 1;
          margin-right: 20px;
          width: 386px;
          height: 448px;
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
            margin-right: 20px;
            width: 386px;
            height: 130px;
            background: #f6f8fb;
            font-size: 18px;
            color: #33384c;
            display: flex;
            justify-content: center;
            align-items: center;
            &:last-child {
              margin-right: 0;
            }
            span {
              display: inline-block;
              padding-top: 20px;
              padding-right: 30px;
              padding-left: 35px;
            }
          }
        }
      }
      img {
        width: 1194px;
        height: 663px;
      }
    }
  }
  .contact {
    height: 900px;
    // background: #eef0f5;
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
        padding: 28px 0;
      }
      .title_detail {
        font-size: 20px;
        color: #33384c;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        p {
          // margin-right: 37px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgba(23, 26, 37, 0.6);
          &:last-child {
            margin-right: 0;
          }
          // &:nth-child(2)::before {
          //   content: "";
          //   display: inline-block;
          //   width: 13px;
          //   height: 16px;
          //   background: url("~_img/about_foot_phone.png") no-repeat;
          //   background-size: 100% 100%;
          //   margin-right: 10px;
          // }
          // &:nth-child(3)::before {
          //   content: "";
          //   display: inline-block;
          //   width: 13px;
          //   height: 16px;
          //   background: url("~_img/about_foot_address.png") no-repeat;
          //   background-size: 100% 100%;
          //   margin-right: 10px;
          // }
        }
      }
      .map {
        margin-top: 40px;
        display: flex;
        justify-content: center;
        img {
          width: 1047px;
          height: 601px;
        }
      }
    }
  }
}
</style>
