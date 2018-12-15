import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import Recommend from '@/pages/Recommend/Recommend'
import Search from '@/pages/Search/Search'
import Chart from '@/pages/Chart/Chart'
import Person from '@/pages/Person/Person'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
     {
      path: '/search',
      name: 'Search',
      component:Search
    },
     {
      path: '/Recommend',
      name: 'Recommend',
      component: Recommend
    },
     {
      path: '/Person',
      name: 'Person',
      component: Person
    }, 
    {
      path: '/Chart',
      name: 'Chart',
      component: Chart
    },
       {
      path: '/',
      redirect:'/home'
    }
  ]
})
