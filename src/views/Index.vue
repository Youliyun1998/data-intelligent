<template>
  <div class="home">
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">数据智能</p>
          <p class="sub_text">整体解决方案提供商</p>
          <div class="line"></div>
        </div>
      </div>
      <!-- 悬浮电话，回到顶部 -->
      <!-- <div class="img">
        <img
          :src="suspensionUrl1"
          alt=""
          title="020-85829519"
          @mouseover="MouseOver1"
          @mouseleave="MouseLeave1"
        />
        <img
          :src="suspensionUrl2"
          alt=""
          title="020-85829519"
          @mouseover="MouseOver2"
          @mouseleave="MouseLeave2"
          @click="handleTop"
        />
      </div> -->
    </div>

    <div class="tab">
      <div class="tab_content wrap">
        <div
          class="tab_text"
          v-for="(item, index) in tabText"
          :key="index"
          @click="handletabText(index)"
        >
          {{ item }}
        </div>
      </div>
    </div>

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
            v-for="(item, index) in dataServeTab"
            :key="index"
            :class="[activeTab === index ? 'active' : '']"
            @click="handleImgChange(index, '')"
          >
            <img :src="item.img" alt="" />
            <div class="text">{{ item.text }}</div>
            <div class="line"></div>
          </div>
        </div>

        <IndexUserCenter
          :detailData="detailData1"
          @changeRouter="changeRouter"
          v-show="activeTab === 0"
        />
        <IndexUserCenter
          :detailData="detailData2"
          @changeRouter="changeRouter"
          v-show="activeTab === 1"
        />
        <IndexUserCenter
          :detailData="detailData3"
          @changeRouter="changeRouter"
          v-show="activeTab === 2"
        />
        <IndexUserCenter
          :detailData="detailData4"
          @changeRouter="changeRouter"
          v-show="activeTab === 3"
        />
        <IndexUserCenter
          :detailData="detailData5"
          @changeRouter="changeRouter"
          v-show="activeTab === 4"
        />
      </div>
    </div>

    <!-- 城市物联网与数字治理 -->
    <div
      class="city_goven"
      :style="{
        backgroundImage: 'url(' + bgUrl[0].baseImg + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
      }"
    >
      <!-- -->
      <div class="city_goven_content wrap">
        <div class="city_title">城市物联网与数字治理</div>
        <p class="sub_title">
          纳指数据提供城市物联网和政府数字治理，从产品定制、硬件铺设、数据集成、智能控制、智慧运营管理等整体解决方案。
        </p>
        <div class="under_content">
          <div class="left">
            <ul>
              <li
                v-for="(item, index) in programData"
                :key="index"
                :class="[currentIndex === index ? 'active_tab' : '']"
                @click="handleCityChange(index)"
              >
                <div class="line"></div>
                {{ item }}
              </li>
            </ul>
          </div>
          <IndexCityGoven
            :CityGoven="CityGoven1"
            @changeJump="changeJump(0)"
            v-show="currentIndex === 0"
          />
          <IndexCityGoven
            :CityGoven="CityGoven2"
            @changeJump="changeJump(1)"
            v-show="currentIndex === 1"
          />
          <IndexCityGoven
            :CityGoven="CityGoven3"
            @changeJump="changeJump(2)"
            v-show="currentIndex === 2"
          />
          <IndexCityGoven
            :CityGoven="CityGoven4"
            @changeJump="changeJump(3)"
            v-show="currentIndex === 4"
          />
          <IndexCityGoven
            :CityGoven="CityGoven5"
            @changeJump="changeJump(4)"
            v-show="currentIndex === 3"
          />
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
      <!-- </div> -->
      <!-- </div> -->
      <!-- <Footer /> -->
    </div>
  </div>
</template>

