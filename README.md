
## Use

```
npm i
npm run serve
npm run build
npm run lint
```


## Feature

- 基于 vue-cli 3
- 约定性的项目结构
- 集中管理的项目配置
- webpack require.context 实现 commonComponents router vuex 的自动注入
- 预留了 router axios 全局拦截器
- 开发环境默认启用 vuex 的严格模式、日志监控
- 可配置全局注入或按需加载 $axios $api $constants $utils 等服务
- 全局注入 scss-bem


## Framework

```
.
├── assets                              公共资源
│   ├── iconfonts                       阿里 iconfont
│   ├── images													图片
│   ├── styles													公共样式
│   └── icons														自定义svg图标
│
├── components    											公共组件
│
├── filters   												  组件内数据显示的过滤器
│ 
├── directives 													项目指令
│  	│											
│   └── auth														按钮、tab-pane等按权限显示														
│
├── local   												    页面内容显示国际化
│
├── router   												  	路由
│                           	
├── config                              项目配置，拦截器，开关
│   ├── interceptors                    拦截器配置
├── plugins                             插件配置（生成路由、请求、store 等实例，并挂载 Vue 实例）
├── routes                              公共路由
├── services                            服务层
│   ├── api                             ajax 请求模块
│   ├── constants                       constants 常量模块
│   ├── store                           vuex 状态模块
│   └── utils                           工具库
├── views
│   ├── components											内部模块组件
│   ├── layout													页面显示框架 （导航栏 显示区域）
│   └── 404	                            404页面
│ 
├── App.vue                             根页面
├── main                                根实例
.
```
## components

```
通用组件
components 中我们会存放 UI 组件库中的那些常见通用组件了，在项目中直接通过设置别名来使用，如果其他项目需要使用，就发到 npm 上。

结构
// components 简易结构
components
├── dist
├── build
├── src      
    ├── modal
    ├── toast
    └── ...
├── index.js             
└── package.json 
```

## License

MIT