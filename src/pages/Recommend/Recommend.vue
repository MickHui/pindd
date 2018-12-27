<template>
   <div class="recommend" >
      <ul class="recommned-container" v-if="userInfo.id && recommendlist.length >= 0">
	      <shop-list
          tag="li"
          v-for="(item, index) in recommendlist"
          :item = item
          :key="index"
          :BackClickBtn="addCart"
        />
      </ul>
      <select-login v-else></select-login>
   </div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapState } from 'vuex'
	import ShopList from './../../components/recommendlist/recommendlist';
	import { addCart } from '@/api/index'
	import SelectLogin from '@/pages/Login/SelectLogin'
	export default {
		name:'Recommend',
		mounted () {
			this.$store.dispatch('reqRecommendList')
		},
		computed:{
			...mapState(['recommendlist','userInfo'])
		},
		components:{
			 ShopList,
			 SelectLogin
		},
		watch:{
			recommendlist(){
			  this.$nextTick(()=>{
			  		this._BScrolllist();
			  })
			}
		},
		methods:{
			_BScrolllist () {
			  this.scroll = new BScroll('.recommend',{
			  	 scrollY:true,
			  	 probeType:true
			  })
			},
			async addCart(goods){
				console.log(goods)
				let result = await addCart(this.userInfo.id, goods.goods_id, goods.goods_name, goods.thumb_url,goods.price);
				console.log(result)
			}
		}
	}
</script>

<style lang ='stylus' scoped>
 .recommend
    height 100%
    width 100%
    background #F5F5F5
    .recommned-container
       display:flex
       flex-wrap wrap
       background #F5F5F5
       padding-bottom:1.2rem
     
                      
</style>