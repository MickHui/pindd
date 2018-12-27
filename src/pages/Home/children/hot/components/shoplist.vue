<template>
	<div class="shoplist" v-if="homeshoplist.length>0">
		   <ul>
		   	<li class="shoplist-item" v-for="(item,index) of homeshoplist" :key="index">
		   		<div class="item-img">
		   		  <img :src="item.image_url" />
		   		</div>
		   		<div class="item-infor">
		   			<h4 class="item-infor-title">{{item.goods_name}}</h4>
		   			<div class="item-infor-detail">
		   				<span class="item-infor-detail-price">￥{{item.normal_price / 100}}</span>
		   				<span class="item-infor-detail-count">{{item.sales_tip}}</span>
		   				 <span class="item-infor-detail-touxiang">
		   				 	 <img :src="user.avatar" alt="" v-for="(user, index1) in item.bubble" :key="index1">
		   				 </span>
		   				 <button class="item-infor-detail-btn">去拼单></button>
		   			</div>
		   		</div>
		   	</li>
		   		<li class="shoplist-item">
		   		<div class="item-img">
		   		  <img src="//t00img.yangkeduo.com/goods/images/2018-12-14/e6b4a980663e7121874dfc70c8b2f399.jpeg" />
		   		</div>
		   		<div class="item-infor">
		   			<h4 class="item-infor-title">加绒/不加绒加厚丝绒运动裤女冬季保暖BF风哈伦裤休闲裤卫裤长裤</h4>
		   			<div class="item-infor-detail">
		   				<span class="item-infor-detail-price">￥26.9</span>
		   				<span class="item-infor-detail-count">已拼5345件</span>
		   				 <span class="item-infor-detail-touxiang">
		   				 	<img src="../../../../../../static/images/user1.jpg"  />
		   				 	<img src="../../../../../../static/images/user2.jpg"  />
		   				 </span>
		   				 <button class="item-infor-detail-btn">去拼单></button>
		   			</div>
		   		</div>
		   	</li>
		   </ul>
	</div>  
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name:"HotShoplist",
		mounted () {
			this.$store.dispatch('reqHomeShopList')
		},
		computed:{
			...mapState(['homeshoplist'])
		}
	}
</script>

<style lang="stylus" scoped>
.shoplist
  margin-bottom:1.2rem
  .shoplist-item
     height:4.6rem
     width 100%
     background:#f5f5f5
     margin:.1rem 0
     .item-img
        height:2.8rem
        overflow hidden
        img
          width 100%
     .item-infor-title
        padding:0 .2rem
        margin-top:.05rem
        display:flex
        flex-wrap:wrap
        overflow:hidden
        line-height:.4rem
     .item-infor-detail 
        display:flex
        margin-top:.1rem
        align-items:center  
        position:relative
        padding: 0 .2rem
        height:.8rem
        .item-infor-detail-price
           color:#d00
           font-size:.34rem
           font-weight:bolder
        .item-infor-detail-count
           color:#ccc
           font-size:.22rem
        .item-infor-detail-btn
           position:absolute
           right:.2rem
           bottom:.08rem
           background:#d00
           color:#fff
           width:2rem
           height:.6rem
           border-radius:.1rem
        .item-infor-detail-touxiang
           height: .6rem
           width:.6rem
           display:flex
           flex-direction:row
           margin-left:1.5rem
           img
             width:100% 
             border-radius:50%
         
       
          

</style>