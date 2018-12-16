<template>
	  <div class="tab-bottom">
	     <div class='item ' 
	     	 @click="switchTo('/home')"
	     	 :class="{on:$route.path.includes('/home')}"
	     >
	     	  <span  class="iconfont items-icon" >&#xe630;</span>
	     	  <span class="items-title">首页</span>
	     </div>
	      <div class='item'  
	      	   @click="switchTo('/recommend')"
	      	   :class="{on:$route.path.includes('/recommend')}"
	      >
	     	  <span  class="iconfont items-icon">&#xe60e;</span>
	     	  <span class="items-title">推荐</span>
	     </div>
	      <div class='item'  
	      	   @click="switchTo('/search')"
	      	   :class="{on:$route.path.includes('/search')}"
	      >
	     	  <span  class="iconfont items-icon">&#xe632;</span>
	     	  <span class="items-title">搜索</span>
	     </div>
	      <div class='item' 
	      	   @click="switchTo('/chart')"
	      	   :class="{on:$route.path.includes('/chart')}"
	      >
	     	  <span  class="iconfont items-icon">&#xe7dc;</span>
	     	  <span class="items-title">聊天</span>
	     </div>
	      <div class='item'  
	      	   @click="switchTo('/person')"
	      	   :class="{on:$route.path.includes('/person')}"
	      >
	     	  <span  class="iconfont items-icon">&#xe60a;</span>
	     	  <span class="items-title">个人中心</span>
	     </div>
	      
	  </div>
</template>

<script>
	export default {
		name:"tabBar",
		methods:{
			switchTo(path){
				this.$router.replace(path)
			}
		}
	}
	
</script>

<style lang="stylus" scoped>
	.tab-bottom
	   height:1.2rem
	   width:100%
	   position:fixed
	   background:#fff
	   bottom:0
	   display:flex
	   justify-content:center
	   align-items:center
	   z-index:999
	   .item
	      display:flex
	      flex-direction:column
	      justify-content:center
	      align-items:center
	      margin:0 .4rem
	      .items-icon
	         font-size:.5rem
	      .items-title
	         margin-top:.06rem
	   .on
	      color:#d00
</style> 