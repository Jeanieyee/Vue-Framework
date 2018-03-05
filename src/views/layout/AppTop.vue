<template>
  <div class="main-top">
    <div class="left">
      <img src="../../image/head/logo.png" class="logo">
      <img src="../../image/head/font.png" class="title">
    </div>
    <div class="right">
      <span class="title"></span>
      <span class="quit flr" @click="logout">{{$t('Quit')}}</span>
      <span class="flr user" :class="{'no-border':langShow}">{{$t('Hello')}}，{{userName}}</span>
      <div class="lang-box flr" :class="{'no-back':!langShow,'no-border':!langShow}" @mouseover="langHover"
           @mouseleave="langLeave">
        <div class="lang-row" v-show="lang=='cn'">
          <img src="../../image/head/cn.png" class="country fll">
          <span class="fll font">中文</span>
          <img src="../../image/head/down.png" class="down fll" :class="{'turn':langShow}">
          <div class="clear"></div>
        </div>
        <div class="lang-row" v-show="lang=='en'">
          <img src="../../image/head/en.png" class="country fll">
          <span class="fll font">English</span>
          <img src="../../image/head/down.png" class="down fll" :class="{'turn':langShow}">
          <div class="clear"></div>
        </div>
        <div class="lang-row" v-show="lang=='tw'">
          <img src="../../image/head/tai.png" class="country fll">
          <span class="fll font">繁體</span>
          <img src="../../image/head/down.png" class="down fll" :class="{'turn':langShow}">
          <div class="clear"></div>
        </div>
        <el-collapse-transition>

          <ul v-show="langShow">
            <li @click="changLang('cn')">
              <img src="../../image/head/cn.png" class="flag">
              <span>中文</span>
              <img src="../../image/head/check.png" class="check" v-show="lang=='cn'">
            </li>
            <li @click="changLang('en')">
              <img src="../../image/head/en.png" class="flag">
              <span>English</span>
              <img src="../../image/head/check.png" class="check" v-show="lang=='en'">
            </li>
            <li @click="changLang('tw')">
              <img src="../../image/head/tai.png" class="flag">
              <span>繁體</span>
              <img src="../../image/head/check.png" class="check" v-show="lang=='tw'">
            </li>
          </ul>
        </el-collapse-transition>
      </div>
    </div>
  </div>
</template>

<script>
  import { setStore } from '@/utils/index'
  import { mapGetters } from 'vuex'
  import { turnLang } from '@/api/config'

  export default {
    data () {
      return {
        userName: this.$store.getters.name || '',
        langShow: false,
      }
    },
    created () {

    },
    mounted () {

    },
    components: {},
    computed: mapGetters([
      'lang'
    ]),
    props: [],
    beforeDestroy () {
    },
    methods: {
      langHover () {
        this.langShow = true
      },
      langLeave () {
        this.langShow = false
      },
      changLang (lang) {
        setStore('lang', lang)
        turnLang().then(res => {
          window.location.reload()
        })
      },
      logout () {
        this.$store.dispatch('LogOut').then(() => {
          location.reload()  // 为了重新实例化vue-router对象 避免bug
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main-top {
    height: 60px;
    position: fixed;
    width: 100%;
    z-index: 200;
    top: 0;
    .left {
      float: left;
      width: 180px;
      background: #f2cd00;
      height: 60px;
      padding-left: 28px;
      .logo {
        height: 42px;
        margin-top: 8px;
        float: left;
      }
      .title {
        height: 26px;
        float: left;
        margin-top: 18px;
        margin-left: 10px;
      }
    }
    .right {
      width: calc(100% - 180px);
      background: #f5f5f6;
      border-bottom: 1px #dedede solid;
      top: 0;
      height: 60px;
      float: left;
      line-height: 60px;
      padding: 0 21px;
      font-size: 15px;

      .title {
        font-size: 22px;
      }
      .quit {
        color: #4a90e2;
        cursor: pointer;
      }
      .user {
        margin-right: 24px;
        padding-left: 24px;
        border-left: 1px #e7e7e7 solid;
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
      }
      .lang-box {
        display: inline-block;
        line-height: 20px;
        background: #ffffff;
        padding: 0 20px;
        margin-top: 10px;
        border-top: 1px #e7e7e7 solid;
        border-left: 1px #e7e7e7 solid;
        border-right: 1px #e7e7e7 solid;
        position: relative;
        height: 50px;
        .lang-row {
          cursor: pointer;
          .country {
            height: 12px;
            margin-top: 12px;
          }
          .font {
            margin-top: 8px;
            margin-left: 8px;

          }
          .down {
            height: 4px;
            width: 6px;
            margin-left: 12px;
            margin-top: 16px;
            -webkit-transition: -webkit-transform 0.4s ease-out;
            -moz-transition: -moz-transform 0.4s ease-out;
            transition: transform 0.4s ease-out;
          }
          .turn {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            transform: rotate(180deg);
          }
        }

        ul {
          width: 170px;
          border-left: 1px #e7e7e7 solid;
          border-right: 1px #e7e7e7 solid;
          border-bottom: 1px #e7e7e7 solid;
          background: #ffffff;
          position: absolute;
          right: -1px;
          top: 49px;
          cursor: pointer;
          li {
            height: 46px;
            line-height: 46px;
            .flag {
              height: 12px;
              float: left;
              margin-left: 25px;
              margin-top: 17px;
            }
            &:hover {
              background: #f4f4f4;

            }
            span {
              margin-left: 12px;
            }
            .check {
              height: 12px;
              float: right;
              margin-right: 20px;
              margin-top: 17px;
            }
          }
        }

      }
    }
  }

</style>
