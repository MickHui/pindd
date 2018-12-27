import ajax from './ajax'

//1.基础路径
const BASE_URL = '/api';
//2.1获取首页轮播图数据
export const getHomeCasual =()=>ajax(BASE_URL+"/api/homecasual");
//2.2获取首页导航数据
export const getHomeNav =()=>ajax(BASE_URL+"/api/homenav");
//2.3获取首页商品列表数据
export const getHomeShopList =()=>ajax(BASE_URL+"/api/homeshoplist");
//2.4获取推荐页列表数据数据
export const getRecommendList =()=>ajax(BASE_URL+"/api/recommendlist");
//2.5获取搜索页面请求
export const getSearchlist =()=>ajax(BASE_URL+"/api/searchlist");
//2.6短信验证请求
export const getPhoneCode =(phone)=>ajax(BASE_URL+"/api/sendcode",{phone});
//2.7手机验证吗登陆验证
export const phoneCodeLogin =(phone,code)=>ajax(BASE_URL+"/api/login_code",{phone,code},'POST');
//2.8账号密码登陆
export const pwdLogin =(name,pwd,captcha)=>ajax(BASE_URL+"/api/login_pwd",{name,pwd,captcha},'POST');
//2.9短信验证请求
export const getUserInfo =()=>ajax(BASE_URL+"/api/user_info");
//3.0退出登陆接口
export const getLogOut=()=>ajax(BASE_URL+"/api/logOut");
//3.1修改用户信息
export const changUserInfo=(id,user_name,user_sex,user_address,user_birthday,user_sign)=>ajax(BASE_URL+"/api/chang_userInfo",{
	  id,
	  user_name,
	  user_sex, 
	  user_address, 
	  user_birthday,
	  user_sign
},'POST');
//3.2添加购物车接口
export const addCart=(user_id,goods_id,goods_name,thumb_url,price)=>ajax(BASE_URL+"/api/addCart",{
	  user_id,
	  goods_id,
	  goods_name, 
	  thumb_url, 
	  price,
},'POST');
//3.3获取购物车数据
export const getCartList =()=>ajax(BASE_URL+"/api/getCartList");