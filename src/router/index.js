import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',

    component: () => import(/* webpackChunkName: "about" */ '../views/Home/index.vue')
  }
]

const router = new VueRouter({
  routes
})

// 未登录就跳转到登录界面
router.beforeEach((to,from,next) => {

  if(to.matched.some( m => m.meta.auth)){

  // 对路由进行验证
    if(store.state.token) { // 已经登陆
    next()   // 正常跳转到你设置好的页面
    }
    else{
    // 未登录则跳转到登陆界面，query:{ Rurl: to.fullPath}表示把当前路由信息传递过去方便登录后跳转回来；
      next({path:'/login',query:{ Rurl: to.fullPath} })
    }
  }else{
      next()
  }
})

export default router
