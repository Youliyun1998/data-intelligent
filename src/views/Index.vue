<template>
  <div class="home">
    <!-- 悬浮回到顶部按钮 -->

    <!-- banner -->
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">数据智能</p>
          <p class="sub_text">整体解决方案提供商</p>
          <div class="line"></div>
        </div>
      </div>
      <img
        :src="staImg6"
        @mouseover="changeImageSrc(6, 'hover')"
        @mouseleave="changeImageSrc(6, '')"
        title="020-38986350 "
        alt=""
      />
    </div>
    <!-- tab -->
    <div class="tab">
      <div class="tab_content wrap">
        <div class="tab_text" v-for="(item, index) in tabText" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 以用户为中心的全流程数据服务 -->
    <div class="userCenter_dataServe">
      <div class="dataServe_content wrap">
        <div class="dataServe_title">
          以用户为中心的全流程数据服务
        </div>
        <div class="dataServe_subtitle">
          纳指数据提供从数据采集、数据治理、数据建模、数据分析到智能应用的全流程数据服务解决方案，帮助用户探索数据价值和创新智能
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
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      enter: false,
      leave: true,
      activeIndex: 0,
      tabData: ['首页', '服务', '产品', '案例', '关于我们'],
      value1: 1,
      tabText: ['数据管理成熟度评测', '数据治理与分析', '城市物联网与数字城市'],
      programData: ['智慧灯杆', '智慧环保', '智慧园区', '云物管', '智慧旅游'],
      staImg1: require('../assets/img/data_set.png'),
      staImg2: require('../assets/img/data_govern.png'),
      staImg3: require('../assets/img/data_jianmo.png'),
      staImg4: require('../assets/img/data_see.png'),
      staImg5: require('../assets/img/smart_app.png'),
      staImg6: require('../assets/img/phone.png')
    }
  },
  mounted () {
    window.addEventListener('scroll', this.showbtn, true)
  },
  methods: {
    // 显示回到顶部按钮
    showbtn () {
      const that = this
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      that.scrollTop = scrollTop
    },
    /**
     * 回到顶部功能实现过程：
     * 1. 获取页面当前距离顶部的滚动距离（虽然IE不常用了，但还是需要考虑一下兼容性的）
     * 2. 计算出每次向上移动的距离，用负的滚动距离除以5，因为滚动的距离是一个正数，想向上移动就是做一个减法
     * 3. 用当前距离加上计算出的距离，然后赋值给当前距离，就可以达到向上移动的效果
     * 4. 最后记得在移动到顶部时，清除定时器
     */
    backtop () {
      var timer = setInterval(function () {
        const osTop =
          document.documentElement.scrollTop || document.body.scrollTop
        const ispeed = Math.floor(-osTop / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed
        this.isTop = true
        if (osTop === 0) {
          clearInterval(timer)
        }
      }, 30)
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
  // overflow: hidden;
  //   width: 100%;
  height: 100%;
  background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }

  .top {
    z-index: 999999;
    position: fixed;
    width: 100%;
    height: 70px;
    background: #1c2133;
    box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
    .top_content {
      width: 1200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .top_left {
        img {
          width: 204.43px;
          height: 40.01px;
        }
      }
      .top_right {
        .top_tab {
          color: #aaaaaa;
          font-size: 14px;
          ul {
            display: flex;
            li {
              margin-left: 60px;
              width: 66px;
              height: 70px;
              line-height: 70px;
              text-align: center;
              &.active {
                color: #fff;
                // width: 66px;
                border-bottom: 4px solid #ffdd1f;
              }
            }
          }
        }
      }
    }
  }
}
.banner {
  position: relative;

  height: 717px;
  background: url("~_img/banner.png") no-repeat;
  background-size: contain;
  img {
    position: absolute;
    right: 100px;
    bottom: 0;
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
  background-color: #20263d;
  .tab_content {
    display: flex;
    justify-content: center;
    align-items: center;
    .tab_text {
      flex: 1;
      height: 119px;
      background: #20263d;
      border-radius: 4px 4px 0px 0px;
      border: 1px solid #393e49;
      font-size: 20px;
      font-weight: bold;
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
  height: 900px;
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
          background-size: 90% 100%;
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
      }
    }
  }
}
.city_goven {
  height: 900px;
  background: url("~_img/data_program_bg.png");
  .city_goven_content {
    padding-top: 40px;

    .city_title {
      text-align: center;
      font-size: 30px;
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
  height: 700px;
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
        height: 114px;
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
          padding: 40px 0;
        }
        dd {
          color: #aaaaaa;
          font-size: 14px;
          padding-bottom: 30px;
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
          color: #aaaaaa;
          font-size: 14px;
          padding-bottom: 30px;
        }
      }
    }
  }
  .copy {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aaaaaa;
    p {
      margin-right: 20px;
    }
  }
}
</style>
