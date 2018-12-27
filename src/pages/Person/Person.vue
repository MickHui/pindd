<template>
     <div v-if="userInfo.id">
        <top></top>
     </div>
  	<select-login v-else>
	 	
	 	
	 </select-login>
  </div>
</template>


<script>
	import SelectLogin from '@/pages/Login/SelectLogin';
	import Top from './components/top';
	import { mapState } from 'vuex';
	export default {
		name:"Person",
	  components:{
		   SelectLogin,
		   Top
	  },
	  computed:{
	  	...mapState(['userInfo'])
	  }
	}
</script>

<style lang ='stylus' scoped>
 .person
    height 100%
    width 100%
    background #F5F5F5
</style>