<template>
	 <a class="recommend-item" >
       <img :src="item.thumb_url" v-if="item.thumb_url" />
       <h4 class="recommend-title">{{item.short_name}}</h4>
       <div class="item-bottom">
          <span class="item-price">¥{{item.price / 100}}</span>
          <span class="item-sales">{{item.sales_tip}}</span>
          <button class="item-btn" @click="BackClickBtn(item)">加入购物车</button>
      </div>
	 </a>
</template>

<script>
	 export default {
	 	  name:"ShopList",
	 	  props:{
        item: Object,
        BackClickBtn:{
        	type:Function,
        	default:()=>{}
        }
	 	  }
	 }
	
</script>

<style lang="stylus">
 .recommend-item:nth-child(2n-1)
        margin-right:2%
     .recommend-item
        width:49%
        height:5rem
        background #fff
        padding-bottom .1rem
        margin-bottom .1rem
        position:relative
        img
          width:100%  
        .recommend-title
           padding:0 .1rem
           line-height:.4rem 
           font-size:.26rem 
           display:flex
           flex-wrap wrap
           overflow hidden
        .item-bottom 
           position:absolute
           left:0
           right:0
           bottom:.1rem
           height:.5rem
           padding:0 .1rem
           display:flex
           flex-direction:row
           align-items:center
           .item-price
              font-size:.3rem
              color:#d00
           .item-sales 
              font-size:.24rem
              color:#ccc
              margin-left:.1rem
           .item-btn  
              background:#d00
              width:1.5rem
              position:absolute
              right:.1rem
              color:#fff
              border-radius:.1rem
                
	
	
</style>