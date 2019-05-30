<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created () {
    }
  }
</script>

<style lang="scss" type="text/scss">
  @import '~normalize.css/normalize.css';
  // normalize.css 样式格式化
  @import './styles/index.scss'; // 全局自定义的css样式
  @import '~wangeditor/dist/css/wangEditor.css'; // wangEditor 预览样式

</style>
