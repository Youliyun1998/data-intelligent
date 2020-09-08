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
                :class="[index === activeIndex ? 'active' : '']"
              >
                {{ item }}
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
      activeIndex: 0,
      tabData: ['首页', '服务', '产品', '典型案例', '关于我们']
    }
  },
  mounted () {
    // 浏览器刷新路由重定向为首页
    window.addEventListener('load', () => {
      // 滚动事件变为 scroll
      if (this.$route.path !== '/home') {
        // /home 表示首页
        this.$router.replace('/home') // 切换到首页
      }
    })
  },
  watch: {
    // $route(to, from) {
    //   console.log(val, "新路由");
    //   if (to.path === "/serve") {
    //     this.activeIndex = 1;
    //   } else if (to.path === "/product") {
    //     this.activeIndex = 2;
    //   } else if (to.path === "/example") {
    //     this.activeIndex = 3;
    //   } else if (to.path === "/home") {
    //     this.activeIndex = 0;
    //   } else {
    //     this.activeIndex = 4;
    //   }
    // }
    $route (val, oldVal) {
      // 让页面回滚到顶部
      window.scrollTo(0, 0)
      if (val.path === '/serve') {
        this.activeIndex = 1
      } else if (val.path === '/product') {
        this.activeIndex = 2
      } else if (val.path === '/example') {
        this.activeIndex = 3
      } else if (val.path === '/home') {
        this.activeIndex = 0
      } else {
        this.activeIndex = 4
      }
    }
  },
  methods: {
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
.head {
  height: 75x;
  background: #1c2133;
  box-shadow: 0px 2px 20px 0px rgba(19, 22, 30, 0.6);
  .wrap {
    width: 1200px;
    // height: 100%;
    margin: 0 auto;
  }

  .top {
    z-index: 999999;
    position: fixed;
    width: 100%;
    height: 75px;

    background: #1c2133;
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

                border-bottom: 4px solid #ffdd1f;
              }
            }
          }
        }
      }
    }
  }
}
</style>
