import Vue from 'vue'

declare module "*.vue" {
  export default Vue;
}
//Tip:如果要识别第三方插件可以在此添加申明
declare module 'vue/types/vue' {
  interface Vue {
    $wx: any, //自定义微信接口
  }
}