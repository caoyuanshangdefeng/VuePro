// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

//1.创建router文件夹
//2.创建index.js文件
//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载,定义变量来保存,统一管理,动态导入,一个懒加载对应一个js文件,
const Home = () => import ('../components/Home')

const HomeNews = () => import ('../components/HomeNews')
const HomeMessage = () => import ('../components/HomeMessage')

const About = () => import ('../components/About')
const User = () => import ('../components/User')

const Profile=()=>import('../components/Profile')

//1.通过Vue.use(插件),安装插件
Vue.use(VueRouter)

//2.创建路由对象,router实例
//配置路由和组件的
const routes=[
  //路由的默认路径
  // 特殊路径特殊对待
  {
    path:'/',
    redirect:'/home'

  },
  {
    path:'/home',
    component:Home,
    meta:{
      title:'首页',
    },
    children:[
      {
        path:'',
        redirect:'news',
      },
      {
      path:'news',
      component:HomeNews,
      },
      {
        path:'message',
        component:HomeMessage,
      },
      
  ]
  },
  {
    path:'/about',
    component:About,
    meta:{
      title:'关于',
    },

  },
  {
    path:'/user/:userID',
    component:User,
    meta:{
      title:'用户',
    },

  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      title:'档案',
    },

  },

]

const router = new VueRouter({
  //
 routes,
 mode:'history',
 linkActiveClass:'active'

})


// 前置钩子函数属于全局守卫
router.beforeEach((to,from,next)=>{
  // beforeEach中必须调用next(),没有next()就不会进行下一步
  // 从from跳到to
  document.title=to.matched[0].meta.title;
	console.log('beforeEach');
	next()
})

// 后置钩子属于全局守卫
router.afterEach((to,from)=>{
  console.log('afterEach');


})







export default router


