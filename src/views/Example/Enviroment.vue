<template>
  <div class="exampleEnviroment">
    <div class="banner">
      <div class="left_text wrap">
        <div class="left_text_l">
          <p class="big_text">大气污染防治综合管理平台</p>
          <p class="sub_text">
            围绕东莞市蓝天保卫战信息化建设展开，通过构建大气
          </p>
          <p class="sub_text">污染防治专题数据应用，助力蓝天保卫战。</p>
          <div class="line">了解更多</div>
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
          大气环境综合防治大数据中心
        </div>
        <div class="dataServe_subtitle">
          <p>
            实现东莞市大气环境质量、重点污染源、生态状况监测全覆盖。各级各类监测数据系统互联共享，监测预报报警、信息化能力和保
          </p>
          <p>
            障水平明显提升。监测与监管协同联动，初步建成全市一体、上下协同、信息共享的生态环境监测网络。
          </p>
        </div>
        <div class="content_show">
          <div class="left">
            <img src="~_img/example_enviroment/content1.png" alt="" />
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="title">-精准监测</div>
                <div class="subtitle">
                  国控、省站、市站、超级站、微站、走航监测一体化监测
                </div>
              </li>
              <li>
                <div class="title">-数据融合</div>
                <div class="subtitle">全业务、全渠道业务数据融合分析</div>
              </li>
              <li>
                <div class="title">-及时预警</div>
                <div class="subtitle">监测站点实施告警、污染天气预报告警</div>
              </li>
              <li>
                <div class="title">-协同治理</div>
                <div class="subtitle">
                  督察督办任务的分拆、任务分发、执行计划、过程反馈、
                  完成情况等全过程反馈
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 项目亮点 -->
    <div class="program_light">
      <div class="program_light_content wrap">
        <span> 项目亮点</span>
        <img src="~_img/example_enviroment/content2_pic1.png" alt="" />
        <ul>
          <li>
            <img src="~_img/example_enviroment/content2_pic2.png" alt="" />
            <div class="title">海量数据</div>
            <div class="underline"></div>
            <div class="text">过往3年数以亿计的监控数据 千万级日增数据</div>
          </li>
          <li>
            <img src="~_img/example_enviroment/content2_pic3.png" alt="" />
            <div class="title">全系统连通</div>
            <div class="underline"></div>
            <div class="text">打通所有业务系统 数据融合分析</div>
          </li>
          <li>
            <img src="~_img/example_enviroment/content2_pic4.png" alt="" />
            <div class="title">全渠道数据整合</div>
            <div class="underline"></div>
            <div class="text">预报数据、监测数据、 企业数据、模型数据</div>
          </li>
          <li>
            <img src="~_img/example_enviroment/content2_pic5.png" alt="" />
            <div class="title">业务闭环</div>
            <div class="underline"></div>
            <div class="text">监测、预警、执法、研判</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 应用架构 -->
    <div class="application">
      <div class="application_content wrap">
        <div class="title">应用架构</div>
        <img src="~_img/example_enviroment/content3.png" alt="" />
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
    background: url("~_img/example_enviroment/banner.png") no-repeat;
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
            width: 636px;
            height: 635px;
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
                margin-top: 10px;
                color: #6d7078;
                font-size: 20px;
              }
            }
          }
        }
      }
    }
  }
  .program_light {
    height: 900px;
    background: url("~_img/example_enviroment/content2_bg.png") no-repeat;
    background-size: 100% 100%;
    .program_light_content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 77px 0;
      span {
        color: #171a25;
        font-size: 30px;
      }
      img {
        margin-top: 72px;
        width: 33px;
        height: 33px;
      }
      ul {
        margin-top: 83px;
        display: flex;

        li {
          width: 361px;
          height: 515px;
          // padding: 0 30px;
          background: url("~_img/example_enviroment/content2_icon_bg.png")
            no-repeat;
          background-size: 100% 100%;
          display: flex;
          flex-direction: column;
          // justify-content: center;
          align-items: center;
          img {
            width: 142px;
            height: 142px;
          }
          .title {
            margin-top: 78px;
            color: #33384c;
            font-size: 24px;
          }
          .underline {
            margin-top: 10px;
            width: 30px;
            height: 2px;
            background: rgba(125, 132, 146, 0.2);
            border-radius: 1px;
          }
          .text {
            margin-top: 25px;
            color: #7d8492;
            font-size: 20px;
            padding: 0 50px;

            text-align: center;
          }
        }
      }
    }
  }
  .application {
    .application_content {
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      .title {
        font-size: 30px;
        color: #000;
        padding: 60px 0;
      }
      img {
        width: 1406px;
        height: 765px;
      }
    }
  }
}
</style>
