<template>
  <div id="app">
  <router-view></router-view>
   <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar'
export default {
  name: 'App',
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
