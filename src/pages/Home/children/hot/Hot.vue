<template>
	 <div class="hot">
			<div class="hot-swiper">
				<div class="swiper-container" v-if="homecasual.length>0">
					<div class="swiper-wrapper" >
					<div class="swiper-slide"  v-for="(item,index) of homecasual" :key="index">
						<img :src="item.imgurl"/>
					</div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>
			  </div>
			</div>
			<hot-nav></hot-nav>
			<hot-shoplist></hot-shoplist>
	 </div>
</template>

<script>
	import { mapState } from 'vuex'
	import Swiper from 'swiper'
	import HotNav from './components/HotNav'
	import HotShoplist from './components/shoplist'
	import 'swiper/dist/css/swiper.min.css'
	export default {
		name:"Hot",
		components:{
			HotNav,
			HotShoplist
		},
		computed : {
			...mapState(['homecasual'])
		},
		watch:{
			homecasual (){
				this.$nextTick(()=>{
					//创建swiper实例
		 new Swiper('.swiper-container',{
		 	    // 循环模式选项
          loop: true,
          //自动循环
          autoplay:true,
		    // 如果需要分页器
			    pagination: {
			      el: '.swiper-pagination'
			    },
		    })
				})
			}
		},
		mounted () {
			this.$store.dispatch('reqHomeCasual')
		}
	}
</script>

<style lang="stylus" scoped>
 .hot
    height:100%
    width:100%
    padding-top:.9rem
    background:#f5f5f5
    .hot-swiper
       overflow:hidden
       height:0
       padding-bottom:38%
       background:#ccc
       img
         width:100%
</style>

