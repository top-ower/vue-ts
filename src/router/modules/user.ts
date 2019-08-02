export default [
	{
    path: '/index',
    name: 'Index',
    component: () => import ('@/views/Index.vue'),
    meta: {
      keepAlive: true,
      title: '调用vuex'
    }
	},
	{
    path: '/login',
    name: 'login',
    component: () => import ('@/views/login/index.vue'),
    meta: {
      keepAlive: true,
      title: '登录'
    }
	}
]
