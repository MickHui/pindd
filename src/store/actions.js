import {
	getHomeCasual,
	getHomeNav,
	getHomeShopList,
	getRecommendList,
	getSearchlist,
  getUserInfo	,
  getLogOut,
  getCartList
} from '../api'

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
} from './mutation-types';

export default {
	async reqHomeCasual({commit}) {
    const result = await getHomeCasual();
    commit(HOME_CASUAL, {homecasual:result.message.data})
  },
  async reqHomeNav({commit}) {
    const result = await getHomeNav();
    commit(HOME_NAV,{homenav:result.message.data})
  },
  async reqHomeShopList({commit}) {
    const result = await getHomeShopList();
    commit(HOME_SHOP_LIST,{homeshoplist:result.message.goods_list})
  },
   async reqRecommendList({commit}) {
    const result = await getRecommendList();
    commit(RECOMMEND_LIST,{recommendlist:result.message.data})
  },
   async reqSearchlist({commit}) {
    const result = await getSearchlist();
    commit(SEARCH_LIST,{searchlist:result.message.data})
  },
   async reqSearchlist({commit}) {
    const result = await getSearchlist();
    commit(SEARCH_LIST,{searchlist:result.message.data})
  },
   //获取个人信息
  syncUserInfo({commit},userInfo) {
    commit(USER_INFO,{userInfo})
  },
   //异步请求作为全局的验证信息
   async reqUserInfo({commit}) {
    const result = await getUserInfo();
     if(result.success_code===200){
     	commit(USER_INFO,{userInfo:result.message})
     }   
  },
  //退出登陆请求
   async logOut({commit}) {
    const result = await getLogOut();
    if(result.success_code===200){
    	commit(RESET_USER_INFO)
    }
  },
  //获取购物车数据的请求
  async reqCartList({commit}) {
    const result = await getCartList();
    if(result.success_code===200){
    commit(CART_LIST,{cartList:result.message})
    } 
  },
   //修改购物车数量的请求
  updateCartListCount({commit},{goods,isAdd}){
  	if(isAdd){
  		commit(ADD_CART_LIST,{goods})
  	}else{
  		 commit(REDUCE_CART_LIST,{goods})	
  	}
  },
  //购物界面是否全选请求
   isSelectAll({commit},{isShowChecked}){
  		commit(IS_SELECT_ALL,{isShowChecked})
   },
   //购物界面是否单选请求
   singleSelect({commit},{goods}){
  		commit(SINGLE_SELECT,{goods})
   }	,
   //购物车删除单个商品
   delsinglecart({commit},{goods}){
   	commit(DEL_SINGLE_CART,{goods})
   }
}	