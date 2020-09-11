<template>
  <div class="about">
    <!-- <Head /> -->
    <!-- <full-page :options="options" ref="page"> -->
    <!--      第一屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <!-- <div class="slide"> -->
    <div class="banner">
      <div class="big_title wrap">
        <div class="title">大数据智能应用服务提供商</div>
        <div class="sub_title">
          把数据资产变成生产资料，产生价值是我们的服务宗旨
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
          纳指数据拥有大数据专业分析团队和系列数据智能产品，为科研单位、政府机构和大型企业用户提供咨询规划、数据采集、数据清
        </p>
        <p>
          洗、数据地图、数据质量管控、数据安全、数据共享等数据服务，数据智能产品推出智慧灯杆、智慧环保、智慧园区、智慧旅游、云物管等产品。
        </p>
        <div class="block">
          <ul>
            <li v-for="(item, index) in enData" :key="index">
              <p>{{ item }}</p>
              <div class="line"></div>
            </li>
            <div class="block_footer">
              <div v-for="(item, index) in enDataDetail" :key="index">
                <span>{{ item }} </span>
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
    <div class="contact">
      <div class="contact_content wrap">
        <div class="title">联系方式</div>
        <div class="title_detail">
          <p>广州纳指数据智能科技有限公司</p>
          <p>020-38986350</p>
          <p>广东省广州市番禺区小谷围街青蓝街28号创智大厦3栋408室</p>
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
    // Footer
    // Head
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
    width: 100%;
    height: 900px;
    background: url("~_img/about_banner2.png") no-repeat;
    background-size: cover;
    position: relative;
    // top: 73px;
    .big_title {
      position: absolute;
      top: 40%;
      left: 30%;
      color: #fff;
      .title {
        font-size: 50px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 16px;
      }
      .sub_title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 30px;
        font-weight: 500;
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
      &:nth-child(2),
      &:nth-child(3) {
        text-align: center;
      }
      color: rgba(23, 26, 37, 0.6);
      font-size: 20px;
      text-align: left;
    }
    .block {
      margin-top: 40px;
      padding-bottom: 40px;
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
          }
          &:nth-child(2) {
            background: url("~_img/about_en2.png") no-repeat;
          }
          &:nth-child(3) {
            background: url("~_img/about_en3.png") no-repeat;
            margin-right: 0;
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          p {
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
        padding: 28px 0;
      }
      .title_detail {
        font-size: 20px;
        color: #33384c;
        display: flex;
        justify-content: center;

        p {
          margin-right: 37px;
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
