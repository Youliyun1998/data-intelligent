<template>
  <div class="exampleEnviroment">
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">广铁集团数据治理与分析</p>
          <p class="sub_text">
            通过数据治理和创新应用，创新实现列车成本
          </p>
          <p class="sub_text">与效益的计算、预测。</p>
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
          铁路集团数据治理与数据分析
        </div>
        <div class="dataServe_subtitle">
          <p>
            统一数据管理，计算口径和取数来源。对数据进行多口径、多维度的宏观分析，最大化铁路集团数据资产价值。
          </p>
          <!-- <p>
            障水平明显提升。监测与监管协同联动，初步建成全市一体、上下协同、信息共享的生态环境监测网络。
          </p> -->
        </div>
        <div class="content_show">
          <div class="left">
            <img src="~_img/example_railway/content1.png" alt="" />
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="title">- 车站标识统一</div>
                <div class="subtitle">
                  完成全国8493个车站、运行铁路线上的站点7082个、运营中站点3596个的数据标准化治理。
                </div>
              </li>
              <li>
                <div class="title">- 指标标准化</div>
                <div class="subtitle">
                  利用标准化数据形成基础指标，以满足高效、多维的指标组合分析。
                </div>
              </li>
              <li>
                <div class="title">- 车次的成本、效益分析</div>
                <div class="subtitle">
                  精确分析每一车次成本、盈余、盈余平衡点、客座率等。
                </div>
              </li>
              <li>
                <div class="title">- 新开车次成本、效益预测分析</div>
                <div class="subtitle">
                  成本、效益趋势分析，判断新开车次可行性，提供科学决策依据。
                </div>
              </li>
              <li>
                <div class="title">- 交路明细分析</div>
                <div class="subtitle">
                  分析每个交路所有成本、效益数据，挖掘成本优化空间，优化成本效益。
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 数据治理 -->
    <div class="data_goven">
      <div class="data_goven_content wrap">
        <div class="title">数据治理</div>
        <div class="subtitle">
          统一数据管理，计算口径和取数来源。对数据进行多口径、多维度的宏观分析，最大化集团数据资产价值。
        </div>
        <div class="content">
          <!-- 内容项 -->
          <div class="first_item">
            <img src="~_img/example_railway/pic1.png" alt="" />
            <div class="title_t">数据引入</div>
            <div class="subtitle_s">数据采集、清洗、结构化与集成</div>
          </div>
          <div class="second_item">
            <img src="~_img/example_railway/pic2.png" alt="" />
            <div class="title_t">数据规范定义</div>
            <div class="subtitle_s">口径一致、算法一致、命名唯一</div>
          </div>
          <div class="big"></div>

          <div class="third_item">
            <img src="~_img/example_railway/pic3.png" alt="" />
            <div class="title_t">数据建模研发</div>
            <div class="subtitle_s">数据建模与代码开发</div>
          </div>
          <div class="four_item">
            <img src="~_img/example_railway/pic4.png" alt="" />
            <div class="title_t">数据连接萃取</div>
            <div class="subtitle_s">ID识别与标签画像生产</div>
          </div>

          <div class="five_item">
            <img src="~_img/example_railway/pic5.png" alt="" />
            <div class="title_t">运维调度</div>
            <div class="subtitle_s">作业运维、任务调度与监控报警</div>
          </div>
          <div class="six_item">
            <img src="~_img/example_railway/pic6.png" alt="" />
            <div class="title_t">数据资产管理</div>
            <div class="subtitle_s">
              数据资产概览、资产地图、资产治理、资产应用、资产运营等
            </div>
          </div>
          <div class="seven_item">
            <img src="~_img/example_railway/pic7.png" alt="" />
            <div class="title_t">数据主题式服务</div>
            <div class="subtitle_s">
              批量查询、即席多维分析与在线服务等，主题导向而非表导向
            </div>
          </div>
          <div class="eight_item">
            <img src="~_img/example_railway/pic8.png" alt="" />
            <div class="title_t">智能数仓规划</div>
            <div class="subtitle_s">
              逻辑空间与物理空间
            </div>
          </div>
          <!-- 箭头流向 -->
          <div class="row1">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row2">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row3">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row4">
            <img src="~_img/example_railway/down.png" alt="" />
          </div>
          <div class="row5">
            <img src="~_img/example_railway/top.png" alt="" />
          </div>
          <div class="row6">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row7">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row8">
            <img src="~_img/example_railway/right.png" alt="" />
          </div>
          <div class="row9">
            <img src="~_img/example_railway/top.png" alt="" />
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
    background: url("~_img/example_railway/banner.png") no-repeat;
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
          margin-bottom: 23px;
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
            width: 634px;
            height: 634px;
          }
        }
        .right {
          margin-left: 60px;
          ul {
            li {
              .title {
                // padding-top: 60px;
                font-size: 24px;
                font-weight: bold;
                color: #222222;
              }
              .subtitle {
                margin-top: 16px;
                margin-bottom: 48px;
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
  .data_goven {
    height: 900px;
    background: #f2f6ff;
    .data_goven_content {
      display: flex;
      flex-direction: column;
      align-items: center;

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
        width: 100%;
        position: relative;
        .first_item,
        .second_item,
        .third_item,
        .four_item,
        .five_item,
        .six_item,
        .seven_item,
        .eight_item {
          width: 201px;
          height: 176px;
          // padding: 0 30px;
          background: #e5e9f5;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 33px;
            height: 33px;
          }
          .title_t {
            color: #33384c;
            font-size: 22px;
            font-weight: bold;
            margin: 15px 0;
          }
          .subtitle_s {
            font-size: 16px;
            color: #75777d;
            padding: 0 35px;
            text-align: center;
          }
        }
        .big {
          width: 190px;
          height: 420px;
          border-radius: 10px;
          border: 2px dashed #979797;
          position: absolute;
          position: absolute;
          top: 55px;
          left: 510px;
        }
        .third_item,
        .four_item,
        .five_item {
          width: 174px;
        }
        .six_item,
        .seven_item {
          width: 206px;
          height: 228px;
        }
        .first_item {
          position: absolute;
          top: 166px;
        }
        .second_item {
          position: absolute;
          top: 166px;
          left: 250px;
        }
        .third_item {
          position: absolute;
          top: 65px;
          left: 520px;
        }
        .four_item {
          position: absolute;
          top: 290px;
          left: 520px;
        }
        .five_item {
          position: absolute;
          top: 530px;
          left: 520px;
        }
        .six_item {
          position: absolute;
          top: 166px;
          left: 750px;
        }
        .seven_item {
          position: absolute;
          top: 166px;
          left: 1020px;
        }
        .eight_item {
          position: absolute;
          top: 390px;
          // left: 1050px;
        }

        .row1 {
          position: absolute;
          top: 250px;
          left: 210px;
          img {
            width: 37px;
            height: 23px;
          }
        }
        .row2 {
          position: absolute;
          top: 300px;
          left: 470px;
          img {
            width: 37px;
            height: 23px;
          }
        }
        .row3 {
          position: absolute;
          top: 200px;
          left: 470px;
          img {
            width: 37px;
            height: 23px;
          }
        }
        .row4 {
          position: absolute;
          top: 250px;
          left: 595px;
          img {
            width: 21px;
            height: 34px;
          }
        }
        .row5 {
          position: absolute;
          top: 485px;
          left: 595px;
          img {
            width: 21px;
            height: 34px;
          }
        }
        .row6 {
          position: absolute;
          top: 200px;
          left: 710px;
          img {
            width: 34px;
            height: 21px;
          }
        }
        .row7 {
          position: absolute;
          top: 320px;
          left: 710px;
          img {
            width: 34px;
            height: 21px;
          }
        }
        .row8 {
          position: absolute;
          top: 270px;
          left: 970px;
          img {
            width: 34px;
            height: 21px;
          }
        }
        .row9 {
          position: absolute;
          top: 350px;
          left: 90px;
          img {
            width: 20px;
            height: 33px;
          }
        }
      }
    }
  }
}
</style>
