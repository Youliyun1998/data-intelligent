<template>
  <div class="home">
    <!-- ================== -->
    <!-- <Head /> -->
    <full-page :options="options" ref="page">
      <!--      第一屏-->
      <div class="section">
        <div class="box1">
          <div class="slide">
            <!-- banner -->
            <div class="banner">
              <div class="left_text wrap">
                <div class="left_text_l">
                  <p class="big_text">数据智能</p>
                  <p class="sub_text">整体解决方案提供商</p>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <!-- tab -->
            <div class="tab">
              <div class="tab_content wrap">
                <div
                  class="tab_text"
                  v-for="(item, index) in tabText"
                  :key="index"
                >
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--      第二屏-->
      <div class="section">
        <div class="box2">
          <!-- 以用户为中心的全流程数据服务 -->
          <div class="userCenter_dataServe">
            <div class="dataServe_content wrap">
              <div class="dataServe_title">
                以用户为中心的全流程数据服务
              </div>
              <div class="dataServe_subtitle">
                <p>
                  纳指数据提供从数据采集、数据治理、数据建模、数据分析到智能应用的全流程数据服务解决方案，帮助用户探索数据价值和创新智能
                </p>
                <p>应用。</p>
              </div>
              <div class="dataServe_tab">
                <div
                  class="tab_wrap"
                  @mouseover="changeImageSrc(1, 'hover')"
                  @mouseleave="changeImageSrc(1, '')"
                >
                  <img :src="staImg1" alt="" />
                  <div class="text">数据采集</div>
                </div>
                <div
                  class="tab_wrap"
                  @mouseover="changeImageSrc(2, 'hover')"
                  @mouseleave="changeImageSrc(2, '')"
                >
                  <img :src="staImg2" alt="" />
                  <div class="text">数据治理</div>
                </div>
                <div
                  class="tab_wrap"
                  @mouseover="changeImageSrc(3, 'hover')"
                  @mouseleave="changeImageSrc(3, '')"
                >
                  <img :src="staImg3" alt="" />
                  <div class="text">数据建模</div>
                </div>
                <div
                  class="tab_wrap"
                  @mouseover="changeImageSrc(4, 'hover')"
                  @mouseleave="changeImageSrc(4, '')"
                >
                  <img :src="staImg4" alt="" />
                  <div class="text">数据可视化</div>
                </div>
                <div
                  class="tab_wrap"
                  @mouseover="changeImageSrc(5, 'hover')"
                  @mouseleave="changeImageSrc(5, '')"
                >
                  <img :src="staImg5" alt="" />
                  <div class="text">智能应用</div>
                </div>
              </div>
              <div class="under_content">
                <div class="left">
                  <div class="left_top">
                    <span>多源数据采集</span>
                  </div>
                  <div class="left_center">
                    <p>多种埋点方式，支持客户端、服务器日志、业务数据库、</p>
                    <p>第三方服务、历史数据导入等全端数据采集。</p>
                  </div>
                  <div class="left_bottom">查看详情</div>
                </div>
                <div class="right">
                  <img src="~_img/data_serve_right_bg.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三屏 -->
      <div class="section">
        <div class="box3">
          <!-- 城市物联网与数字治理 -->
          <div class="city_goven">
            <div class="city_goven_content wrap">
              <div class="city_title">城市物联网与数字治理</div>
              <p class="sub_title">
                纳指数据提供城市物联网和政府数字治理，从产品定制、硬件铺设、数据集成、智能控制、智慧运营管理等整体解决方案。
              </p>
              <div class="under_content">
                <div class="left">
                  <ul>
                    <li v-for="(item, index) in programData" :key="index">
                      {{ item }}
                    </li>
                  </ul>
                </div>
                <div class="right">
                  <p class="title">智慧灯杆</p>
                  <div class="line"></div>
                  <p>智慧灯杆作为构建智慧城市的重要载体，充分应用路灯</p>
                  <p>
                    灯杆在城市中无处不在的优势，达到资源共享；以路灯
                  </p>
                  <p>杆为载体，完成互联互通。</p>
                  <div class="check">
                    <span>查看详情</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 第四屏 -->
      <div class="section">
        <div class="box3">
          <!-- 合作伙伴 -->
          <div class="company">
            <div class="company_content wrap">
              <div class="company_title">合作伙伴</div>
              <div class="company_img">
                <img src="~_img/company1.png" alt="" />
                <img src="~_img/company2.png" alt="" />
                <img src="~_img/company3.png" alt="" />
                <img src="~_img/company4.png" alt="" />
                <img src="~_img/company5.png" alt="" />
                <img src="~_img/company6.png" alt="" />
                <img src="~_img/company7.png" alt="" />
                <img src="~_img/company8.png" alt="" />
                <img src="~_img/company9.png" alt="" />
                <img src="~_img/company10.png" alt="" />
                <img src="~_img/company11.png" alt="" />
                <img src="~_img/company12.png" alt="" />
                <img src="~_img/company13.png" alt="" />
                <img src="~_img/company14.png" alt="" />
                <img src="~_img/company15.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </full-page>
  </div>
