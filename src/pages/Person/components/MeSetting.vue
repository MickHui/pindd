<template>
   <div class="me-setting">
   	 <div class="setting-pay">
   	  <cell :clickCell="dealCellClick"   left-icon="&#xe6d2;"  left-title="免密支付设置"></cell>
   	  <cell :clickCell="dealCellClick"  left-icon="&#xe6a2;"  left-title="免拼单设置"></cell>
   	  <cell :clickCell="dealCellClick" left-icon="&#xe641;" left-title="接收消息设置"></cell>
   	 </div>
   	  <div  class="setting-suggestion"   style="margin-top:.2rem">
   	  <cell :clickCell="dealCellClick" left-icon="&#xe648;" left-title="常见问题"></cell>
   	  <cell :clickCell="dealCellClick" left-icon="&#xe616;" left-title="意见反馈"></cell>
   	 </div>
   	  <div class="setting-enter" style="margin-top:.2rem" >
   	  <cell right-title="测试" left-icon="&#xe640;" :clickCell="dealCellClick" right-title-color="red" left-title="商家免费入驻"> ></cell>  
   	 </div>
   	  <button class="setting-out" @click="delLoginOut">退出</button>
   </div>

</template>

<script>
	import Cell from '@/pages/Person/common/cell';
	import { Toast,MessageBox } from 'mint-ui';
	import { mapActions } from 'vuex'
	export default{
		name:"MeSetting",
		components:{
			Cell
		},
		methods:{
			  //从actions提取logOut
			...mapActions(['logOut']),
			  //点击事件
			dealCellClick(props){
				Toast('点击了'+props)
			},
        //退出操作项
			delLoginOut(){
				MessageBox.confirm('您确定退出登陆吗？').then(action=>{
					//console.log(action)
					if('confirm'===action){
						this.logOut({});
						//返回主页
						this.$router.replace('/home')
					}
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>
  .setting-out
     height:1rem
     width:100%
     margin-top:.2rem
     background:#fff
     font-size:.34rem
</style>