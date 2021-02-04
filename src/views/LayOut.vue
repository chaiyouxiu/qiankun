<template>
  <div class="layout-page">
    <el-container>
      <el-header>
        <span class="layout-page_title">QianKun</span>
        <span>
          <i :class="[state ? 'el-icon-s-unfold' : 'el-icon-s-fold']"></i>
        </span>
      </el-header>
      <el-container>
        <el-aside ref="aside" width="200px">
          <Slider></Slider>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Slider from '@/components/slider/index.vue'
export default {
  name: 'Home',
  data () {
    return {
      state: false
    }
  },
  components: {
    Slider
  },
  methods: {
    // 菜单栏收缩
    toggleMenu () {
      const $aside = this.$refs.aside.$el
      this.state = !this.state
      $aside.style.width = this.state ? '50px' : '200px'
    }
  }
}
</script>

<style scoped lang="scss">
.layout-page {
  height: 100%;
  .el-container {
     height: 100%;
     display: flex;
     section {
       flex: 1;
     }
  }
  .el-header {
    padding: 0;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    .layout-page_title {
      text-align: center;
      display: inline-block;
      width: 200px;
    }
  }
  
  /deep/.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    transition: width 0.5s linear 100ms;
    height: 100%;
    menu {
      height: 100%;
    }
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
}
</style>
