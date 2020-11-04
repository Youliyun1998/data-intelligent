<template>
  <div class="exampleEnviroment">
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">旅游产业大数据中心</p>
          <p class="sub_text">
            建设梅州旅游的“五个一”特色建设，为梅州市发展全域
          </p>
          <p class="sub_text">旅游打下坚实基础。</p>
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
    <div class="userCenter_dataServe">
      <div class="dataServe_content wrap">
        <div class="dataServe_title">
          旅游产业大数据中心
        </div>
        <div class="dataServe_subtitle">
          <p>
            对接运营商数据、景区设备数据，抓取互联网行业及舆情数据，构建梅州旅游产业“一手和全面”的数据，掌控全局，
          </p>
          <p>
            通过数据挖据、分析和应用，全面支持政府和主管部门的决策支持、舆情监控、危机管理和行业监管等。
          </p>
        </div>
        <div class="content_show">
          <div class="left">
            <img src="~_img/example_traval/content1.png" alt="" />
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="title">-综合管理平台</div>
                <div class="subtitle">
                  全域旅游资源监管数字化、可视化，客流导引、线路推荐、
                  智能导航、服务评价
                </div>
              </li>
              <li>
                <div class="title">-投诉快速响应平台</div>
                <div class="subtitle">
                  多渠道投诉，扫码投诉，多部门联合响应，进度可查、结果 可评价
                </div>
              </li>
              <li>
                <div class="title">-一部手机游（APP、公众号、小程序）</div>
                <div class="subtitle">
                  景区介绍、精品路线、天气、电子客票、酒店、交通出行、
                  咨询投诉、道路救援
                </div>
              </li>
              <li>
                <div class="title">-舆情分析平台</div>
                <div class="subtitle">
                  舆情监测、预警，处理结果监测
                </div>
              </li>
              <li>
                <div class="title">-应急管理平台</div>
                <div class="subtitle">
                  事件预警、处理跟踪、情况统计
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 海关风险防控模型体系 -->
    <div class="customs_risk">
      <div class="customs_risk_content">
        <div class="title">旅游产业资源全覆盖</div>
        <div class="subtitle">
          资源指标支撑对所有旅游资源、交通、天气和客流等进行数据化、一体化管控
        </div>
        <div class="content">
          <div class="first_item">
            <img src="~_img/example_traval/icon1.png" alt="" />
            <div class="title_text">资源</div>
            <div class="text">
              涉旅企业<br />
              征信模块
            </div>
            <div class="text2">
              <div class="text_left">
                游客<br />
                征信
              </div>
              <div class="text_right">
                舆情<br />
                分析
              </div>
            </div>
            <div class="text">
              导游领队<br />

              征信模块
            </div>
          </div>
          <div class="second_item">
            <img src="~_img/example_traval/icon2.png" alt="" />
            <div class="title_text">监测</div>
            <div class="text2">
              <div class="text_left">
                征信<br />
                查询
              </div>
              <div class="text_right">
                景区入<br />
                园监测
              </div>
            </div>
            <div class="text">
              景区、游客黑名单
            </div>
            <div class="text2">
              <div class="text_left">
                人流 <br />
                监测
              </div>
              <div class="text_right">
                GIS<br />
                信息
              </div>
            </div>
          </div>
          <div class="third_item">
            <img src="~_img/example_traval/icon3.png" alt="" />
            <div class="title_text">天气</div>
            <div class="contentbox">
              <div class="topbox">
                在线<br />
                OTA票务<br />
                数据监测
              </div>
              <div class="bottombox">天气 <br />预警</div>
            </div>
          </div>
          <div class="four_item">
            <img src="~_img/example_traval/icon4.png" alt="" />
            <div class="title_text">预警</div>
            <div class="text2">
              <div class="text_left">
                停车场<br />
                预警
              </div>
              <div class="text_right">
                客流<br />
                预警
              </div>
            </div>
            <div class="text">
              商户视频监控
            </div>
            <div class="text2">
              <div class="text_left">
                视频 <br />
                电话
              </div>
              <div class="text_right">
                GPS<br />
                轨迹
              </div>
            </div>
            <div class="text">
              应急情况统计
            </div>
          </div>
          <div class="five_item">
            <img src="~_img/example_traval/icon5.png" alt="" />
            <div class="title_text">统计</div>
            <div class="bigbox">
              <div class="top_box">
                <div class="leftbox">
                  <div class="leftbox_top">
                    投诉统计
                  </div>
                  <div class="leftbox_bottom">
                    <div class="bottom_l">
                      物价<br />
                      分析
                    </div>
                    <div class="bottom_r">客源 <br />分析</div>
                  </div>
                </div>
                <div class="rightbox">
                  旅游<br />
                  知识库 <br />统计
                </div>
              </div>
              <div class="bottom_box">
                <div class="topbox">
                  <div class="topbox_l">
                    交通<br />
                    分析
                  </div>
                  <div class="topbox_r">
                    商户运营情况
                  </div>
                </div>
                <div class="bottombox">
                  <div class="bottombox_l">
                    商户<br />
                    统计
                  </div>
                  <div class="bottombox_c">
                    导游<br />
                    统计
                  </div>
                  <div class="bottombox_r">
                    营销<br />
                    分析
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import ExampleRightLeft from "_c/ExampleRightLeft";
export default {
  data () {
    return {}
  }
  // components: { ExampleRightLeft }
}
</script>

