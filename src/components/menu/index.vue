<template>
  <div class="menu-page">
    <el-submenu v-if="menu.children && menu.children.length" 
                :key="menu.id" :index="'' + menu.resourceUrl">
      <!-- 先将自身加载为菜单夹 -->
     <template slot="title">
       <i class="el-icon-edit"></i>
       <span>{{menu.name}}</span>
     </template>
     <!-- 加载子菜单项 -->
     <Menu v-for="item in menu.children" :key="item.id" :menu="item"></Menu>
    </el-submenu>
    <router-link v-else :to="menu.resourceUrl">
      <el-menu-item  :index="'' + menu.resourceUrl" :key="menu.id">
        <span>{{menu.name}}</span>
      </el-menu-item>
    </router-link>
  </div>
</template>

<script>  
export default {
  name: 'Menu',
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>
 
<style scoped lang="scss">  
</style>