<template>
	<div class="hotnav">
		  <!--
          	作者：524238580@qq.com
          	时间：2018-12-16
          	描述：滚动区
          -->
		 <div class="hotnav-container">
		 	   <div class="hotnav-wraper" v-if="homenav.length>0">
		    <div class="hont-items" v-for="(item,index) of homenav":key='index'>
		    	<img :src="item.iconurl"  />
		    	<span>{{item.icontitle}}</span>
		    </div>
		 </div>
		</div>
		<!-- 作者：524238580@qq.com 时间：2018-12-16  描述：进度条-->
     <div class="bgscroll">
     	  <div class="scroll" :style="getScrollX"></div>
     </div>     
	</div>
	
</template>

<script>
	import { mapState } from 'vuex'
	 export default {
	 	 name:"HotNav",
	 	 data () {
	 	 	  return {
	 	 	  	 //屏幕宽度
	 	 	    clienWidth : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
	 	 	    //图标宽度
	 	 	    containerWidth:12,
	 	 	     // 背景调宽度
	 	 	    bgscroll:3,
	 	 	    //滚动的宽度
	 	 	    scrollWidth:0,
	 	 	    //开始触摸事件的位置
	 	 	    startflag:0,
	 	 	    //结束触摸事件的位置
	 	 	    endflag:0,
	 	 	    //滚动条滚动的距离
	 	 	    scrollMove:0
	 	 	  }
	 	 },
	 	 mounted () {
	 	 	 this.getScrollWidth(),
	 	 	 this.bindEvent()
	 	 },
	 	 methods:{
	 	 	 getScrollWidth () {
	 	 	 	 this.scrollWidth = this.bgscroll * (this.clienWidth / this.containerWidth)/52
	 	 	 },
	 	 	 bindEvent () {
	 	 	 	  this.$el.addEventListener('touchstart',this.handleStartTouch,false);
	 	 	 	  this.$el.addEventListener('touchmove',this.handleStartMove,false);
	 	 	 	  this.$el.addEventListener('touchend',this.handleEndMove,false);
	 	 	 },
	 	 	  //开始触摸事件
	 	 	 handleStartTouch (event) {
	 	 	 	 // 求出触摸事件的位置
	 	 	 	 let touch = event.touches[0];
	 	 	 	 //第一个触点
	 	 	 	 this.startflag = touch.pageX
	 	 	 },
	 	 	   //开始移动事件
	 	 	 handleStartMove () {
	 	 	 	 //求出滚动条的第一个触点
	 	 	 	 let touch = event.touches[0];
	 	 	 	 //滚动条的滚动距离 = 移动的距离-第一个触电
	 	 	 	 let moveWidth = Number(touch.pageX)-this.startflag;
	 	 	 	 this.scrollMove =-((this.bgscroll / this.containerWidth ) * moveWidth - this.endflag)/52;
	 	 	 	 //边界值处理
	 	 	 	  if (this.scrollMove <= 0 ){
	 	 	 	  	this.scrollMove = 0
	 	 	 	  }else if (this.scrollMove >= this.bgscroll-this.scrollWidth){
	 	 	 	  	this.scrollMove = this.bgscroll-this.scrollWidth
	 	 	 	  }
	 	 	 },
	 	 	   //结束移动事件
	 	 	 handleEndMove () {
	 	 	  this.endflag = this.scrollMove
	 	 	 }
	 	 },
	 	 computed:{
	 	 	  getScrollX () {
	 	 	  	return {
	 	 	  		width:`${this.scrollWidth}rem`,
	 	 	  		left:`${this.scrollMove}rem`
	 	 	  	}
	 	 	  },
	 	 	  ...mapState(['homenav']),
	 	 },
	 	 mounted(){
	 	 	this.$store.dispatch('reqHomeNav')
	 	 }
	 }
	
</script>
<style lang="stylus" scoped>
   .hotnav
      height:3.6rem
      width:100%
      background:#fff
      position:relative
      margin:.05rem 0
      .hotnav-container
         width:100%
         overflow-x:scroll
      .hotnav-container::-webkit-scrollbar
         display:none
	      .hotnav-wraper
	         display:flex
	         flex-wrap:wrap
	         width:12rem
	         .hont-items
	            display:flex
	            flex-direction:column
	            justify-content:center
	            align-items:center
	            height:1.7rem
	            width:1.5rem
	            img
	              width:50%
	            span
	              color:#ccc
	              margin-top:.1rem  
         .bgscroll
            height:.1rem
            width:3rem
            background:#ccc
            position:absolute
            left:50%
            margin-left:-2rem
            bottom:.05rem
            border-radius:.2rem
            .scroll
              height .1rem
              background #d00
              position absolute
              left 0
              width 0
              border-radius .2rem
            
</style>
