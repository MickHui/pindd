import 	Vue from 'vue'
import {
	HOME_CASUAL,
	HOME_NAV,
	HOME_SHOP_LIST,
	RECOMMEND_LIST,
	SEARCH_LIST,
	USER_INFO,
	RESET_USER_INFO,
	CART_LIST,
	ADD_CART_LIST,
	REDUCE_CART_LIST,
	IS_SELECT_ALL,
	SINGLE_SELECT,
	DEL_SINGLE_CART
}from './mutation-types'
export default {
	 [HOME_CASUAL](state,{homecasual}){
	 	 state.homecasual = homecasual
	 },
	 [HOME_NAV](state,{homenav}){
	 	 state.homenav = homenav
	 },
	 [HOME_SHOP_LIST](state,{homeshoplist}){
	 	 state.homeshoplist = homeshoplist
	 },
	 [RECOMMEND_LIST](state,{recommendlist}){
	 	 state.recommendlist = recommendlist
	 },
	 [SEARCH_LIST](state,{searchlist}){
	 	 state.searchlist = searchlist
	 },
	 [USER_INFO](state,{userInfo}){
	 	 state.userInfo = userInfo
	 },
	 [RESET_USER_INFO](state){
	 	 state.userInfo = {}
	 },
	  [CART_LIST](state,{cartList}){
	 	 state.cartList = cartList
	 },
	 [ADD_CART_LIST](state,{goods}){
	 	 goods.buy_count++;
	 },
	 [REDUCE_CART_LIST](state,{goods}){
	 	  if(goods.buy_count>1){
	 	  	goods.buy_count--;
	 	  } else{
	 	  	goods.buy_count=1;
	 	  	//如果想要商品直接删除
	 	  	//const index = state.cartList.indexOf(goods);
	 	  	  //state.cartList.splice(index,1);
	 	  } 
	 },
	[IS_SELECT_ALL](state,{isShowChecked}){
	   state.cartList.forEach((goods,index)=>{
	   	 if(goods.checked){
	   	 	 goods.checked=!isShowChecked
	   	 }else{
	   	 	Vue.set(goods,'checked',!isShowChecked)
	   	 }
	   })
	},
	[SINGLE_SELECT](state,{goods}){
	   if(goods.checked){
	   	 goods.checked = !goods.checked
	   }else{
	   	 Vue.set(goods,'checked',true)
	   }
	},
	[DEL_SINGLE_CART](state,{goods}){
	  const index = state.cartList.indexOf(goods);
	  state.cartList.splice(index,1)
	}
}