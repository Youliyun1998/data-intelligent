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
          <p class="big_text">云物管</p>
          <p class="sub_text">
            智能门禁、停车管理系统通过智能硬件的铺设
          </p>
          <p class="sub_text">
            以及搭建，实现对商业综合体内人员以及车辆
          </p>
          <p class="sub_text">
            进出实时管控
          </p>
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
    <!-- </div> -->
    <!-- </div> -->
    <!-- </div> -->
    <!--      第二屏-->
    <!-- <div class="section"> -->
    <!-- <div class="box2"> -->
    <div class="contact">
      <div class="contact_content wrap">
        <div class="title">云物管助力集团用户多个物业统一管理</div>
        <div class="title_detail">
          <p>
            基于人脸识别、物联网、大数据技术，实现门禁、安防、停车、消费等软硬件一体化管理
          </p>
        </div>
        <div class="map">
          <div class="left_box">
            <div class="leftbox_title">率先完成多个系统对接</div>
            <div class="leftbox_content">
              <div class="top">
                <ul>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon1.png"
                      alt=""
                    />
                    <div class="text">停车系统</div>
                  </li>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon2.png"
                      alt=""
                    />
                    <div class="text">安防系统</div>
                  </li>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon3.png"
                      alt=""
                    />
                    <div class="text">门禁系统</div>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <ul>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon4.png"
                      alt=""
                    />
                    <div class="text">电梯系统</div>
                  </li>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon5.png"
                      alt=""
                    />
                    <div class="text">照明系统</div>
                  </li>
                  <li>
                    <img
                      src="~_img/product_yunwuguan/content1_icon6.png"
                      alt=""
                    />
                    <div class="text">消费系统</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="right_box">
            <div class="rightbox_title">软硬件一体化</div>
            <div class="rightbox_content">
              <div class="top">
                <img src="~_img/product_yunwuguan/content1_icon7.png" alt="" />
              </div>
              <div class="bottom">
                <div class="block1">
                  <div class="title1">安防、消费大集成</div>
                  <div class="subtitle">上承接智慧城市，下整合软硬基础设施</div>
                </div>
                <div class="block2">
                  <div class="title1">一云掌控</div>
                  <div class="subtitle">坐镇指挥中心，远程指挥各现场实况</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 企业简介 -->
    <div class="en_presume ">
      <div class="en_presume_contnent wrap">
        <div class="big_title">
          智能出入管理
        </div>
        <p>
          智能门禁、停车管理系统通过智能硬件的铺设以及搭建，实现对商业综合体内人员以及车辆进出实时管控，通过搭建出入规则，实现vip
        </p>
        <p>通道，无感化进出、智能考勤管理等功能</p>

        <div class="block">
          <ul>
            <li v-for="(item, index) in 3" :key="index">
              <!-- <p>{{ item }}</p>
              <div class="line"></div> -->
            </li>
            <div class="block_footer">
              <div v-for="(item, index) in enData" :key="index">
                <p>{{ item }}</p>
                <div class="line"></div>
              </div>
            </div>
          </ul>
          <!-- <img
            src="~_img/productSmartPark/productSmartPark_content1.png"
            alt=""
          /> -->
        </div>
      </div>
    </div>
    <!-- </div> -->
    <!-- </div> -->
    <!-- <div class="section"> -->
    <!-- <div class="box3"> -->
    <!-- 联系方式 -->
    <div class="contact3">
      <div class="contact_content wrap">
        <div class="title">智能运营管理</div>
        <div class="title_detail">
          <p>
            对周边商圈的的高效管理，提高物业运营能力以及盈利能力，支持商户数据一键导入管理，方便物业商圈管理，减少人力管理成本。
          </p>
        </div>
        <div class="content">
          <ul>
            <li v-for="(v, i) in smartGovenData" :key="i">
              <div class="img"></div>
              <div class="text">{{ v }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contact2">
      <div class="contact_content wrap">
        <div class="title">智能考勤管理</div>
        <div class="title_detail">
          <p>
            实现物业本身内部得智能化管理，智能考勤、智慧财务、智能办公等，全面提升工作效率。
          </p>
        </div>
        <div class="map">
          <ul>
            <li></li>
            <li>
              <span>支持多种考勤方式</span>
            </li>
            <li><span>可视化数据报表</span></li>
            <li></li>
          </ul>
          <!-- <ServeRightLeft :contentData="contentData" :url="url" /> -->
          <!-- <img
            src="~_img/productEnviroment/productEnviroment_bigData.png"
            alt=""
          /> -->
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
    height: 900px;
    background: url("~_img/product_yunwuguan/banner.png") no-repeat;
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
          font-size: 30px;
          color: rgba(255, 255, 255, 0.6);
          // margin: 16px 0 41px 0;
        }
        .line {
          margin-top: 41px;
          width: 110px;
          height: 10px;
          background: #3e6eff;
          border-radius: 3px;
        }
      }
    }
  }
  .en_presume {
    // margin-top: 75px;
    height: 900px;
    background: #eef0f5;
    .big_title {
      padding: 28px 0;
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
      margin-top: 40px;
      margin-bottom: 40px;
      width: 100%;
      height: 900px;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          // flex: 1;
          margin-right: 20px;
          width: 386px;
          height: 448px;
          background-size: 100% 100%;
          &:first-child {
            background: url("~_img/product_yunwuguan/content2_icon1.png")  no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(2) {
            background: url("~_img/product_yunwuguan/content2_icon2.png")
              no-repeat;
            background-size: 100% 100%;
          }
          &:nth-child(3) {
            background: url("~_img/product_yunwuguan/content2_icon3.png")
              no-repeat;
            background-size: 100% 100%;
            margin-right: 0;
          }
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .block_footer {
          display: flex;

          div {
            margin-right: 20px;
            width: 386px;
            height: 130px;
            background: #f6f8fb;
            font-size: 18px;
            color: #33384c;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p {
              text-indent: 0;
              color: #171a25;
              font-size: 30px;
              font-weight: bold;
              margin-bottom: 30px;
            }
            .line {
              width: 50px;
              height: 6px;
              background: #59a6ba;
              border-radius: 3px;
            }
            &:last-child {
              margin-right: 0;
            }
            span {
              display: inline-block;
              padding-top: 20px;
              padding-right: 30px;
              padding-left: 35px;
            }
          }
        }
      }
      img {
        width: 872px;
        height: 583px;
      }
    }
  }
  .contact {
    height: 900px;
    background: #fff;
    // background: url("~_img/product_yunwuguan/content3_bg.png") no-repeat;
    // background-size: 100% 100%;

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
        padding: 28px 0;
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
        display: flex;

        .left_box {
          margin-right: 30px;
          font-size: 20px;
          color: #59a6ba;
          // padding: 0 63px;
          .leftbox_title {
            width: 580px;
            height: 60px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
          }
          .leftbox_content {
            margin-top: 24px;
            width: 580px;
            height: 585px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .top {
              width: 100%;
              ul {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 101px;
                    height: 101px;
                  }
                  .text {
                    margin-top: 15px;
                    font-size: 20px;
                    color: #707279;
                  }
                }
              }
            }
            .bottom {
              margin-top: 101px;
              width: 100%;
              ul {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 101px;
                    height: 101px;
                  }
                  .text {
                    margin-top: 15px;
                    font-size: 20px;
                    color: #707279;
                  }
                }
              }
            }
          }
        }
        .right_box {
          font-size: 20px;
          color: #59a6ba;
          .rightbox_title {
            width: 580px;
            height: 60px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
          }
          .rightbox_content {
            margin-top: 24px;
            width: 580px;
            height: 585px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            .top {
              display: flex;
              justify-content: center;
              padding: 72px 0;
              img {
                width: 157px;
                height: 151px;
              }
            }
            .bottom {
              padding-left: 153px;
              .block1 {
                .title1 {
                  font-size: 24px;
                  color: #33384c;
                  font-weight: bold;
                }
                .subtitle {
                  margin-top: 16px;
                  font-size: 16px;
                  color: #75777d;
                }
              }
              .block2 {
                margin-top: 56px;
                .title1 {
                  font-weight: bold;
                  font-size: 24px;
                  color: #33384c;
                }
                .subtitle {
                  margin-top: 16px;
                  font-size: 16px;
                  color: #75777d;
                }
              }
            }
          }
        }

        // width: 100%;
        // height: 900px;
        // display: flex;
        // justify-content: center;
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
        // img {
        //   width: 601px;
        //   height: 601px;
        // }
      }
      .content {
        margin-top: 63px;
        height: 700px;
        ul {
          // display: flex;
          position: relative;
          width: 100%;
          height: 100%;

          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #171a25;
            font-size: 24px;
            font-weight: bold;
            &:first-child {
              position: absolute;
              left: 0;
              top: 0;
              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon1.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            &:nth-child(2) {
              position: absolute;
              left: 370px;
              bottom: 40px;

              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon2.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            &:nth-child(3) {
              position: absolute;
              top: 0;
              right: 0;
              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon3.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            .text{
              margin-top: 24px;
            }
          }
        }
      }
    }
  }
    .contact3 {
    height: 900px;
    background: url("~_img/product_yunwuguan/content3_bg.png") no-repeat;
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
        padding: 28px 0;
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
        display: flex;

        .left_box {
          margin-right: 30px;
          font-size: 20px;
          color: #59a6ba;
          // padding: 0 63px;
          .leftbox_title {
            width: 580px;
            height: 60px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
          }
          .leftbox_content {
            margin-top: 24px;
            width: 580px;
            height: 585px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .top {
              width: 100%;
              ul {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 101px;
                    height: 101px;
                  }
                  .text {
                    margin-top: 15px;
                    font-size: 20px;
                    color: #707279;
                  }
                }
              }
            }
            .bottom {
              margin-top: 101px;
              width: 100%;
              ul {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                li {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 101px;
                    height: 101px;
                  }
                  .text {
                    margin-top: 15px;
                    font-size: 20px;
                    color: #707279;
                  }
                }
              }
            }
          }
        }
        .right_box {
          font-size: 20px;
          color: #59a6ba;
          .rightbox_title {
            width: 580px;
            height: 60px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-weight: bold;
          }
          .rightbox_content {
            margin-top: 24px;
            width: 580px;
            height: 585px;
            background: #f6f8fb;
            border: 1px dashed #59a6ba;
            .top {
              display: flex;
              justify-content: center;
              padding: 72px 0;
              img {
                width: 157px;
                height: 151px;
              }
            }
            .bottom {
              padding-left: 153px;
              .block1 {
                .title1 {
                  font-size: 24px;
                  color: #33384c;
                  font-weight: bold;
                }
                .subtitle {
                  margin-top: 16px;
                  font-size: 16px;
                  color: #75777d;
                }
              }
              .block2 {
                margin-top: 56px;
                .title1 {
                  font-weight: bold;
                  font-size: 24px;
                  color: #33384c;
                }
                .subtitle {
                  margin-top: 16px;
                  font-size: 16px;
                  color: #75777d;
                }
              }
            }
          }
        }

        // width: 100%;
        // height: 900px;
        // display: flex;
        // justify-content: center;
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
        // img {
        //   width: 601px;
        //   height: 601px;
        // }
      }
      .content {
        margin-top: 63px;
        height: 700px;
        ul {
          // display: flex;
          position: relative;
          width: 100%;
          height: 100%;

          li {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #171a25;
            font-size: 24px;
            font-weight: bold;
            &:first-child {
              position: absolute;
              left: 0;
              top: 0;
              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon1.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            &:nth-child(2) {
              position: absolute;
              left: 370px;
              bottom: 40px;

              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon2.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            &:nth-child(3) {
              position: absolute;
              top: 0;
              right: 0;
              .img {
                width: 462px;
                height: 401px;
                background: url("~_img/product_yunwuguan/content3_icon3.png")
                  no-repeat;
                background-size: 100%;
              }
            }
            .text{
              margin-top: 24px;
            }
          }
        }
      }
    }
  }
  .contact2 {
    height: 900px;
    background: #eef0f5;
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
        padding: 28px 0;
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
        ul {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          li {
            &:first-child {
              width: 600px;
              height: 314px;
              background: url("~_img/product_yunwuguan/content4_icon1.png")
                no-repeat;
              background-size: 100% 100%;
            }
            &:nth-child(2) {
              width: 600px;
              height: 314px;

              background: url("~_img/product_yunwuguan/content4_icon2_bg.png")
                no-repeat;
              background-size: 100% 100%;
              display: flex;
              // justify-content: center;
              align-items: center;
              span {
                padding-left: 64px;
                font-size: 24px;
                font-weight: 600;
                color: #171a25;
                display: flex;
                align-items: center;

                &::before {
                  content: "";
                  display: block;
                  width: 42px;
                  height: 42px;
                  margin-right: 24px;
                  background: url("~_img/product_yunwuguan/content4_icon2.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
            &:nth-child(3) {
              width: 600px;
              height: 314px;
              background: url("~_img/product_yunwuguan/content4_icon3_bg.png")
                no-repeat;
              background-size: 100% 100%;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              span {
                padding-right: 64px;
                font-size: 24px;
                font-weight: 600;
                color: #171a25;
                display: flex;
                align-items: center;

                &::after {
                  content: "";
                  display: block;
                  width: 42px;
                  height: 42px;
                  margin-left: 24px;
                  background: url("~_img/product_yunwuguan/content4_icon3.png")
                    no-repeat;
                  background-size: 100% 100%;
                }
              }
            }
            &:nth-child(4) {
              width: 600px;
              height: 314px;
              background: url("~_img/product_yunwuguan/content4_icon4.png")
                no-repeat;
              background-size: 100% 100%;
            }
            span {
            }
          }
        }
      }
    }
  }
}
</style>
