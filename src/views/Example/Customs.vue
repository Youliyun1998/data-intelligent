<template>
  <div class="exampleEnviroment">
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">海关大数据风险防控</p>
          <p class="sub_text">
            打造专业的海关业务大数据风险防控平台
          </p>
          <!-- <p class="sub_text">与效益的计算、预测。</p> -->
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
          海关大数据风险防控
        </div>
        <div class="dataServe_subtitle">
          <p>
            打造专业的海关业务大数据风险防控平台，建立风险防控数据模型体系，为海关业务的风控防控提供了有力支撑。
          </p>
          <!-- <p>
            障水平明显提升。监测与监管协同联动，初步建成全市一体、上下协同、信息共享的生态环境监测网络。
          </p> -->
        </div>
        <div class="content_show">
          <div class="left">
            <img src="~_img/example_customs/content1.png" alt="" />
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="title">- 核查自动化</div>
                <div class="subtitle">
                  构建数据模型代替人工核查报关单，解决人手不足的问题。
                </div>
              </li>
              <li>
                <div class="title">- 客观评估</div>
                <div class="subtitle">
                  通过数据分析模型，客观评估业务风险。
                </div>
              </li>
              <li>
                <div class="title">- 风险挖掘</div>
                <div class="subtitle">
                  通过数据挖掘，发现隐藏风险点。
                </div>
              </li>
              <li>
                <div class="title">- 风险画像</div>
                <div class="subtitle">
                  构建风险画像，推测关区风险系数。
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 海关风险防控模型体系 -->
    <div class="customs_risk">
      <div class="customs_risk_content wrap">
        <div class="title">海关风险防控模型体系</div>
        <div class="subtitle">
          大数据专业分析团队，助力海关快速构建关区本地风控模型体系
        </div>
        <div class="content">
          <div class="left_content">
            <ul>
              <li>
                <div class="left_title">货物报关单风险模型</div>
                <div class="left_subtitle">
                  （知识产权风险模型体系、口岸新增企业风险模型体系）
                </div>
              </li>
              <li>
                <div class="left_title">个性化风险模型</div>
                <!-- <div class="left_subtitle">（（知识产权风险模型体系、口岸新增企业风险模型体系）</div> -->
              </li>
              <li>
                <div class="left_title">跨境电商风险模型</div>
                <div class="left_subtitle">
                  （商品产销地风险模型体系、身份证使用风险模型体系）
                </div>
              </li>
            </ul>
          </div>
          <div class="center_content">
            <div class="text">专家团队</div>
          </div>
          <div class="right_content">
            <ul>
              <li>
                <div class="right_title">舱单风险模型</div>
                <div class="right_subtitle">
                  （港口风险模型体系、集装箱 物流风险模型体系）
                </div>
              </li>
              <li>
                <div class="right_title">邮件风险模型</div>
                <div class="right_subtitle">
                  （邮件异常模型体系、原寄局风险模型体系）
                </div>
              </li>
              <li>
                <div class="right_title">快件风险模型</div>
                <div class="right_subtitle">
                  （收发货人信息风险模型体系、收发货企业风险模型体系）
                </div>
              </li>
            </ul>
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
    background: url("~_img/example_customs/banner.png") no-repeat;
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

          margin-bottom: 60px;
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
                padding-top: 60px;
                font-size: 24px;
                font-weight: bold;
                color: #222222;
              }
              .subtitle {
                margin-top: 16px;
                // margin-bottom: 48px;
                margin-right: 10px;
                color: #75777d;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  .customs_risk {
    height: 900px;
    background: url("~_img/example_customs/content2.png") no-repeat;
    background-size: 100% 100%;
    .customs_risk_content {
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      text-align: center;

      .title {
        // padding: 40px 0;
        padding-top: 40px;
        padding-bottom: 20px;
        font-weight: bold;
        font-size: 30px;
        color: #171a25;
      }
      .subtitle {
        font-size: 20px;
        color: #75777d;
      }
      .content {
        display: flex;
        justify-content: center;
        margin-top: 150px;

        .left_content {
          // padding-left: 30px;
          flex: 1;
          // width: 300px;
          ul {
            li {
              width: 300px;
              text-align: right;
              .left_title {
                color: #33384c;
                font-size: 24px;
                font-weight: bold;
              }
              .left_subtitle {
                margin-top: 10px;
                color: #75777d;
                font-size: 20px;
                margin-bottom: 115px;
              }
              &:nth-child(3) {
                .left_title {
                  margin-top: 138px;
                }
              }
            }
          }
        }
        .center_content {
          width: 100%;
          margin-top: 230px;
          // margin-left: 300px;
          font-size: 30px;
          color: #fff;
          font-weight: bold;
          margin-left: 28px;
          // margin-right: 80px;

          display: flex;
          justify-content: center;
          // align-items: center;
          .text {
            // display: flex;
            // justify-content: center;
            // width: 250px;
          }
        }
        .right_content {
          // flex: 1;

          ul {
            // margin-right: 60px;
            li {
              // padding-left: 60px;
              width: 320px;
              text-align: left;

              .right_title {
                color: #33384c;
                font-size: 24px;
                font-weight: bold;
                margin-left: 20px;
              }
              .right_subtitle {
                  margin-left: 20px;
                color: #75777d;
                font-size: 20px;
                margin-top: 10px;
                // margin-bottom: 120px;
              }
              &:nth-child(2) {
                .right_title {
                  margin-top: 115px;
                }
              }
              &:nth-child(3) {
                .right_title {
                  margin-top: 80px;
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
