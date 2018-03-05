<template>
  <div class="testQuestion">
    <el-form-item :label="`问题${index+1}`" class="bgColor" prop="type">
      <el-radio-group class="questionType" v-model="detail.type" @change="chooseType">
        <el-radio-button label="0">单选</el-radio-button>
        <el-radio-button label="1">多选</el-radio-button>
        <el-radio-button label="2">判断</el-radio-button>
        <el-radio-button label="3">排序</el-radio-button>
      </el-radio-group>
      <span class="color">{{typeExplain}}</span>
      <div class="editBox">
        <i class="delete" @click="deleteQuestion()"></i>
      </div>
    </el-form-item>
    <el-form-item label="问题" prop="title">
      <el-input placeholder="最多30字" :maxlength="30" v-model="detail.title"></el-input>
    </el-form-item>
    <el-form-item v-for="(item, i) in detail.options" :key="i" prop="options">
      <!--单选-->
      <div slot="label" class="resultBox" v-show="detail.type === '0'">
        <el-radio-group v-model="detail.result[0]">
          <el-radio-button :label="i" name="result"></el-radio-button>
        </el-radio-group>
      </div>
      <!--多选或判断-->
      <div slot="label" class="resultBox" v-show="detail.type !== '0' && detail.type !== '3'">
        <el-checkbox-group v-model="detail.result">
          <el-checkbox :label="i"></el-checkbox>
        </el-checkbox-group>
      </div>
      <!--排序-->
      <div slot="label" v-show="detail.type === '3'">
        <span class="sortNumber">{{i+1}}</span>
      </div>
      <el-input placeholder="最多30字" :maxlength="30" v-model="detail.options[i]"></el-input>
      <i class="deleteAnswer" v-if="detail.options.length !== 1" @click="deleteAnswer(i)"></i>
      <i class="add" v-if="i+1 === detail.options.length" @click="addAnswer"></i>
    </el-form-item>
  </div>
</template>
<script>
  export default {
    props: ['index', 'detail'],
    data () {
      return {
        typeExplain: ''
      }
    },
    methods: {
      chooseType (e) {
        let typeEplainArr = ['勾选一项为正确答案', '勾选多项为正确答案', '勾选一项为正确答案', '答案请安正确顺序填写']
        this.typeExplain = typeEplainArr[e]
        this.setResult()
      },
      addAnswer () {
        this.$emit('addAnswer')
      },
      deleteAnswer (i) {
        this.$emit('deleteAnswer', this.index, i)
      },
      deleteQuestion () {
        this.$emit('deleteQuestion')
      },
      setResult () {
        this.$emit('setResult')
      }
    }
  }
</script>
<style lang="scss">
  .testQuestion{
    margin:24px auto 0 auto;
    border:1px solid #DCDCDC;
    width:1024px;
    .bgColor{
      background: #F9F9F9;
    }
    .color{
      font-size: 12px;
      color: #5EAE01;
    }
    .editBox{
      float: right;
      font-size: 0;
      i{
        display: inline-block;
        width:32px;
        height: 32px;
      }
      .delete{
        margin-right:30px;
        background: url('../../image/icon/deletebgnull.png');
        background-size: 100% 100%;
      }
    }
    .el-form-item__content{
      margin-left:100px !important;
    }
    .el-form-item__label{
      font-size: 12px;
    }
    .questionType{
      .el-radio-button{
        margin-right: 12px;
        width:80px;
        height: 24px;
        .el-radio-button__inner:hover{
          color: #fff;
          border:1px solid #F2CD00;
          background: #F2CD00;
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
          color: #fff;
          border:1px solid #F2CD00 !important;
          background: #F2CD00;
          box-shadow: none !important;
        }
        span{
          border-radius: 4px;
          border:1px solid #CCC;
          display: block;
          padding:0;
          width:100%;
          height:100%;
          line-height: 24px;
          font-size: 12px;
        }
      }
    }
    .resultBox{
      .el-radio-button{
        width:20px;
        height: 20px;
        .el-radio-button__inner{
          padding:0;
          display: block !important;
          width: 20px;
          height: 20px;
          color: transparent;
        }
        .el-radio-button__orig-radio:checked+.el-radio-button__inner {
          border:1px solid transparent;
          background: url('../../image/icon/checked-icon.png');
          background-size: 100% 100%;
          box-shadow: none !important;
          color: transparent;
        }
      }
      .el-checkbox-group{
        .el-checkbox{
          width: 20px !important;
          height: 20px;
        }
        .is-checked .el-checkbox__inner{
          border:1px solid transparent;
          background: url('../../image/icon/checked-icon.png');
          background-size: 100% 100%;
          box-shadow: none !important;
          &:after{
            content: none;
          }
          &:active{
            border:1px solid #bfcbd9;
          }
        }
        /*.is-focus{*/
          /*border:1px solid #bfcbd9;*/
        /*}*/
        .el-checkbox__inner{
          width: 20px;
          height:20px;
        }
        .el-checkbox__label{
          display: none !important;
        }
      }
    }
    .el-form-item{
      i{
        margin:0 0 0 16px;
        display: inline-block;
        width:16px;
        height: 16px;
        vertical-align: middle;
      }
      .delete {
        background: url("../../image/icon/delete-icon.png");
        background-size: 100% 100%;
      }
      .deleteAnswer{
        background: url('../../image/icon/deletebg.png');
        background-size: 100% 100%;
      }
      .add{
        background: url('../../image/icon/addbg.png');
        background-size: 100% 100%;
      }
      .deleteDisable{
        background: url('../../image/icon/deletebgnull.png');
        background-size: 100% 100%;
      }
      .addDisable{
        background: url('../../image/icon/addbgnull.png');
        background-size: 100% 100%;
      }
    }
    .sortNumber{
      display: inline-block;
      border-radius: 4px;
      width:20px;
      height: 20px;
      background: #ccc;
      text-align: center;
      line-height: 20px;
      vertical-align: middle;
    }
  }
</style>