<style lang="less" scoped>
.exampleEnviroment {
  height: 100%;
  // background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
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
    background: url("~_img/example_traval/banner.png") no-repeat;
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
          margin-bottom: 16px;
        }
        .sub_text {
          font-size: 24px;
          color: #fff;
          &:nth-child(3) {
            margin-bottom: 60px;
          }
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
  .userCenter_dataServe {
    background-color: #fff;
    // margin-top: 70px;
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
      .content_show {
        margin-top: 77px;
        display: flex;
        justify-content: space-between;
        .left {
          img {
            width: 635px;
            height: 634px;
          }
        }
        .right {
          margin-left: 60px;
          ul {
            li {
              .title {
                padding-top: 42px;
                font-size: 24px;
                font-weight: bold;
                color: #222222;
              }
              .subtitle {
                margin-top: 16px;
                // margin-bottom: 48px;
                margin-right: 100px;
                color: #75777d;
                font-size: 16px;
              }
              &:first-child {
                .title {
                  padding-top: 0;
                }
              }
            }
          }
        }
      }
    }
  }
  .customs_risk {
    height: 900px;
    background: url("~_img/example_traval/content2_bg.png") no-repeat;
    background-size: 100% 100%;
    .customs_risk_content {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      text-align: center;

      .title {
        padding-top: 43px;
        padding-bottom: 30px;
        font-weight: bold;
        font-size: 30px;
        color: #171a25;
      }
      .subtitle {
        font-size: 20px;
        color: #75777d;
      }
      .content {
        margin-top: 77px;
        display: flex;
        justify-content: center;
        // margin-top: 130px;
        .first_item,
        .second_item,
        .four_item {
          width: 265px;
          padding: 0 5px;
          height: 598px;
          margin-right: 10px;
          background: #fcfdff;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #069df9;
          // justify-content: center;
          img {
            margin-top: 50px;
            width: 53px;
            height: 54px;
          }
          .title_text {
            margin-top: 20px;
            // color: #069df9;
            font-size: 22.8px;
            margin-bottom: 40px;
          }
          .text {
            width: 251px;
            height: 123px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #e5f9ff;
            border-radius: 16px;
            font-size: 20px;
            margin-bottom: 10px;
            // color: #069df9;
          }
          .text2 {
            margin-bottom: 10px;
            display: flex;

            .text_left {
              width: 121px;
              height: 121px;
              // color: #069df9;
              background: #e5f9ff;
              border-radius: 16px;
              font-size: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 10px;
            }
            .text_right {
              width: 121px;
              height: 121px;
              // color: #069df9;
              background: #e5f9ff;
              border-radius: 16px;
              font-size: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          }
        }
        .second_item {
          width: 272px;
          color: #51c7a7;
        }
        .third_item {
          width: 135px;
          height: 598px;
          padding: 0 5px;
          background: #fcfdff;
          border-radius: 8px;
          color: #069df9;
          margin-right: 10px;

          img {
            margin-top: 50px;
            width: 53px;
            height: 54px;
          }
          .title_text {
            margin-top: 20px;
            // color: #069df9;
            font-size: 22.8px;
            margin-bottom: 40px;
          }
          .contentbox {
            display: flex;
            flex-direction: column;
            align-items: center;
            // justify-content: center;

            .topbox {
              width: 122px;
              height: 258px;
              background-color: #e5f9ff;
              border-radius: 16px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .bottombox {
              margin-top: 10px;
              display: flex;
              justify-content: center;
              align-items: center;
              width: 123px;
              height: 123px;
              border-radius: 16px;
              background-color: #e5f9ff;
            }
          }
        }
        .four_item {
          width: 287px;
          color: #51c7a7;

          .text2 {
            .text_left {
              width: 130px;
              height: 92px;
            }
            .text_right {
              width: 130px;
              height: 92px;
            }
          }
          .text {
            width: 274px;
          }
        }
        .five_item {
          width: 409px;
          // height: 598px;
          background: #fcfdff;
          border-radius: 8px;
          color: #ef9c30;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          img {
            margin-top: 55px;
            width: 59px;
            height: 53px;
          }
          .title_text {
            margin-top: 20px;
            font-size: 23px;
          }
          .bigbox {
            margin-top: 40px;
            .top_box {
              display: flex;
              .leftbox {
                margin-right: 10px;
                .leftbox_top {
                  width: 259px;
                  height: 92px;
                  background-color: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .leftbox_bottom {
                  display: flex;
                  justify-content: center;
                  margin-top: 10px;
                  .bottom_l {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 116px;
                    height: 88px;
                    border-radius: 16px;
                    background-color: #fff5ea;
                    margin-right: 10px;
                  }
                  .bottom_r {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 116px;
                    height: 88px;
                    border-radius: 16px;
                    background-color: #fff5ea;
                  }
                }
              }
              .rightbox {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 118px;
                height: 188px;
                border-radius: 16px;
                background: #fff5ea;
              }
            }
            .bottom_box {
              .topbox {
                margin-top: 10px;
                display: flex;
                .topbox_l {
                  width: 116px;
                  height: 92px;
                  background-color: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-right: 10px;
                }
                .topbox_r {
                  width: 262px;
                  height: 92px;
                  background-color: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
              .bottombox {
                display: flex;
                .bottombox_l {
                  width: 116px;
                  height: 92px;
                  background-color: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin-top: 10px;
                }
                .bottombox_c {
                  width: 131px;
                  height: 92px;
                  background: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  margin: 10px;
                }
                .bottombox_r {
                  margin-top: 10px;
                  width: 116px;
                  height: 92px;
                  background-color: #fff5ea;
                  border-radius: 16px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
