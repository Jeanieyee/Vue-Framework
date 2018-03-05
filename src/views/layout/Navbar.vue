<template>
  <el-menu class="navbar" mode="horizontal">
    <levelbar></levelbar>
  </el-menu>
</template>

<script>
  import Levelbar from './Levelbar'

  export default {
    components: {
      Levelbar,
    }
  }
</script>

