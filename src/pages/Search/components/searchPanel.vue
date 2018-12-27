<template>
	  <div class="searchpanel">
	     <div class="panel-wraper border-bottom">
	       <div class="panel-content">
	        	<span class="iconfont">&#xe632;</span>
	        	 <input ref="mysearch" class="panel-input" type="text" placeholder="面巾纸" />  
	       </div>
	     	  <button class="panel-btn" @click="isShowPanel(false)">取消</button>
	     </div>
	      <div class="panel-item">
	      	 <div class="item-title">
	      	 	  <span class="iconfont">&#xe663;</span>
	             <span>热门搜索</span>
	      	 </div>
	      	  <ul class="item-list">
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>	 
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  	 <li class="item-list-detail">纸抽批发</li>
	      	  </ul>
	      	
	      	
	      </div>
	 </div>
	
</template>

<script>
	export default {
		name:"searchPanel",
		props:{
			isShowPanel:Function
		},
		mounted(){
			this.$refs.mysearch.focus();
		}
	}
</script>

<style lang="stylus" scoped>
   .searchpanel
      height:100%
      width:100%
      background:#fff
      position:absolute
      top:0
      left:0
      z-index:10000
      .panel-wraper
         height:1.2rem
         width:100%
         display:flex
         flex-direction:row
         justify-content:center
         align-items:center
         .panel-content
           padding-left:.3rem
           height:.7rem
           width:100%
           line-height:.7rem
           border-radius:.2rem
           margin-left:.3rem
           background:#eee
           .panel-input
              background:#eee
         .panel-btn
           height:.7rem
           width:1.5rem 
           background:#fff
      .item-title
         height:.8rem
         width:100%
         line-height:.8rem
         font-size:.3rem
         color:#aaa
      .item-list
        display:flex
        flex-direction row
        flex-wrap wrap
        padding-left:.3rem
        .item-list-detail
           padding:.2rem
           border-radius:.2rem
           color:#aaa
         

</style>