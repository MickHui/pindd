import Vue from 'vue'
import Router from 'vue-router'

//一级路由
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Chart from '@/pages/Chart/Chart'
import Person from '@/pages/Person/Person'
import Login from '@/pages/Login/Login'


//二级路由
import Hot from '@/pages/Home/children/Hot/Hot'
import Dress from '@/pages/Home/children/Dress'
import Goods from '@/pages/Home/children/Goods'
import Food from '@/pages/Home/children/Food'
import Xiebao from '@/pages/Home/children/Xiebao'
import Neiyi from '@/pages/Home/children/Neiyi'
import Cloth from '@/pages/Home/children/Cloth'
import Baby from '@/pages/Home/children/Baby'
import Electrical from '@/pages/Home/children/Electrical'
import MeSetting from '@/pages/Person/components/MeSetting'
import Detail from '@/pages/Person/components/Detail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children:[
           {path:'hot',component:Hot ,meta:{showBottomTabBar:true}},
           {path:'dress',component:Dress },
           {path:'goods',component:Goods },
           {path:'food',component:Food },
           {path:'xiebao',component:Xiebao },
           {path:'neiyi',component:Neiyi },
           {path:'cloth',component:Cloth },
           {path:'baby',component:Baby },
           {path:'electrical',component:Electrical },
           {path:'/home',redirect:'/home/hot' },
      ]
    },
     {
      path: '/search',
      name: 'Search',
      component:Search,
      meta:{showBottomTabBar:true}
    },
     {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend,
      meta:{showBottomTabBar:true}
    },
     {
      path: '/Person',
      name: 'Person',
      component: Person,
      meta:{showBottomTabBar:true}
    }, 
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart,
      meta:{showBottomTabBar:true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/setting',
      name: 'MeSetting',
      component: MeSetting
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      redirect:'/home',
    }
  ]
})
