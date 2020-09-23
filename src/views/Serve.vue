<template>
  <div class="serve">
    <!-- <Head /> -->
    <!-- <full-page :options="options" ref="page"> -->
      <!--      第一屏-->
      <!-- <div class="section"> -->
        <!-- <div class="box1"> -->
          <!-- <div class="slide"> -->
            <!-- banner -->
            <div class="banner">
              <div class="left_text wrap">
                <div class="left_text_l">
                  <p class="big_text">数据可视化</p>
                  <p class="sub_text">
                    数据可视化平台提供所见即所得的配置方式，
                  </p>
                  <p class="sub_text">帮助用户快速建立专业的数据大屏。</p>
                  <div class="line"></div>
                </div>
              </div>
            </div>
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
      <!--      第二屏-->
      <!-- <div class="section"> -->
        <!-- <div class="box2"> -->
          <!-- 内容呈现区 -->
          <div class="content_show">
            <ServeLeftRight
              :contentData="contentData"
              :title="title1"
              :url="url1"
            />
          </div>
        <!-- </div> -->
      <!-- </div> -->
      <!--      第三屏-->
      <!-- <div class="section"> -->
        <!-- <div class="box1"> -->
          <!-- <div class="slide"> -->
            <div class="content_show">
              <ServeRightLeft
                :contentData="contentData2"
                :title="title2"
                :url="url2"
              />
            </div>
          <!-- </div> -->
        <!-- </div> -->
      <!-- </div> -->
      <!--      第四屏-->
      <!-- <div class="section"> -->
        <!-- <div class="box2"> -->
          <div class="content_show">
            <ServeLeftRight
              :contentData="contentData3"
              :title="title3"
              :url="url3"
            />
          </div>
        <!-- </div> -->
      <!-- </div> -->
      <!-- 第五屏 -->
      <!-- <div class="section"> -->
        <!-- <div class="box3"> -->
          <div class="content_show">
            <ServeRightLeft
              :contentData="contentData4"
              :title="title4"
              :url="url2"
            />
          </div>
        <!-- </div> -->
      <!-- </div> -->
      <!-- 第六屏 -->
      <!-- <div class="section"> -->
        <!-- <div class="box3"> -->
          <div class="content_show">
            <ServeLeftRight
              :contentData="contentData5"
              :title="title5"
              :url="url4"
            />
          </div>
          <!-- <Footer /> -->
        <!-- </div> -->
      <!-- </div> -->
    <!-- </full-page> -->
  </div>
</template>

<script>
// import Head from '_c/Head.vue'
// import Footer from '_c/Footer'
import ServeRightLeft from '_c/ServeRightLeft'
import ServeLeftRight from '_c/ServeLeftRight'
export default {
  name: 'serve',
  components: {
    ServeLeftRight,
    ServeRightLeft
    // Footer
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
      url1: require('../assets/img/serve_content1.png'),
      url2: require('../assets/img/serve_content2.png'),
      url3: require('../assets/img/serve_content3.png'),
      url4: require('../assets/img/serve_content4.png'),

      title1: '数据采集，数据分析的起点',
      title2: '数据治理，更高效地将数据转化成业务价值',
      title3: '数据建模，为数据分析插上想象的翅膀',
      title4: '数据可视化，让用户更好的使用数据',
      title5: '智能应用，突破现状的金钥匙',
      contentData: [
        {
          title: '- 客户端（前端）',
          content: [
            '支持 iOS、安卓、Web／H5、微信小程序等多种数据源的数据采集。'
          ]
        },
        {
          title: '- 服务器日志',
          content: [
            '采集后端业务服务器打印的日志。更强的采集能力，更好的支撑精细',
            '化分析场景。'
          ]
        },
        {
          title: '- 业务数据库',
          content: [
            '采集存储在各个关系型数据库中的业务数据。让用户行为数据与业务',
            '数据结合，满足复杂分析场景。'
          ]
        },
        {
          title: '- 历史数据',
          content: ['支持历史数据一次性导入，激活过往数据，挖掘潜在价值。']
        },
        {
          title: '- 第三方数据',
          content: [
            '对接 CRM、ERP、客服、物流等第三方系统数据，实现一个平台上，',
            '多维度、多部门的数据分析需求。'
          ]
        }
      ],
      contentData2: [
        {
          title: '- 资源接入体系',
          content: ['构筑适配灵活、标准化、模块化的多源异构数据资源接入体系。']
        },
        {
          title: '- 数据处理体系',
          content: ['建设规范化、流程化、智能化的数据处理体系。']
        },
        {
          title: '- 数据资源体系',
          content: ['打造数据精细化治理体系、组织的数据资源融合分类体系。']
        },
        {
          title: '- 数据共享体系',
          content: ['构建统一调度、精准服务、安全可用的信息共享服务体系。']
        }
      ],
      contentData3: [
        {
          title: '- 自带模型库',
          content: ['用户可以简单操作完成分析任务。']
        },
        {
          title: '- 高级模式',
          content: ['支持复杂、多维综合分析需求。']
        },
        {
          title: '- 模型的全生命周期管理',
          content: ['打造数据精细化治理体系、组织的数据资源融合分类体系。']
        },
        {
          title: '- 模型调度',
          content: ['资源、时间等系统管控。']
        },
        {
          title: '- 监控分析',
          content: ['模型资源分配、全程监控分析。']
        }
      ],
      contentData4: [
        {
          title: '- 专业级大数据可视化',
          content: [
            '专精于地理信息与业务数据融合的可视化，提供丰富的行业模版和交',
            '互组件，支持自定义组件接入。'
          ]
        },
        {
          title: '- 多种数据源支持',
          content: [
            '支持接入主流的各种数据源，关系型数据库、本地CSV上传和在线API',
            '等，支持动态请求。'
          ]
        },
        {
          title: '- 图形化编辑界面',
          content: [
            '拖拽即可完成样式和数据配置，无需编程就能轻松搭建数据大屏。'
          ]
        },
        {
          title: '- 灵活部署和发布',
          content: ['适配非常规拼接大屏，支持加密发布，支持本地部署。']
        }
      ],
      contentData5: [
        {
          title: '- 创新小组',
          content: [
            '由丰富行业经验的技术专家与用户组成创新小组，共同探讨突破方向。'
          ]
        },
        {
          title: '- 行业专注',
          content: [
            '技术团队专注于风控、电力、环保、旅游主营行业，精益求精。'
          ]
        },
        {
          title: '- 业务数据库',
          content: [
            '从数据采集、数据治理、数据分析到应用交付，环环相扣、步步推进。'
          ]
        },
        {
          title: '- 历史数据',
          content: ['从任务开始到成果交付全流程跟踪效果，创新项目可管可控。']
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.serve {
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
    background: url("~_img/banner2.png") no-repeat;
    background-size: 100% 100%;
    .left_text {
      .left_text_l {
        position: absolute;
        top: 30%;

        .big_text {
          font-size: 50px;
          font-weight: bold;
          color: #171a25;
        }
        .sub_text {
          font-size: 30px;
          color: #75777d;
          &:nth-child(2) {
            margin-top: 16px;
          }
        }
        .line {
          margin-top: 40px;
          width: 110px;
          height: 10px;
          background: #3e6eff;
          border-radius: 3px;
        }
      }
    }
  }
  .content_show {
    height: 900px;
    // margin-top: 75px;
    background-color: #fff;
  }
}
</style>
