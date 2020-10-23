<template>
  <div class="head">
    <div class="top">
      <div class="top_content wrap">
        <div class="top_left ">
          <img src="~_img/logo.png" alt="" />
        </div>
        <div class="top_right ">
          <div class="top_tab">
            <ul>
              <li
                v-for="(item, index) in tabData"
                :key="index"
                @click="handleTab(index)"
                @mouseover="handleMouseOver(index)"
                @mouseleave="handleMouseLeave(index)"
                :class="[index === activeIndex ? 'active' : '']"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="childtab" v-if="activeIndex === 2 && showChildtab">
            <ul>
              <li
                v-for="(v, i) in childtab"
                :key="i"
                :class="[childActive == i ? 'activestyle' : '']"
                @click="handleChildtab(i)"
              >
                {{ v }}
              </li>
            </ul>
          </div>
          <div class="exampletab" v-if="activeIndex === 3 && showExampletab">
            <ul>
              <li
                v-for="(v, i) in exampleTab"
                :key="i"
                :class="[exampleTabActive == i ? 'activestyle' : '']"
                @click="handleExampletab(i)"
              >
                {{ v }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showChildtab: false,
      showExampletab: false,
      activeIndex: 2,
      childActive: 0,
      exampleTabActive: 0,
      tabData: ['首页', '服务', '产品', '典型案例', '关于我们'],
      childtab: ['智慧灯杆', '智慧环保', '智慧园区', '智慧旅游', '云物管'],
      exampleTab: ['环保', '铁路', '海关', '旅游']
    }
  },
  mounted () {
    // 浏览器刷新,判断当前路由
    window.addEventListener('load', () => {
      window.scrollTo(0, 0)

      if (this.$route.path === '/serve') {
        this.activeIndex = 1
      } else if (this.$route.path === '/product') {
        this.activeIndex = 2
        this.childActive = 0
      } else if (this.$route.path === '/example') {
        this.activeIndex = 3
        this.exampleTabActive = 0
      } else if (this.$route.path === '/example/enviroment') {
        this.activeIndex = 3
        this.exampleTabActive = 0
        this.showExampletab = true
      } else if (this.$route.path === '/example/railway') {
        this.activeIndex = 3
        this.exampleTabActive = 1
      } else if (this.$route.path === '/example/customs') {
        this.activeIndex = 3
        this.exampleTabActive = 2
      } else if (this.$route.path === '/example/traval') {
        this.activeIndex = 3
        this.exampleTabActive = 3
      } else if (this.$route.path === '/home') {
        this.activeIndex = 0
      } else if (this.$route.path === '/about') {
        this.activeIndex = 4
      } else if (this.$route.path === '/product/SmartLampStandard') {
        this.childActive = 0
        this.showChildtab = true
      } else if (this.$route.path === '/product/SmartEnviroment') {
        this.childActive = 1
      } else if (this.$route.path === '/product/SmartPark') {
        this.childActive = 2
      } else if (this.$route.path === '/product/SmartTraval') {
        this.childActive = 3
      } else if (this.$route.path === '/product/SmartWuGuan') {
        this.childActive = 4
      }
    })
  },
  watch: {
    $route (to, from) {
      // 监听路由变化，让页面回滚到顶部
      window.scrollTo(0, 0)
      if (this.$route.path === '/serve') {
        this.activeIndex = 1
      } else if (this.$route.path === '/product') {
        this.activeIndex = 2
        this.childActive = 0
      } else if (this.$route.path === '/example') {
        this.showExampletab = true
        this.activeIndex = 3
        this.exampleTabActive = 0
      } else if (this.$route.path === '/home') {
        this.activeIndex = 0
      } else if (this.$route.path === '/about') {
        this.activeIndex = 4
      } else if (this.$route.path === '/product/SmartLampStandard') {
        this.showChildtab = true
        this.activeIndex = 2
        this.childActive = 0
      } else if (this.$route.path === '/product/SmartEnviroment') {
        this.showChildtab = false
        this.activeIndex = 2
        this.childActive = 1
      } else if (this.$route.path === '/product/SmartPark') {
        this.showChildtab = false
        this.activeIndex = 2
        this.childActive = 2
      } else if (this.$route.path === '/product/SmartTraval') {
        this.showChildtab = false
        this.activeIndex = 2
        this.childActive = 3
      } else if (this.$route.path === '/product/SmartWuGuan') {
        this.showChildtab = false
        this.activeIndex = 2
        this.childActive = 4
      } else if (this.$route.path === '/example/enviroment') {
        this.showExampletab = true
        this.activeIndex = 3
        this.exampleTabActive = 0
      } else if (this.$route.path === '/example/railway') {
        this.activeIndex = 3
        this.exampleTabActive = 1
      } else if (this.$route.path === '/example/customs') {
        this.activeIndex = 3
        this.exampleTabActive = 2
      } else if (this.$route.path === '/example/traval') {
        this.activeIndex = 3
        this.exampleTabActive = 3
      }
    }
  },
  methods: {
    handleMouseOver (index) {
      if (index === 2) {
        this.activeIndex = index
        this.showChildtab = true
      }

      // console.log(index, "index");
    },
    handleMouseLeave (index) {
      if (index === 2) {
        // this.activeIndex !== 2;
        // this.showChildtab = false
      }
    },
    handleExampletab (e) {
      this.exampleTabActive = e
      switch (this.exampleTabActive) {
        case 0:
          this.$router.push({ path: '/example/enviroment' })
          this.showExampletab = true

          break
        case 1:
          this.$router.push({ path: '/example/railway' })
          this.showExampletab = false
          break
        case 2:
          this.$router.push({ path: '/example/customs' })
          this.showExampletab = false
          break
        case 3:
          this.$router.push({ path: '/example/traval' })
          this.showExampletab = false
          break
      }
    },
    handleChildtab (e) {
      this.childActive = e
      switch (this.childActive) {
        case 0:
          this.$router.push({ path: '/product/SmartLampStandard' })
          this.showChildtab = true
          break
        case 1:
          this.$router.push({ path: '/product/SmartEnviroment' })
          this.showChildtab = false
          break
        case 2:
          this.$router.push({ path: '/product/SmartPark' })
          this.showChildtab = false
          break
        case 3:
          this.$router.push({ path: '/product/SmartTraval' })
          this.showChildtab = false
          break
        case 4:
          this.$router.push({ path: '/product/SmartWuGuan' })
          this.showChildtab = false
          break
        default:
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
          this.$router.push({ path: '/product/SmartLampStandard' })
          this.showChildtab = true
          break
        case 3:
          this.$router.push({ path: '/example/enviroment' })
          this.showExampletab = true
          break
        case 4:
          this.$router.push({ path: '/about' })
          break // 你可以有任意数量的case语句
        default:
        // 可选
        // 语句
      }
    }
  }
}
</script>

