<template>
  <div class="example">
    <!-- <Head /> -->
    <!-- <full-page :options="options" ref="page"> -->
    <!--      第一屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <!-- <div class="slide"> -->
    <div class="banner">
      <div class="big_title wrap">
        <div class="title">
          深耕环保、海关、电力、旅游等行业的大数据服务，
        </div>
        <div class="title">
          精通行业知识、高粘性横向拓展业务
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!--      第二屏-->
    <!-- 内容展示区 -->
    <!-- <div class="section"> -->
    <!-- <div class="box2"> -->
    <div class="content_show">
      <ExampleLeftRight
        :title="title3"
        :url="url3"
        :contentData="contentData3"
        :subTitle="subTitle3"
      />
    </div>

    <!-- </div> -->
    <!-- </div> -->

    <!--      第四屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <div class="content_show">
      <ExampleRightLeft
        :title="title2"
        :url="url2"
        :contentData="contentData2"
        :subTitle="subTitle2"
      />
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!--      第二屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box2"> -->
    <div class="content_show">
      <ExampleLeftRight
        :title="title1"
        :url="url1"
        :contentData="contentData"
        :subTitle="subTitle1"
      />
    </div>

    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="section"> -->
    <!-- <div class="box3"> -->
    <div class="content_show">
      <ExampleRightLeft
        :title="title4"
        :url="url4"
        :contentData="contentData4"
        :subTitle="subTitle4"
      />
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!--      第一屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box1"> -->
    <div class="content_show">
      <ExampleLeftRight
        :title="title5"
        :url="url5"
        :contentData="contentData5"
        :subTitle="subTitle5"
      />
      <!-- </div> -->
    </div>
    <!-- <Footer /> -->
    <!-- </div> -->
    <!-- </full-page> -->
  </div>
</template>

