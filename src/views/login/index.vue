<template>
  <div class="login-container">
    <section class="login-header-container">
      <div class="content-container">
        <img :src="publicLoginLogo" />
      </div>
    </section>
    <section class="login-body-container">
      <div class="left-login">
        <img :src="logoTitle" class="logoIcon" />
      </div>
      <div class="right-login">
        <img class="loginBg fade-enter-active fadein" src="~assets/images/views/earthandbg.png" />
        <div class="login-form-container">
          <div class="login-title">用户登录</div>
          <div class="login-form">
            <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px">
              <el-form-item prop="userName"> 
                <el-input name="username" type="text" v-model.trim="loginForm.userName" autoComplete="off" placeholder="请输入手机号或邮箱" tabindex="1">
                  <i slot="prefix"><span class="svg-container"><svg-icon :icon-class="'user_name'"></svg-icon></span></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="off" placeholder="请输入密码" tabindex="2">
                  <i slot="prefix"><span class="svg-container"><svg-icon :icon-class="'password'"></svg-icon></span></i>
                </el-input>
              </el-form-item>
              <el-form-item prop="validateCode" class="validateCode">
                <el-input name="validateCode" type="text" v-model="loginForm.validateCode" autoComplete="off" placeholder="请输入验证码" class="code-input" @keyup.enter.native="handleLogin" tabindex="3">
                  <i slot="prefix"><span class="svg-container"><svg-icon :icon-class="'verificationcode'"></svg-icon></span></i>
                </el-input>
                <img :src="baseApi" class="codeImg" @click="toogleCodeImg" alt="验证码异常" />
                <div class="form-item_error" v-show="errorMsg">
                  <img src="~assets/images/views/info.png"> <span>{{errorMsg}}</span>
                </div>
              </el-form-item>
              <el-form-item class="login-btn" style="margin-bottom: 0;min-height: 30px;">
                <el-button type="primary" size="medium" round :loading="loading" @click="handleLogin">
                  登录
                </el-button>
              </el-form-item>
              <el-form-item class="forget-pwd-btn">
                <router-link to="/forgetPassword">
                  <el-button >忘记密码</el-button>
                </router-link>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </section>
    <section class="login-footer">
      <div class="company">
        <span v-html="copyRight"></span>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Login extends Vue {
  // data
  logoTitle: any =  require('assets/images/views/public_login__title.png');
  publicLoginLogo: any =  require('assets/images/views/public_login_logo.png');
  loginForm: any =  {
    userName: window.location.hostname === 'localhost' ? '18512141325' : '',
    password: window.location.hostname === 'localhost' ? '123456' : '',
    validateCode: ''
  };
  loginRules: any = {
    userName: [{ required: true, trigger: 'blur', msg: '' }],
    password: [{ required: true, trigger: 'blur', msg: '' }],
    validateCode: [{ required: true, trigger: 'blur', msg: '' }]
  };
  loading: boolean = false;
  pwdType: string = 'password';
  baseApi: string = `${process.env.BASE_PARJECT_NAME}/verificationCode/code`;
  errorMsg: string = '';
  copyRight: string = '深圳拓邦股份有限公司©版权所有&nbsp;&nbsp;&nbsp;&nbsp;备案号：粤ICP备1715949号-1';

  toogleCodeImg() {
    this.baseApi = `/tcloud-back/verificationCode/code?t=${new Date().getTime()}`
  }

  handleLogin() {
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "~styles/variables.scss";
@import "~styles/config.scss";
@import "~styles/mixin.scss";
@function rem($px) {
  @return $px * 1px;
}
.login-container{
  width: 100%;
  height: vw(960);
  height: 100vh;
  position: relative;
  background-color: $bg-clolr;
  overflow: hidden;
  .login-header-container {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    .content-container{
      padding: 0 vw(30);
      img {
        width: auto;
        height: vw(54);
      }
    }
  }
  .login-footer {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    .company {
      margin: 0 0 vw(30) vw(276); 
      font-size: vw(16);
      color: $base-font-color;
    }
  }
  .login-body-container{
    display: table;
    width: 100%;
    height: vw(960);
    min-height: 100vh;
    .left-login {
      .logoIcon{
        width: vw(527);
        height: auto;
        margin-top: vw(340);
        margin-left: vw(386);
      }
    }
    .right-login {
      display: table-cell;
      width: vw(889);
      min-height: 100vh;
      .loginBg {
        position: fixed;
        top: 0;
        right: 0;
        width: auto;
        height: 100%;
        height: 100vh;
        z-index: 0;
      }
      .login-form-container {
        width: vw(410);
        min-width: 320px;
        padding: vw(60) vw(40) vw(40);
        position: absolute;
        top: 50%;
        @include transform(translate(0, -50%));
        right: vw(410);
        border-radius: 4px;
        background-color: $bg-clolr;
        box-shadow: 0 10px 34px 3px rgba(0, 0, 0, 0.1);  // opera或ie9
        z-index: 999;
        input {
          background: none;  
          outline: none;  
          border: 0;
        }
        .login-title {
          text-align: center;
          font-size: rem(24);
          color: $primary-font-color;
        }
        .login-form {
          margin-top: vw(30);
          .el-form-item {
            margin-bottom: vw(30);
            border: none;
          }
          .el-form-item__content {
            font-size: rem(14);
            height: rem(44);
            line-height: rem(44);
            border: none;
          }
          .svg-container {
            .svg-icon {
              width: rem(24);
              max-height: rem(26);
              vertical-align: middle;
            }
          }
          .el-input {
            height: rem(44);
            line-height: rem(42);
          }
          .el-input__inner {
            height: rem(44);
          }
          .el-input--prefix .el-input__inner {
            padding-left: rem(45);
          }
          .el-input--suffix .el-input__inner {
            padding-right: rem(45);
          }
          .el-input__inner {
            color: $input-label-color;
            position: relative;
            border: 1px solid $border-color;
            &:hover, &:focus {
              border-color: $primary-font-color;
            }
          }
          .el-input__prefix {
            position: absolute;
            // height: rem(44);
            left: rem(12);
            top: 50%;
            @include transform(translate(0, -50%));
          }
          .el-input__suffix {
            right: rem(12);
          }
          .validateCode {
            position: relative;
            .code-input{
              width: vw(232);
              width: calc(100% - 88px - 10px);
              width: -moz-calc(100% - 88px - 10px);
              width: -webkit-calc(100% - 88px - 10px);
              max-width: calc(100% - 48px);
              max-width: -moz-calc(100% - 48px);
              max-width: -webkit-calc(100% - 48px);
            }
            .codeImg {
              position: absolute;
              right: 0;
              width: rem(88);
              height: rem(42);
              min-height: 20px;
              min-width: 44px;
            }
            .form-item_error {
              margin-top: vw(10);
              height: vw(22);
              line-height: vw(22);
              font-size: rem(14);
              img {
                vertical-align: middle;
                width: rem(16);
              }
              span {
                color: $color-646466;
                vertical-align: middle;
              }
            }
          }
          .login-btn {
            margin-top: vw(40);
            margin-bottom: vw(12);
            height: vw(44);
            line-height: vw(44);
            .el-form-item__content {
              height: 0;
            }
            .el-button {
              width: 100%;
              height: vw(50);
              min-height: 30px;
              font-size: rem(14);
              box-shadow: 0px 4px 10px 0 rgba(76, 132, 255, 0.5);
              border-radius: rem(50);
              &:hover {
                background-color: $hover-color;
                border-color: $button-primary-color;
              }
            }
          }
          .forget-pwd-btn {
            text-align: right;
            height: rem(16);
            line-height: rem(16);
            .el-form-item__content {
              height: rem(16);
              line-height: rem(16);
            }
            .el-button {
              margin: tRem(16) vw(20) 0 0;
              font-size: rem(14);
              color: $primary-font-color;
              padding: 0;
              border: none;
              background: none;
            }
          }
        }
      }
    }
  }
}

</style>