<style lang="less" scoped>
.head {
  height: 79x;
  background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
  margin-bottom: 73px;
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }

  .top {
    z-index: 999999;
    position: fixed;
    top: 0;
    width: 100%;
    height: 75px;
    background: #0a1126;
    box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
    .top_content {
      width: 1200px;
      height: 75px;
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
          position: relative;
          color: #aaaaaa;
          font-size: 14px;
          ul {
            display: flex;
            li {
              cursor: pointer;
              margin-left: 60px;
              // width: 66px;
              height: 70px;
              line-height: 70px;
              text-align: center;
              &.active {
                color: #fff;
                // width: 66px;
                border-bottom: 4px solid #59a6ba;
              }
            }
          }
        }
        .childtab {
          width: 160px;
          height: 212px;
          position: absolute;
          margin-left: 170px;
          // background-color: rgba(28, 33, 51, 0.9);

          ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 212px;
            color: rgba(170, 170, 170, 1);
            padding: 24px;
            padding-bottom: 0;
            background-color: rgba(28, 33, 51, 0.9);

            li {
              cursor: pointer;
              font-size: 14px;
              color: rgba(170, 170, 170, 1);
              margin-bottom: 16px;
              &.activestyle {
                color: white;
              }
            }
          }
        }
        .exampletab {
          width: 160px;
          height: 212px;
          position: absolute;
          margin-left: 272px;
          // background-color: rgba(28, 33, 51, 0.9);

          ul {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 212px;
            color: rgba(170, 170, 170, 1);
            padding: 24px;
            padding-bottom: 0;
            background-color: rgba(28, 33, 51, 0.9);

            li {
              cursor: pointer;
              font-size: 14px;
              color: rgba(170, 170, 170, 1);
              margin-bottom: 16px;
              &.activestyle {
                color: white;
              }
            }
          }
        }
      }
    }
  }
}
</style>
