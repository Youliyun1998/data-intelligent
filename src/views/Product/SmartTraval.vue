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
          <p class="big_text">智慧「旅游」未来景区</p>
          <p class="sub_text">
            智慧旅游综合管理平台，助力旅游业科学发展
          </p>
          <!-- <div class="line">了解更多</div> -->
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
          全域旅游一体化建设及运营服务
        </div>
        <p>
          推动旅游景观全域优化、旅游服务全域配套、旅游治理全域覆盖、旅游质量全面提升、旅游产业全域联动和旅游成果全民共享
        </p>

        <div class="block">
          <div class="left">
            <div class="left_t">用户痛点</div>
            <div class="left_c">
              <ul>
                <li>
                  <div class="left_li"></div>
                  <div class="right_li">
                    <div class="top_title">职能管控</div>
                    <div class="bottom_content"><span>预警慢 反应慢</span></div>
                  </div>
                </li>
                <li>
                  <div class="left_li"></div>
                  <div class="right_li">
                    <div class="top_title">游客体验</div>
                    <div class="bottom_content"><span>体验差 投诉难</span></div>
                  </div>
                </li>
                <li>
                  <div class="left_li"></div>
                  <div class="right_li">
                    <div class="top_title">商户运营</div>
                    <div class="bottom_content"><span>收费乱 资源散</span></div>
                  </div>
                </li>
                <li>
                  <div class="left_li"></div>
                  <div class="right_li">
                    <div class="top_title">营销无序</div>
                    <div class="bottom_content"><span>营销差 资源散</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="right_t">解决方案</div>
            <div class="right_c">
              <div class="top_c">
                <div class="bigDiv_l">
                  <div class="bigtitle"><span>职能全管控</span></div>
                  <ul>
                    <li>
                      <div class="li_title"><span>应急管理平台</span></div>
                      <div class="li_content">时间预警、处理跟踪、情况统计</div>
                    </li>
                    <li>
                      <div class="li_title"><span>联合执法平台</span></div>
                      <div class="li_content">
                        执法过程记录、催办，执法数据分析
                      </div>
                    </li>
                    <li>
                      <div class="li_title"><span>舆情分析平台</span></div>
                      <div class="li_content">舆情监测、预警，处理结果监测</div>
                    </li>
                  </ul>
                </div>
                <div class="bigDiv_r">
                  <div class="bigtitle"><span>游客体验良好</span></div>
                  <ul>
                    <li>
                      <div class="li_title"><span>运营管理平台</span></div>
                      <div class="li_content">
                        客流引导、线路推荐、智能导航、服务评价
                      </div>
                    </li>
                    <li>
                      <div class="li_title"><span>投诉快速响应平台</span></div>
                      <div class="li_content">
                        多渠道投诉、扫码投诉、多部门联合响应
                      </div>
                    </li>
                    <li>
                      <div class="li_title">
                        <span>前端服务优化（APP、公众号）</span>
                      </div>
                      <div class="li_content">
                        景区介绍、精品路线、天气、电子客票、酒店、交通出行、咨询、投诉、道路救援
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bottom_c">
                <div class="bigDiv_l">
                  <div class="bigtitle"><span>商户运营规范</span></div>
                  <ul>
                    <li>
                      <div class="li_title"><span>市场监管平台</span></div>
                      <div class="li_content">服务监督、导游监管、价格监管</div>
                    </li>
                    <li>
                      <div class="li_title"><span>运营管理平台</span></div>
                      <div class="li_content">
                        旅游资源数字化、网格化
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="bigDiv_r">
                  <div class="bigtitle"><span>营销有序</span></div>
                  <ul>
                    <li>
                      <div class="li_title"><span>运营管理平台</span></div>
                      <div class="li_content">
                        营销效果数字化、可视化
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 联系方式 -->
    <div class="contact2">
      <div class="contact_content wrap">
        <div class="title">旅游大数据产业平台</div>
        <div class="title_detail">
          <p>
            通过对接旅游局的基础数据，整合本地通讯运营商优质数据，抓取互联网行业及舆情等定向数据，构建本地业界“一手和全面”的数据，
          </p>
          <p>
            掌控全局，通过数据挖据、分析和应用，全面支持政府和主管部门的决策支持、舆情监控、危机管理和行业监管等。
          </p>
        </div>
        <div class="map">
          <!-- <ul>
            <li></li>
            <li>
              <span>支持多种考勤方式</span>
            </li>
            <li><span>可视化数据报表</span></li>
            <li></li>
          </ul> -->
          <!-- <ServeRightLeft :contentData="contentData" :url="url" /> -->
          <!-- <img src="~_img/productTraval/content2_icon.png" alt="" /> -->
        </div>
      </div>
    </div>
    <div class="contact">
      <div class="contact_content wrap">
        <div class="title">一部手机游服务体系</div>
        <div class="title_detail">
          <p>
            一部手机游服务体系提供景区导览、精品路线、门票、酒店、美食、交通、厕所、医疗保障、道路救援、特色产品，电子支付、评价体
          </p>
          <p>系、咨询投诉、公共服务一体化。</p>
        </div>
        <div class="map">
          <!-- <ul>
            <li v-for="(v, i) in smartGovenData" :key="i">
              <div class="img"></div>
              <div class="text">{{ v }}</div>
            </li>
          </ul> -->
          <!-- <ServeRightLeft :contentData="contentData" :url="url" /> -->
          <!-- <img src="~_img/productTraval/content3_icon.png" alt="" /> -->
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
// import ServeRightLeft from '_c/ServeRightLeft.vue'
export default {
  data () {
    return {
      smartGovenData: ['智能商户管理', '智能缴费管理', '智能运营中心'],
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

      enData: ['智能门禁', '智能停车', '智能访客'],
      enDataDetail: [
        ' 咨询规划、数据服务、应用开发、技术支撑等全流程服务。',
        ' 数据中台、数据建模、智慧灯杆、智慧环保、智慧园区、智慧旅游、云物管等。',
        '  科研、政府和企业的数据治理、数据挖掘与分析，智能应用开发等项目规划和实施'
      ]
    }
  },
  components: {
    // ServeRightLeft
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
    position: relative;
    // top: 75px;
    height: 830px;
    background: url("~_img/productTraval/banner.png") no-repeat;
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
    // height: 900px;
    margin-bottom: 56px;
    background: #fff;
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
      margin-top: 56px;
      display: flex;
      .left {
        width: 305px;
        height: 664px;

        background: #f8faff;
        border-radius: 4px;
        border: 1px solid #e3e6ef;
        margin-right: 20px;
        padding: 20px;
        .left_t {
          padding: 0 20px 20px 20px;
          color: #171a25;
          font-size: 26px;
          font-weight: bold;
          text-align: center;
          border-bottom: 1px solid #e3e6ef;
        }
        .left_c {
          ul {
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            li {
              height: 150px;
              display: flex;
              .left_li {
                width: 57px;
                height: 76px;
                background: url("~_img/productTraval/icon.png") no-repeat;
                background-size: 100% 100%;
                margin-right: 30px;
              }

              .right_li {
                .top_title {
                  color: #171a25;
                  font-size: 18px;
                  font-weight: 600;
                }
                .bottom_content {
                  margin-top: 14px;

                  span {
                    display: flex;
                    align-items: center;
                    &::before {
                      content: "";
                      display: block;
                      width: 8px;
                      height: 8px;
                      background: #ce6d6d;
                      border-radius: 50%;
                      margin-right: 10px;
                    }
                  }
                }
              }
              &:nth-child(2) {
                .left_li {
                  background: url("~_img/productTraval/icon2.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
              &:nth-child(3) {
                .left_li {
                  background: url("~_img/productTraval/icon3.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
              &:nth-child(4) {
                .left_li {
                  background: url("~_img/productTraval/icon4.png") no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
          }
        }
      }
      .right {
        width: 875px;
        height: 664px;
        background: #f8faff;
        border-radius: 4px;
        border: 1px solid #e3e6ef;
        padding: 20px;
        .right_t {
          padding: 0 20px 20px 20px;
          color: #171a25;
          font-size: 26px;
          font-weight: bold;
          text-align: center;
          border-bottom: 1px solid #e3e6ef;
        }
        .right_c {
          .top_c {
            margin-top: 30px;
            display: flex;
            padding: 0 60px;
            border-bottom: 1px solid #e3e6ef;

            .bigDiv_l {
              flex: 1;
              border-right: 1px solid #e3e6ef;

              .bigtitle {
                margin-bottom: 20px;
                span {
                  display: flex;
                  align-items: center;
                  font-weight: bold;
                  color: #171a25;
                  font-size: 24px;
                  &::before {
                    content: "";
                    display: block;
                    width: 22px;
                    height: 26px;
                    background: url("~_img/productTraval/pic1.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 10px;
                  }
                }
              }
              ul {
                li {
                  height: 90px;
                  padding-left: 15px;
                  .li_title {
                    span {
                      color: #171a25;
                      font-size: 18px;
                      display: flex;
                      align-items: center;
                      &::before {
                        content: "";
                        display: block;
                        width: 6px;
                        height: 6px;
                        background-color: #6dce7f;
                        border-radius: 50%;
                        margin-right: 10px;
                      }
                    }
                  }
                  .li_content {
                    padding-top: 10px;
                    padding-left: 15px;
                    color: #33384c;
                    font-size: 14px;
                  }
                }
              }
            }
            .bigDiv_r {
              flex: 1;
              padding-left: 30px;
              .bigtitle {
                margin-bottom: 20px;
                span {
                  display: flex;
                  align-items: center;
                  font-weight: bold;
                  color: #171a25;
                  font-size: 24px;
                  &::before {
                    content: "";
                    display: block;
                    width: 27px;
                    height: 24px;
                    background: url("~_img/productTraval/pic2.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 10px;
                  }
                }
              }
              ul {
                li {
                  height: 90px;
                  padding-left: 25px;
                  .li_title {
                    span {
                      color: #171a25;
                      font-size: 18px;
                      display: flex;
                      align-items: center;
                      &::before {
                        content: "";
                        display: block;
                        width: 6px;
                        height: 6px;
                        background-color: #6dce7f;
                        border-radius: 50%;
                        margin-right: 10px;
                      }
                    }
                  }
                  .li_content {
                     padding-top: 10px;
                    padding-left: 15px;
                    color: #33384c;
                    font-size: 14px;
                  }
                }
              }
            }
          }
          .bottom_c {
            display: flex;
            padding: 0 60px;

            .bigDiv_l {
              flex: 1;
              border-right: 1px solid #e3e6ef;
              .bigtitle {
                margin-bottom: 30px;
                span {
                  padding-top: 20px;
                  display: flex;
                  align-items: center;
                  font-weight: bold;
                  color: #171a25;
                  font-size: 24px;
                  &::before {
                    content: "";
                    display: block;
                    width: 25px;
                    height: 26px;
                    background: url("~_img/productTraval/pic3.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 10px;
                  }
                }
              }
              ul {
                li {
                  height: 80px;
                  padding-left: 20px;
                  .li_title {
                    span {
                      color: #171a25;
                      font-size: 18px;
                      display: flex;
                      align-items: center;
                      &::before {
                        content: "";
                        display: block;
                        width: 6px;
                        height: 6px;
                        background-color: #6dce7f;
                        border-radius: 50%;
                        margin-right: 10px;
                      }
                    }
                  }
                  .li_content {
                   padding-top: 10px;
                    padding-left: 15px;
                    color: #33384c;
                    font-size: 14px;
                  }
                }
              }
            }
            .bigDiv_r {
              flex: 1;
              padding-left: 30px;
              .bigtitle {
                margin-bottom: 30px;
                span {
                  padding-top: 20px;
                  display: flex;
                  align-items: center;
                  font-weight: bold;
                  color: #171a25;
                  font-size: 24px;
                  &::before {
                    content: "";
                    display: block;
                    width: 29px;
                    height: 25px;
                    background: url("~_img/productTraval/pic4.png") no-repeat;
                    background-size: 100% 100%;
                    margin-right: 10px;
                  }
                }
              }
              ul {
                li {
                  padding-left: 25px;
                  .li_title {
                    span {
                      color: #171a25;
                      font-size: 18px;
                      display: flex;
                      align-items: center;
                      &::before {
                        content: "";
                        display: block;
                        width: 6px;
                        height: 6px;
                        background-color: #6dce7f;
                        border-radius: 50%;
                        margin-right: 10px;
                      }
                    }
                  }
                  .li_content {
                    padding-top: 10px;
                    padding-left: 15px;
                    color: #33384c;
                    font-size: 14px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .contact {
    height: 900px;
    // background: #fff;
    background: url("~_img/productTraval/content3_icon.png") no-repeat;
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
        // padding: 28px 0;
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
        height: 900px;

        // width: 100%;
        // height: 900px;
        display: flex;
        justify-content: center;
        // /deep/.content2 {
        //   padding-top: 0;
        //   display: flex;
        //   justify-content: space-between;
        //   .left {
        //     padding-top: 40px;
        //     .title {
        //       display: none;
        //     }
        //   }
        //   .right {
        //     img {
        //       width: 524px;
        //       height: 540px;
        //     }
        //   }
        // }
        img {
          width: 654px;
          height: 598px;
        }
        ul {
          display: flex;
          width: 100%;
          height: 100%;
          // &:first-child {
          //   display: flex;
          //   align-items: flex-start;
          // }
          // &:nth-child(2) {
          //   align-items: flex-end;
          // }
          // &:nth-child(3) {
          //   display: flex;
          //   align-items: flex-start;
          // }

          li {
            flex: 1;
            height: 450px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &:first-child {
              .img {
                width: 100%;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon1.png")
                  no-repeat;
                background-size: 100% 100%;
              }
              .text {
              }
            }
            &:nth-child(2) {
              display: flex;
              .img {
                width: 100%;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon2.png")
                  no-repeat;
                background-size: 100% 100%;
              }
              .text {
              }
            }
            &:nth-child(3) {
              .img {
                width: 100%;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon3.png")
                  no-repeat;
                background-size: 100% 100%;
              }
              .text {
              }
            }
          }
        }
      }
    }
  }
  .contact2 {
    height: 900px;
    background: url("~_img/productTraval/content2_icon.png") no-repeat;
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
        // padding: 28px 0;
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
        height: 900px;
        width: 100%;
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
