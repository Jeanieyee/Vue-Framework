<template>
  <el-menu mode="vertical"
           :default-active="sliderActiveIndex"
           background-color="#323745"
           text-color="#ccc"
           active-text-color="#f2cd00"
  >
    <sidebar-item :routes='permission_routers'></sidebar-item>
  </el-menu>

</template>

<script>
  import { mapGetters } from 'vuex'
  import SidebarItem from './SidebarItem'

  export default {
    components: {SidebarItem},
    computed: {
      ...mapGetters([
        'permission_routers',
        'sliderActiveIndex'
      ])
    },
    created () {
    },
    updated () {

    },

    data () {
      return {
        activeIndex: ''
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .el-menu {
    min-height: 100%;
  }
</style>