</template>

<script>
// import Head from '_c/Head.vue'
import Footer from '_c/Footer'
export default {
  name: 'home',
  components: {
    Footer
    // Head
  },
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
      isTop: true,
      enter: false,
      leave: true,
      activeIndex: 0,
      num: 0,
      tabData: ['首页', '服务', '产品', '案例', '关于我们'],
      value1: 1,
      tabText: ['数据管理成熟度评测', '数据治理与分析', '城市物联网与数字城市'],
      programData: ['智慧灯杆', '智慧环保', '智慧园区', '智慧旅游', '云物管'],
      staImg1: require('../assets/img/data_set.png'),
      staImg2: require('../assets/img/data_govern.png'),
      staImg3: require('../assets/img/data_jianmo.png'),
      staImg4: require('../assets/img/data_see.png'),
      staImg5: require('../assets/img/smart_app.png'),
      staImg6: require('../assets/img/phone.png')
    }
  },
  mounted () {
    // window.onscroll = function() {
    //   //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //   //scrollTop就是触发滚轮事件时滚轮的高度
    //   var scrollTop =
    //     document.documentElement.scrollTop || document.body.scrollTop;
    //   console.log("滚动距离" + scrollTop);
    // };
    // var scrollFunc = function(e) {
    //   // if (!this.isTop) return;
    //   e = e || window.event;
    //   if (e.wheelDelta) {
    //       console.log(e.wheelDelta, "e.wheelDelta");
    //     //判断浏览器IE，谷歌滑轮事件
    //     if (e.wheelDelta > 0) {
    //       //当滑轮向上滚动时
    //       // alert("滑轮向上滚动");
    //     }
    //     if (e.wheelDelta < 0) {
    //       //当滑轮向下滚动时
    //       this.isTop = false;
    //       alert("滑轮向下滚动");
    //       //为了保证兼容性，这里取两个值，哪个有值取哪一个
    //       //scrollTop就是触发滚轮事件时滚轮的高度
    //       var scrollTop =
    //         document.documentElement.scrollTop || document.body.scrollTop;
    //       console.log("滚动距离" + scrollTop);
    //       // 获取每一块在页面中占的位置
    //       var banner = document.getElementsByClassName("banner");
    //       var tab = document.getElementsByClassName("tab");
    //       // console.log(banner.clientHeight, "banner.clientHeight");
    //       var userCenter = document.getElementsByClassName(
    //         "userCenter_dataServe"
    //       );
    //       var city = document.getElementsByClassName("city_goven");
    //       var company = document.getElementsByClassName("company");
    //       var sectionHeight1 =
    //         banner[0].clientHeight + tab[0].clientHeight - 75;
    //       var sectionHeight12 = userCenter[0].clientHeight;
    //       var sectionHeight13 = city[0].clientHeight;
    //       var sectionHeight14 = company[0].clientHeight;
    //       var sectionHeight15 = 348;
    //       console.log(sectionHeight14, "sectionHeight14");
    //       var arr1 = [
    //         sectionHeight1,
    //         sectionHeight12,
    //         sectionHeight13,
    //         sectionHeight14,
    //         sectionHeight15
    //       ];
    //       const timeid1 = setInterval(() => {
    //         scrollTop += 10;
    //         window.scrollTo(0, scrollTop);
    //         if (scrollTop >= sectionHeight1) {
    //           this.num++;
    //           window.scrollTo(0, sectionHeight1);
    //           this.isTop = true;
    //           clearInterval(timeid1);
    //         }
    //       }, 10);
    //       // const timeid2 = setInterval(() => {
    //       //   scrollTop += 200;
    //       //   // window.scrollTo(0, scrollTop);
    //       //   if (scrollTop >= sectionHeight1 + sectionHeight12) {
    //       //     clearInterval(timeid2);
    //       //     // console.log(sectionHeight1, "sectionHeight1");
    //       //     window.scrollTo(0, sectionHeight1 + sectionHeight12);
    //       //   }
    //       // }, 100);
    //     }
    //   } else if (e.detail) {
    //     //Firefox滑轮事件
    //     if (e.detail > 0) {
    //       //当滑轮向上滚动时
    //       // alert("滑轮向上滚动");
    //     }
    //     if (e.detail < 0) {
    //       //当滑轮向下滚动时
    //       // alert("滑轮向下滚动");
    //     }
    //   }
    // };
    // //给页面绑定滑轮滚动事件
    // if (document.addEventListener) {
    //   //firefox
    //   document.addEventListener("DOMMouseScroll", scrollFunc, false);
    // }
    // //滚动滑轮触发scrollFunc方法  //ie 谷歌
    // window.onmousewheel = document.onmousewheel = scrollFunc;
  },
  methods: {
    afterLoad (e) {
      // console.log(e.index, "oooo");
      if (e.index === 3) {
        // moveTo(0, slide);
      }
    },
    // 动态切换图片路径
    changeImageSrc (key, way) {
      // console.log('鼠标移入/移出')
      // 移入或移出时图标src 名后缀变化('_h'表示移入状态;默认状态后缀为空'')
      const tempStr = way === 'hover' ? '_act' : ''
      switch (key) {
        case 1:
          this.staImg1 = require(`../assets/img/data_set${tempStr}.png`)
          break
        case 2:
          this.staImg2 = require(`../assets/img/data_govern${tempStr}.png`)
          break
        case 3:
          this.staImg3 = require(`../assets/img/data_jianmo${tempStr}.png`)
          break
        case 4:
          this.staImg4 = require(`../assets/img/data_see${tempStr}.png`)
          break
        case 5:
          this.staImg5 = require(`../assets/img/smart_app${tempStr}.png`)
          break
        case 6:
          this.staImg6 = require(`../assets/img/phone${tempStr}.png`)
          break
        // 可以继续添加
      }
    },
    handleTab (e) {
      this.activeIndex = e
      switch (e) {
        case 0:
          this.$router.push({ path: '/home' })
          break // 可选
        case 1:
          this.$router.push({ path: '/serve' })
          break // 可选
        case 2:
          this.$router.push({ path: '/product' })
          break
        case 3:
          this.$router.push({ path: '/example' })
          break
        case 4:
          this.$router.push({ path: '/about' })
          break // 你可以有任意数量的case语句
        default: // 可选
        // 语句
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
  .section {
    /deep/.iScrollVerticalScrollbar {
      width: 0;
      display: none;
    }
  }
}

.banner {
  position: relative;
  // top: 75px;
  height: 717px;
  background: url("~_img/banner.png") no-repeat;
  background-size: contain;
  img {
    // position: absolute;
    position: fixed;
    top: 600px;
    right: 100px;
  }

  .left_text {
    .left_text_l {
      position: absolute;
      top: 30%;

      .big_text {
        font-size: 50px;
        color: #fff;
      }
      .sub_text {
        font-size: 30px;
        color: rgba(255, 255, 255, 0.6);
        margin: 16px 0 41px 0;
      }
      .line {
        width: 110px;
        height: 10px;
        background: #3e6eff;
        border-radius: 3px;
      }
    }
  }
}
.tab {
  border-top: 1px solid #393e49;
  background-color: #20263d;
  .tab_content {
    display: flex;
    justify-content: center;
    align-items: center;
    .tab_text {
      flex: 1;
      height: 120px;
      background: #20263d;
      border-radius: 4px 4px 0px 0px;
      border-left: 1px solid #393e49;
      &:last-child {
        border-right: 1px solid #393e49;
      }
      font-size: 20px;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      &:first-child::before {
        content: url("~_img/tab1.png");
        margin-right: 40px;
      }
      &:nth-child(2)::before {
        content: url("~_img/tab2.png");
        margin-right: 40px;
      }
      &:nth-child(3)::before {
        content: url("~_img/tab3.png");
        margin-right: 40px;
      }
      &:hover {
        color: #59a6ba;
        background: #191f33;
        font-weight: bold;
        &:first-child::before {
          content: url("~_img/tab1_act.png");
          margin-right: 40px;
        }
        &:nth-child(2)::before {
          content: url("~_img/tab2_act.png");
          margin-right: 40px;
        }
        &:nth-child(3)::before {
          content: url("~_img/tab3_act.png");
          margin-right: 40px;
        }
      }
    }
  }
}
.userCenter_dataServe {
  background-color: #fff;
  // margin-top: 70px;
  height: 920px;
  .dataServe_content {
    .dataServe_title {
      padding-top: 40px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: bold;
      color: #171a25;
    }
    .dataServe_subtitle {
      font-size: 20px;
      color: #75777d;
      p {
        display: flex;
        justify-content: center;
      }
    }
    .dataServe_tab {
      color: #171a25;
      font-size: 16px;
      // text-align: center;
      display: flex;
      padding-top: 37px;
      // padding-bottom: 20px;
      border-bottom: 1px solid #ebebec;

      .tab_wrap {
        flex: 1;
        text-align: center;
        padding-bottom: 15px;
        border-bottom: 5px solid transparent;
        img {
          width: 42px;
          height: 41px;
        }
        .text {
        }
        &:hover {
          color: #59a6ba;
          border-bottom: 5px solid #ffdd1f;
        }
      }
    }
    .under_content {
      display: flex;
      justify-content: space-between;
      padding-top: 79px;
      .left {
        .left_top {
          display: flex;
          justify-content: center;
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
  }
}
.city_goven {
  height: 920px;
  background: url("~_img/data_program_bg.png");
  background-size: 100% 100%;
  .city_goven_content {
    padding-top: 40px;

    .city_title {
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #171a25;
      padding-bottom: 20px;
    }
    .sub_title {
      text-align: center;
      color: #75777d;
      font-size: 20px;
    }
    .under_content {
      display: flex;
      padding-top: 80px;
      .left {
        width: 200px;
        // height: 590px;
        background: rgba(255, 255, 255, 0.36);
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.09);
        border-radius: 4px;
        border: 1px solid #e3ecef;
        padding: 5px 0;
        ul {
          li {
            width: 200px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #75777d;
            font-size: 16px;

            &:hover {
              color: #59a6ba;
              font-size: 18px;
              font-weight: bold;
              background: linear-gradient(
                270deg,
                rgba(238, 240, 245, 0.5) 1%,
                rgba(175, 209, 220, 0.35) 69%,
                rgba(89, 166, 186, 0.14) 100%
              );
              border-radius: 4px 4px 0px 0px;
              // &::before {
              //   content: "";
              //   width: 4px;
              //   height: 50px;
              //   background: #59a6ba;
              //   border-radius: 0px 2px 2px 0px;
              // }
            }
          }
        }
      }
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
    }
  }
}
.company {
  height: 900px;
  background: url("~_img/company_bg.png") no-repeat;
  background-size: 100% 100%;
  .company_content {
    .company_title {
      display: flex;
      justify-content: center;
      color: #171a25;
      font-size: 30px;
      font-weight: bold;
      padding-top: 40px;
    }
    .company_img {
      margin-top: 40px;
      img {
        width: 224px;
        height: 144px;
        background-size: 100% 100%;
        margin-right: 20px;
        margin-bottom: 60px;

        box-shadow: 2px 2px 15px 0px rgba(42, 55, 88, 0.08);
        &:nth-child(11),
        &:nth-child(12),
        &:nth-child(13),
        &:nth-child(14),
        &:nth-child(15) {
          margin-bottom: 0;
        }
        &:nth-child(5n) {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