<script>
// import Head from '_c/Head.vue'
// import Footer from '_c/Footer'
import ExampleLeftRight from '_c/ExampleLeftRight'
import ExampleRightLeft from '_c/ExampleRightLeft'
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

      subTitle1: [
        '从0-1构建海关大数据风险防控体系，与海关合作建立海关机器学习',
        '应用创新实验室'
      ],
      title1: '海关业务大数据风险防控',
      url1: require('../assets/img/example_content1.png'),
      contentData: [
        {
          title: '- 构建数据模型',
          content: [
            '根据海关业务专家经验，构建数据模型代替人工核查报关单，减轻人',
            '手不足的问题。'
          ]
        },
        {
          title: '- 评估业务风险',
          content: ['通过数据分析模型，客观评估业务风险。']
        },
        {
          title: '- 发现隐藏风险点',
          content: ['通过数据挖掘，发现隐藏风险点。']
        },
        {
          title: '- 推测风险系数',
          content: ['构建风险画像，推测关区风险系数。']
        }
      ],

      title2: '铁路集团数据治理与数据分析',
      url2: require('../assets/img/example_content2.png'),
      subTitle2: [
        '统一数据管理，计算口径和取数来源。对数据进行多口径、多维度的',
        '宏观分析，最大化集团数据资产价值。'
      ],
      contentData2: [
        {
          title: '- 车站标识统一',
          content: [
            '完成全国8493个车站、运行铁路线上的站点7082个、运营中站点',
            '3596个的数据标准化治理。'
          ]
        },
        {
          title: '- 指标标准化',
          content: [
            '利用标准化数据形成基础指标，以满足高效、多维的指标组合分析。'
          ]
        },
        {
          title: '- 车次的成本、效益分析',
          content: ['精确分析每一车次成本、盈余、盈余平衡点、客座率等。']
        },
        {
          title: '- 新开车次成本、效益预测分析',
          content: [
            '成本、效益趋势分析，判断新开车次可行性，提供科学决策依据。'
          ]
        },
        {
          title: '- 交路明细分析',
          content: [
            '分析每个交路所有成本、效益数据，挖掘成本优化空间，优化成本效益。'
          ]
        }
      ],
      title3: '生态环境大数据中心',
      url3: require('../assets/img/example_content3.png'),

      subTitle3: [
        '帮助用户统一管理监测数据，为用户提供生态环境现状评估、趋势预',
        '测、潜力分析、目标制定与跟踪，提供决策支持数据，进而实现对生态',
        ' 环境重点污染源、生态环境动态变化进行有效监管。'
      ],
      subTitle4: [
        '对接运营商数据、景区设备数据，抓取互联网行业及舆情数据，构建旅   ',
        '游产业“一手和全面”的数据，掌控全局，通过数据挖据、分析和应用，',
        ' 全面支持政府和主管部门的决策支持、舆情监控、危机管理和行业监管等。'
      ],
      contentData3: [
        {
          title: '- 精准监测',
          content: ['国控、省站、市站、超级站、微站、走航监测。']
        },
        {
          title: '- 数据融合',
          content: ['全业务、全渠道业务数据融合分析。']
        },
        {
          title: '- 及时预警',
          content: ['监测站点实时告警、污染天气预报告警。']
        },
        {
          title: '- 协同治理',
          content: ['精准定位、多级任务联动。']
        }
      ],
      title4: '旅游产业大数据中心',
      url4: require('../assets/img/example_content4.png'),
      subTitle5: [
        '通过网络爬虫技术广泛采集高校舆情数据，利用自然语言处理技术，实  ',
        '现对包含主观观点信息的文本进行分类判断，根据判断结果进行分析跟',
        '踪，帮助高校提前获知下一个舆情热点，防范舆情事件的发生，做好舆情管理工作。'
      ],
      contentData4: [
        {
          title: '- 综合管理平台',
          content: [
            '全域旅游资源监管数字化、可视化，客流导引、线路推荐、智能导',
            '航、服务评价。'
          ]
        },
        {
          title: '- 投诉快速响应平台',
          content: [
            '多渠道投诉，扫码投诉，多部门联合响应，进度可查、结果可评价。'
          ]
        },
        {
          title: '- 前端服务优化（APP、公众号）',
          content: [
            '景区介绍、精品路线、天气、电子客票、酒店、交通出行、咨询投',
            '诉、道路救援。'
          ]
        },
        {
          title: '- 舆情分析平台',
          content: ['舆情监测、预警，处理结果监测。']
        },
        {
          title: '- 应急管理平台',
          content: ['事件预警、处理跟踪、情况统计。']
        }
      ],
      title5: '高校舆情数据监控',
      url5: require('../assets/img/example_content5.png'),

      contentData5: [
        {
          title: '- 主动发现',
          content: ['在舆情或者言论刚刚出来的时候就能抓取和发现，主动出击。']
        },
        {
          title: '- 全面跟踪',
          content: ['根据用户的定义，持续跟踪和盯紧潜在风险事件的发展。']
        },
        {
          title: '- 发出预警',
          content: ['直观地反映事件的发展态势，必要时发出预警。']
        },
        {
          title: '- 事件分析',
          content: [
            '综合评判事件的性质，建立一个评估模型并抓住核心要素和问题根源。'
          ]
        },
        {
          title: '- 决策支持',
          content: ['为用户提供危机处理、品牌管理等优质数据源。']
        }
      ]
    }
  },
  components: {
    ExampleLeftRight,
    ExampleRightLeft
    // Footer
    // Head
  }
}
</script>

<style lang="less" scoped>
.example {
  // height: 100%;
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
    background: url("~_img/example_banner.png") no-repeat;
    background-size: 100% 100%;
    position: relative;
    // top: 72px;
    .big_title {
      position: absolute;
      top: 40%;
      left: 20%;
      text-align: center;

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
  .content_show {
    // margin-top: 75px;
    background-color: #fff;
  }
}
</style>