<script>
import IndexCityGoven from '_c/IndexCityGoven'
import IndexUserCenter from '_c/IndexUserCenter'
// import Head from '_c/Head.vue'
// import Footer from '_c/Footer'
export default {
  name: 'home',
  components: {
    // Footer
    // Head
    IndexUserCenter,
    IndexCityGoven
  },
  data () {
    return {
      suspensionUrl1: require('../assets/img/phone.png'),
      suspensionUrl2: '',

      bgUrl: [
        {
          baseImg: require('../assets/img/data_program_bg1.png')
        },
        {
          baseImg: require('../assets/img/data_program_bg2.png')
        },
        {
          baseImg: require('../assets/img/data_program_bg3.png')
        },
        {
          baseImg: require('../assets/img/data_program_bg5.png')
        },
        {
          baseImg: require('../assets/img/data_program_bg4.png')
        }
      ],
      CityGoven1: {
        title: '智慧灯杆',
        content: [
          '智慧灯杆作为构建智慧城市的重要载体，充分应用路灯',
          ' 灯杆在城市中无处不在的优势，达到资源共享；以路灯',
          '杆为载体，完成互联互通。'
        ],
        detail: '查看详情'
      },
      CityGoven2: {
        title: '智慧环保',
        content: [
          '基于物联网技术、云计算技术、3S技术、多网融合等多',
          '种技术方案，通过实时采集污染源、环境质量、生态、',
          '环境风险等信息，构建全方位、多层次、全覆盖的生态',
          '环境监测网络，实现环保数据智能分析及趋势预警，提',
          '升生态环境质量监管及综合决策能力。'
        ],
        detail: '查看详情'
      },
      CityGoven3: {
        title: '智慧园区',
        content: [
          '通过智慧园区云平台，为各要素建立相应的业务平台，',
          '统一容纳各要素的信息资源，统一为各业务提供应用工',
          '具平台，统一用户接触面。'
        ],
        detail: '查看详情'
      },
      CityGoven4: {
        title: '云物管',
        content: [
          '基于人脸识别、物联网、大数据技术，实现门禁、安',
          '防、停车、消费等软硬件一体化管理。'
        ],
        detail: '查看详情'
      },
      CityGoven5: {
        title: '智慧旅游',
        content: [
          '推动旅游景观全域优化、旅游服务全域配套、旅游治理',
          '全域覆盖、旅游质量全面提升、旅游产业全域联动和旅',
          '旅游成果全民共享。'
        ],
        detail: '查看详情'
      },
      currentIndex: 0,
      detailData1: {
        title: '多源数据采集',
        content: [
          '多种埋点方式，支持客户端、服务器日志、业务数据库、',
          '第三方服务、历史数据导入等全端数据采集。'
        ],
        detail: '查看详情',
        imgUrl: require('../assets/img/data_serve_right_bg1.png')
      },
      detailData2: {
        title: '数据治理',
        content: [
          '数据治理，提供数据采集、数据地图、数据清洗、数据质',
          '量管控、数据安全、数据服务等。'
        ],
        detail: '查看详情',
        imgUrl: require('../assets/img/data_serve_right_bg2.png')
      },
      detailData3: {
        title: '数据建模',
        content: [
          '数据建模自带模型库，支持高级建模方式，提供模型全生',
          '命周期管理、调度管理、监控分析、模型上下架等。'
        ],
        detail: '查看详情',
        imgUrl: require('../assets/img/data_serve_right_bg3.png')
      },
      detailData4: {
        title: '数据可视化',
        content: [
          '数据可视化平台提供所见即所得的配置方式，帮助用户快',
          '速建立专业的数据大屏。'
        ],
        detail: '查看详情',
        imgUrl: require('../assets/img/data_serve_right_bg4.png')
      },
      detailData5: {
        title: '智能应用',
        content: [
          '提供专家团队与用户业务骨干组成创新小组，共同探讨突',
          '破方向，从任务开始到成果交付全流程跟踪效果。'
        ],
        detail: '查看详情',
        imgUrl: require('../assets/img/data_serve_right_bg5.png')
      },
      activeTab: 0,
      dataServeTab: [
        {
          img: require('../assets/img/data_set_act.png'),
          text: '数据采集'
        },
        {
          img: require('../assets/img/data_govern.png'),
          text: '数据治理'
        },
        {
          img: require('../assets/img/data_jianmo.png'),
          text: '数据建模'
        },
        {
          img: require('../assets/img/data_see.png'),
          text: '数据可视化'
        },
        {
          img: require('../assets/img/smart_app.png'),
          text: '智能应用'
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
    window.addEventListener('scroll', e => {
      var scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop > 1099) {
        this.suspensionUrl2 = require('../assets/img/top.png')
      } else {
        this.suspensionUrl2 = ''
      }
    })
  },
  methods: {
    handletabText (index) {
      window.scrollTo(0, 0)
      if (index === 1) {
        this.$router.push({ path: '/serve' })
      } else if (index === 2) {
        this.$router.push({ path: '/product/SmartLampStandard' })
      }
    },
    changeJump (index) {
      window.scrollTo(0, 0)
      switch (index) {
        case 0:
          this.$router.push({ path: '/product/SmartLampStandard' })

          break
        case 1:
          this.$router.push({ path: '/product/SmartEnviroment' })

          break
        case 2:
          this.$router.push({ path: '/product/SmartPark' })

          break
        case 3:
          this.$router.push({ path: '/product/SmartWuGuan' })

          break
        case 4:
          this.$router.push({ path: '/product/SmartTraval' })

          break
        default:
      }
    },
    changeRouter () {
      window.scrollTo(0, 0)
      this.$router.push({ path: '/serve' })
    },
    handleTop () {
      window.scrollTo(0, 0)
      this.suspensionUrl2 = ''
    },
    MouseOver1 () {
      this.suspensionUrl1 = require('../assets/img/phone_act.png')
    },
    MouseLeave1 () {
      this.suspensionUrl1 = require('../assets/img/phone.png')
    },
    MouseOver2 () {
      this.suspensionUrl2 = require('../assets/img/top_act.png')
    },
    MouseLeave2 () {
      this.suspensionUrl2 = require('../assets/img/top.png')
    },
    handleCityChange (index) {
      this.currentIndex = index
      // 解决切换背景图片出现闪动问题
      const img = new Image()
      img.src = this.bgUrl[this.currentIndex].baseImg
      // console.log(img.src, " img.src");
      img.onload = () => {
        // console.log(document.getElementsByClassName("city_goven"), "a");
        document.getElementsByClassName('city_goven')[0].style.backgroundImage =
          'url(' + img.src + ')'
        document.getElementsByClassName('city_goven')[0].style.backgroundSize =
          '100% 100%'
        document.getElementsByClassName(
          'city_goven'
        )[0].style.backgroundRepeat = 'no-repeat'
      }
    },
    handleImgChange (index, way) {
      // console.log(index, "index");
      this.activeTab = index
      // let tempStr = way === "hover" ? "_act" : "";
      let tempStr = ''
      // console.log(this.dataServeTab[0], "this.dataServeTab[0]");
      // console.log(this.dataServeTab, " this.dataServeTab[0].img");
      this.dataServeTab[0].img = this.staImg1
      this.dataServeTab[1].img = this.staImg2
      this.dataServeTab[2].img = this.staImg3
      this.dataServeTab[3].img = this.staImg4

      this.dataServeTab[4].img = this.staImg5
      // this.dataServeTab[5].img = require(`../assets/img/phone.png`);
      switch (this.activeTab) {
        case 0:
          tempStr = '_act'
          this.dataServeTab[0].img = require(`../assets/img/data_set${tempStr}.png`)
          break
        case 1:
          tempStr = '_act'
          this.dataServeTab[1].img = require(`../assets/img/data_govern${tempStr}.png`)
          break
        case 2:
          tempStr = '_act'
          this.dataServeTab[2].img = require(`../assets/img/data_jianmo${tempStr}.png`)
          break
        case 3:
          tempStr = '_act'
          this.dataServeTab[3].img = require(`../assets/img/data_see${tempStr}.png`)
          break
        case 4:
          tempStr = '_act'
          this.dataServeTab[4].img = require(`../assets/img/smart_app${tempStr}.png`)
          break
        // case 5:
        //   tempStr = "_act";
        //   this.dataServeTab[5].img = require(`../assets/img/phone${tempStr}.png`);
        //   break;
        // 可以继续添加
      }
    },
    afterLoad (e) {
      // console.log(e.index, "oooo");
      if (e.index === 3) {
        // moveTo(0, slide);
      }
    },
    // 动态切换图片路径
    changeImageSrc (index, way) {
      const tempStr = way === 'hover' ? '_act' : ''

      // console.log('鼠标移入/移出')
      // 移入或移出时图标src 名后缀变化('_h'表示移入状态;默认状态后缀为空'')
      // const tempStr = way === "hover" ? "_act" : "";
      switch (index) {
        case 0:
          this.dataServeTab[0].img = require(`../assets/img/data_set${tempStr}.png`)
          break
        case 1:
          this.dataServeTab[1].img = require(`../assets/img/data_govern${tempStr}.png`)
          break
        case 2:
          this.dataServeTab[2].img = require(`../assets/img/data_jianmo${tempStr}.png`)
          break
        case 3:
          this.dataServeTab[3].img = require(`../assets/img/data_see${tempStr}.png`)
          break
        case 4:
          this.dataServeTab[4].img = require(`../assets/img/smart_app${tempStr}.png`)
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
  // background: #1c2133;
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
  background-size: 100% 100%;
  .img {
    position: fixed;
    top: 700px;
    right: 100px;
    display: flex;
    flex-direction: column;
  }

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
        content: "";
        width: 36px;
        height: 36px;
        background: url("~_img/tab1.png");
        background-size: 100% 100%;
        margin-right: 40px;
      }
      &:nth-child(2)::before {
        content: "";
        width: 36px;
        height: 36px;
        background: url("~_img/tab2.png");
        background-size: 100% 100%;
        margin-right: 40px;
      }
      &:nth-child(3)::before {
        content: "";
        width: 36px;
        height: 36px;
        background: url("~_img/tab3.png");
        background-size: 100% 100%;
        margin-right: 40px;
      }
      &:hover {
        color: #59a6ba;
        background: #191f33;
        font-weight: bold;
        &:first-child::before {
          content: "";
          width: 36px;
          height: 36px;
          background: url("~_img/tab1_act.png");
          background-size: 100% 100%;
          margin-right: 40px;
        }
        &:nth-child(2)::before {
          content: "";
          width: 36px;
          height: 36px;
          background: url("~_img/tab2_act.png");
          background-size: 100% 100%;
          margin-right: 40px;
        }
        &:nth-child(3)::before {
          content: "";
          width: 36px;
          height: 36px;
          background: url("~_img/tab3_act.png");
          background-size: 100% 100%;
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

      display: flex;
      padding-top: 37px;

      border-bottom: 1px solid #ebebec;

      .tab_wrap {
        cursor: pointer;
        flex: 1;
        // text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        // padding-bottom: 5px;
        // border-bottom: 5px solid transparent;
        img {
          width: 42px;
          height: 41px;
        }
        .text {
          padding: 15px 0;
        }
        // &:hover {
        //   color: #59a6ba;
        //   .line {
        //     width: 30px;
        //     height: 5px;
        //     background: #ffdd1f;
        //     border-radius: 3px;
        //     text-align: center;
        //   }
        // }
        &.active {
          color: #59a6ba;

          .line {
            width: 30px;
            height: 5px;
            background: #ffdd1f;
            border-radius: 3px;
            text-align: center;
          }
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
  // background: url("~_img/data_program_bg.png");
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
        background-color: #fff;
        box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.09);
        border-radius: 4px;
        border: 1px solid #e3ecef;
        padding: 5px 0;
        ul {
          li {
            cursor: pointer;
            width: 200px;
            height: 100px;
            display: flex;
            // justify-content: center;
            align-items: center;
            color: #75777d;
            font-size: 16px;
            .line {
              width: 4px;
              height: 50px;
              background: transparent;
              border-radius: 0px 2px 2px 0px;
              margin-right: 60px;
            }
            // padding-left: 60px;

            // &:hover {
            //   color: #59a6ba;
            //   font-size: 18px;
            //   font-weight: bold;
            //   background: linear-gradient(
            //     270deg,
            //     rgba(238, 240, 245, 0.5) 1%,
            //     rgba(175, 209, 220, 0.35) 69%,
            //     rgba(89, 166, 186, 0.14) 100%
            //   );
            //   border-radius: 4px 4px 0px 0px;
            //   // &::before {
            //   //   content: "";
            //   //   width: 4px;
            //   //   height: 50px;
            //   //   background: #59a6ba;
            //   //   border-radius: 0px 2px 2px 0px;
            //   // }
            // }
            &.active_tab {
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
              .line {
                width: 4px;
                height: 50px;
                background: #59a6ba;
                border-radius: 0px 2px 2px 0px;
                margin-right: 60px;
              }
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
