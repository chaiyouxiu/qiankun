<template>
  <div class="slider-page">
    <el-menu v-if="menuList && menuList.length"
            :default-active="active"
            @open="handleOpen"
            @close="handleClose">
      <Menu v-for="item in menuList" :key="item.id" :menu="item"></Menu>
    </el-menu>
  </div>
</template>

<script>
import Menu from '../menu/index.vue'
export default {
  data () {
    return {
      active: [],
      menuList: []
    }
  },
  components: {
    Menu
  },
  watch: {
    '$route.fullPath': function (val) {
      this.active = val
    }
  },
  methods: {
    // 获取菜单
    getMenuList () {
      const menuList = [
        {
          id: 1,
          name: '技术点1',
          resourceUrl: '/technicalPoint',
          children: [
            {
              id: 2,
              name: 'mapBoxGl',
              resourceUrl: '/technicalPoint/mapBoxGl'
            }
          ]
        },
        {
          id: 3,
          name: '技术点3',
          resourceUrl: '/technicalPoint3',
          children: [
            {
              id: 2,
              name: 'mapBoxGl',
              resourceUrl: '/technicalPoint3/mapBoxGl'
            }
          ]
        }
      ]
      this.menuList = menuList
    },
    handleOpen (key, path) {
    },
    handleClose (key, path) {}
  },
  created () {
    this.getMenuList()
  }
}
</script>
 
<style scoped lang="scss">
.slider-page {
}  
</style>