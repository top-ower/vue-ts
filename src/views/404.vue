<template>
  <div style="background:#f0f2f5;margin-top: -20px;">
    <div class="wscn-http404">
      <div class="pic-404">
        <img class="pic-404__parent" :src="img_404" alt="404">
        <img class="pic-404__child left" :src="img_404_cloud" alt="404">
        <img class="pic-404__child mid" :src="img_404_cloud" alt="404">
        <img class="pic-404__child right" :src="img_404_cloud" alt="404">
      </div>
      <div class="bullshit">
        <div class="bullshit__oops">OOPS!</div>
        <div class="bullshit__info">版权所有<a class="link-type" href="https://wallstreetcn.com" target='_blank'>华尔街见闻</a></div>
        <div class="bullshit__headline">{{ message }}</div>
        <div class="bullshit__info">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
        <a href="#/dashboard" class="bullshit__return-home">返回首页</a>
      </div>
    </div>
  </div>
</template>

<script>
import img_404 from '@/assets/404_images/404.png'
import img_404_cloud from '@/assets/404_images/404_cloud.png'

export default {
  data() {
    return {
      img_404,
      img_404_cloud
    }
  },
  computed: {
    message() {
      return '特朗普说这个页面你不能进......'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '~styles/config.scss';
@import "~styles/mixin.scss";
.wscn-http404 {
  position: relative;
  width: vw(1200);
  margin: vw(20) auto vw(60);
  padding: 0 vw(100);
  overflow: hidden;
  .pic-404 {
    position: relative;
    float: left;
    width: vw(600);
    padding: vw(150) 0;
    overflow: hidden;
    &__parent {
      width: 100%;
    }
    &__child {
      position: absolute;
      &.left {
        width: vw(80);
        top: vw(17);
        left: vw(220);
        opacity: 0;
        animation-name: cloudLeft;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      &.mid {
        width: vw(46);
        top: vw(10);
        left: vw(420);
        opacity: 0;
        animation-name: cloudMid;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1.2s;
      }
      &.right {
        width: vw(62);
        top: vw(100);
        left: vw(500);
        opacity: 0;
        animation-name: cloudRight;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
        animation-delay: 1s;
      }
      @keyframes cloudLeft {
        0% {
          top: vw(17);
          left: vw(220);
          opacity: 0;
        }
        20% {
          top: vw(33);
          left: vw(188);
          opacity: 1;
        }
        80% {
          top: vw(81);
          left: vw(92);
          opacity: 1;
        }
        100% {
          top: vw(97);
          left: vw(60);
          opacity: 0;
        }
      }
      @keyframes cloudMid {
        0% {
          top: vw(10);
          left: vw(420);
          opacity: 0;
        }
        20% {
          top: vw(40);
          left: vw(360);
          opacity: 1;
        }
        70% {
          top: vw(130);
          left: vw(180);
          opacity: 1;
        }
        100% {
          top: vw(160);
          left: vw(120);
          opacity: 0;
        }
      }
      @keyframes cloudRight {
        0% {
          top: vw(100);
          left: vw(500);
          opacity: 0;
        }
        20% {
          top: vw(120);
          left: vw(460);
          opacity: 1;
        }
        80% {
          top: vw(180);
          left: vw(340);
          opacity: 1;
        }
        100% {
          top: vw(200);
          left: vw(300);
          opacity: 0;
        }
      }
    }
  }
  .bullshit {
    position: relative;
    float: left;
    width: vw(300);
    padding: vw(150) 0;
    overflow: hidden;
    &__oops {
      font-size: tRem(32);
      font-weight: 600;
      line-height: tRem(40);
      color: #1482f0;
      opacity: 0;
      margin-bottom: tRem(20);
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
    }
    &__headline {
      font-size: tRem(20);
      line-height: tRem(24);
      color: #1482f0;
      opacity: 0;
      margin-bottom: tRem(10);
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.1s;
      animation-fill-mode: forwards;
    }
    &__info {
      font-size: tRem(13);
      line-height: tRem(21);
      color: grey;
      opacity: 0;
      margin-bottom: vw(30);
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.2s;
      animation-fill-mode: forwards;
    }
    &__return-home {
      display: block;
      float: left;
      width: vw(110);
      height: vw(36);
      background: #1482f0;
      border-radius: vw(100);
      text-align: center;
      color: #ffffff;
      opacity: 0;
      font-size: tRem(14);
      line-height: tRem(36);
      cursor: pointer;
      animation-name: slideUp;
      animation-duration: 0.5s;
      animation-delay: 0.3s;
      animation-fill-mode: forwards;
    }
    @keyframes slideUp {
      0% {
        @include transform(translateY(60vw / 19.2));
        // transform: translateY(60vw / 19.2);
        opacity: 0;
      }
      100% {
        @include transform(translateY(0));
        // transform: translateY(0);
        opacity: 1;
      }
    }
  }
}

</style>
