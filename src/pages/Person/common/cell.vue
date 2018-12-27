<template>
   <div class="cell"> 
   	   <div class="cell-item" @click="clickCell(leftTitle)">
		   	   	<div class="cell-left" :style="leftTitleColor"  >
			   	  	 <span class="iconfont icon" v-html='leftIcon'></span>
			   	  	 <span>{{leftTitle}}</span>
		   	    </div>
			   	  <div class="cell-right" :style="rightTitleColor">
			   	  	  <span :style="{color:rightTitleColor}">{{rightTitle}}</span>
			   	 	    <span v-show="isShowrightIcon" class="iconfont">&#xe62e;</span>
			   	  </div>
   	   </div>
   </div>
</template>

<script>
	export default{
		name:"Cell",
		props:{
			 leftTitle:{type:String,default:''},
			 leftIcon:{type:String,default:''},
			 leftTitleColor:{type:String,default:''},
			 rightTitle:{type:String,default:''},
			 rightTitleColor:{type:String,default:''},
			 isShowrightIcon:{type:Boolean,default:true},
			 clickCell:{type:Function,default:()=>{}},
		}
	}
</script>

<style lang="stylus" scoped>
  .cell-item
     display:flex
     flex-direction:row
     height:1rem
     background:#fff
     align-items:center
     justify-content:space-between
     padding:0 .2rem
     border-bottom: .01rem solid #ccc
     .icon
        color:#ccc
        margin-right:.1rem

</style>				