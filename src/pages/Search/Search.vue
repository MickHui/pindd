<template>
	<div class="search">
		 <!--搜索导航-->
		<search-top :isShowPanel="isShowPanel">
		</search-top>
		 <!--联动列表-->
		 <div class="shop">
		   <div class="menu-wraper">
		      <ul>
		      	<!--
              	作者：524238580@qq.com
              	时间：2018-12-17
              	描述：current
                  -->
		        <li 
		        	class="menu-item" 
		        	v-for="(item,index) of searchlist" 
		        	:key="index"
		        	:class='{current: index === currentIndex}'
		        	ref="menulist"
		        	@click="changeItem(index)"
		        >
		        {{item.name}}
		        </li>      
		      </ul>
		   </div>
		   <div class="list-wraper">
		   	 <ul ref="shopsParent">
		   	 	 <li 
		   	 	 	  v-for='(goods,index) of searchlist' 
		   	 	 	  :key="index"
		   	 	 	  class="shop-list"
		   	 	 >
		   	 	 	 <div class="list-infor">
		   	 	 	 	  <h4 class="list-title">{{goods.name}}</h4>
		   	 	 	 	  <button class="list-more">查看更多></button>
		   	 	 	 </div>
		   	 	 	 <ul class="phone-type" v-if="goods.tag === 'phone'">
              <li v-for="(phone, index) in goods.category" :key="index">
                <img :src="phone.icon" alt="">
              </li>
            </ul>
		   	 	 	  <ul class="list-shop">
		   	 	 	  	<li class="list-items" v-for="(item,index2) of goods.items" :key="index2">
		   	 	 	  		<img :src="item.icon" />
		   	 	 	  		<span class="detail-title">{{item.title}}</span>
		   	 	 	  	</li>
		   	 	 	  </ul>
		   	 	 </li>
		   	 </ul>	   	 
		   </div>
		 </div>
		  <!--搜索面板-->
		  <search-panel v-if="isShow" :isShowPanel="isShowPanel">
		  	
		  	
		  	
		  </search-panel>
	</div>
</template>

<script>
	import { mapState } from	 'vuex'
	import BScroll from 'better-scroll'
	import SearchTop  from './components/SearchTop'
	import searchPanel from './components/searchPanel'
	export default {
		name:"SearchTopSearch",
		data () {
			return {
				scrollY,
				rightTops:[],
				isShow:false
			}
		},
		components:{
			SearchTop,
			searchPanel
		},
		mounted(){
			this.$store.dispatch('reqSearchlist');
		},
		computed:{
			...mapState(['searchlist']),
			currentIndex(){
				const {scrollY,rightTops} = this;
				return rightTops.findIndex((tops,index)=>{
					 this._leftScroll(index);
					 return scrollY >=tops && scrollY <rightTops[index+1]
				})
			}
		},
		watch:{
			searchlist () {
				this.$nextTick(()=>{
					this._initBScroll();
					//求出右侧板块所有的高度
					this._initrightTops ();
				})
			}
		},
		methods:{
			_initBScroll () {
				this.leftscroll = new BScroll('.menu-wraper')
				this.rightscroll = new BScroll('.list-wraper',{
					probeType:3
				});
				this.rightscroll.on('scroll',(pos)=>{
					 this.scrollY = Math.abs(pos.y);
				})
			},
			_initrightTops () {
				const temArr = [];
				let top = 0;
				 temArr.push(top);
				let allies = this.$refs.shopsParent.getElementsByClassName('shop-list');
				Array.prototype.slice.call(allies).forEach(li=>{
	         top += li.clientHeight;
	         temArr.push(top);
				})
				this.rightTops = temArr;
			},
			_leftScroll (index) {
				 const menulists =this.$refs.menulist;
				 let el = menulists[index];
				 this.leftscroll.scrollToElement(el,300,0)
			},
			changeItem (index) {
				 this.scrollY = this.rightTops[index];
				 this.rightscroll.scrollTo(0,-this.scrollY,300)
			},
			isShowPanel(flag){
				 this.isShow = flag
			}
		}
	}
</script>
<style lang ='stylus' scoped>
 .search
    height 100%
    width 100%
    background #F5F5F5
    .shop
       display:flex
       position:absolute
       top:1.2rem
       bottom:1.2rem
       width:100%
       background:#d00
       overflow:hidden
       .menu-wraper
          width:1.5rem
          background #eee
          .menu-item
             display:flex
             justify-content:center
             align-items:center
             line-height:1rem
          .current::before
             content:''
             height:.5rem
             width:.03rem
             background:#d00
             position:absolute
             left:0
          .current
             color:#d00 
             background #fff 
        .list-wraper
           width:100%
           background:#fff         
           .list-infor
              display:flex
              flex-direction row
              justify-content:space-between
              height:.7rem
              background:#f5f5f5
              line-height:.8rem
              padding:0 .2rem
              color:#999
              .list-title
                 font-size:.3rem
              .list-more
                 color:#999
                 background:none
        .list-shop 
           display:flex
           flex-wrap wrap        
           .list-items
              display:flex
              margin:.1rem 0
              flex-direction:column
              justify-content:center
              align-items:center
              width:33.3%
              img
                width:50%
              .detail-title
                 line-height:.6rem
                 color:#ccc
                 font-size:.3rem
      .phone-type
        width 100%
        display flex
        flex-direction row
        flex-wrap wrap
        li
          width 33.3%
          display flex
          justify-content center
          align-items center
          margin .1rem 0
          img
            width 70%            
</style>

