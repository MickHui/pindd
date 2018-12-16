<template>
	 <div class="home">	
	         <ly-tab
	            v-model="selectedId"
					    :items="items"
					    :options="options"
					    @change = 'handleItemChange'
					    class="top-tab"
					    />  
	      <router-view>
	      	
	      </router-view>
	 </div>
	
</template>

<script>
	export default {
		name:"Home",
		data () {
			return {
			selectedId: 0,//选中的id
      items: [
        {label: '热门'},
        {label: '服饰'},
        {label: '鞋包'},
        {label: '母婴'},
        {label: '百货'},
        {label: '食品'},
        {label: '内衣'},
        {label: '男装'},
        {label: '电器'}
      ],
      options: {
        activeColor: '#e9232c'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      //二级路由数组
      routes:['/home/hot','/home/dress','/home/xiebao','/home/baby','/home/goods','/home/food','/home/neiyi','/home/cloth','/home/electrical']
			}
		},
		methods : {
				handleItemChange (item,index) {
					console.log(item,index)
				 this.$router.replace(this.routes[index])
			}
		}
	}
	
	
</script>

<style lang="stylus" scoped>
 .home
    height 100%
    width 100%
    background red
    .top-tab
       position fixed
       top 0
       left 0
       right 0
       z-index:998
</style>