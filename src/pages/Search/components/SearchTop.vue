<template>
	<div class="searchtop border-bottom">
		  <div class="search-input " @click.prevent="isShowPanel(true)">
		  	<span class="iconfont">&#xe632;</span>
		  	 <span>鞋包女装</span>
		  </div>
	</div>
</template>

<script>
	export default {
		name:'SearchTop',
		props:{
			isShowPanel:Function
		}
	}
</script>

<style lang="stylus" scoped>
   .searchtop
      height:1.2rem
      width:100%
      display:flex
      justify-content:center
      background:#fff
      align-items:center      
      .search-input
         background:#fff
         width:100%
         height:.8rem
         text-align:center
         line-height:.8rem
         background:#f5f5f5
         border-radius:.2rem
         margin:0 .3rem
        

</style>