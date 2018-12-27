<template>
  <div id="app">
  	<keep-alive includes="Detail">
  <router-view></router-view>
  </keep-alive>
   <tab-bar v-show="$route.meta.showBottomTabBar"></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar'
export default {
  name: 'App',
  created(){
  	this.$store.dispatch('reqUserInfo')
  },
  components:{
  	tabBar
  }
}
</script>

<style lang='stylus' >
  #app
     height 100%
     width 100%
     background #f5f5f5
</style>
