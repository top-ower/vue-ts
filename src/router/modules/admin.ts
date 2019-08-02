export default [
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: () => import ('@/views/HelloWorld.vue'),
    meta: {
      keepAlive: true,
      title: '测试'
    }
	}
]