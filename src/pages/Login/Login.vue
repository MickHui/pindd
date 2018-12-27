<template>
  <div class="login-container">
    <!--登录面板内容部分-->
    <div class="login-inner">
      <!--面板头部-->
      <div class="login-header">
        <div class="login-logo">
          <img src="./images/lk_logo_sm.png" alt="" width="250">
        </div>
        <!--面板标题-->
        <div class="login-header-title">
          <a href="javascript:;" :class="{current:loginMode}"  @click="delloginMode(true)">验证码登录</a>
          <a href="javascript:;" :class="{current:!loginMode}" @click="delloginMode(false)">密码登录</a>
        </div>
      </div>
      <!--面板表单部分-->
      <div class="login-content">
        <form>
        	
          <!--手机验证码登录部分-->
          <div :class="{current:loginMode}">
            <section class="login-message">
              <input type="tel" maxlength="11" placeholder="手机号" v-model="phone">
              <button 
              	v-if="!countDown"
              	class="get-verification" 
              	:class="{phone_right:phoneCode}"
              	@click.prevent="getVerifyCode()"
              > 
              	获取验证码 
              </button>
              <button v-else disabled="disabled" class="get-verification"  > 已发送({{countDown}}s)</button>
            </section>
            <section class="login-verification">
              <input type="tel" maxlength="8" placeholder="验证码" v-model="code">
            </section>
            <section class="login-hint">
              温馨提示：未注册撩课帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">服务协议与隐私政策</a>
            </section>
          </div>
          <!--账号登录部分-->
          <div :class="{current:!loginMode}">
            <section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="用户名/手机/邮箱" v-model='user_name'>
              </section>
              <section class="login-verification">
                <input type="password" maxlength="18" placeholder="密码" v-if="pwdMode" v-model="pwd">
                <input type="text" maxlength="18" placeholder="密码" v-else v-model="pwd">
                <div class="switch-show">
                  <img @click.prevent="dealPwdMode(false)" :class="{on: pwdMode}" src="./images/hide_pwd.png" alt=""
                       width="20">
                  <img @click.prevent="dealPwdMode(true)" :class="{on: !pwdMode}" src="./images/show_pwd.png" alt=""
                       width="20">
                </div>
              </section>
              <section class="login-message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="captcha">
                <img
                  ref="captcha"
                  class="get-verification"
                  src="http://localhost:3000/api/captcha"
                  alt="captcha"
                  @click.prevent="getCaptcha()"
                >
              </section>
            </section>
          </div>
          <button class="login-submit" @click.prevent="login()">登录</button>
        </form>
        <button class="login-back" @click="$router.back()">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui';
  import {mapActions} from 'vuex';
  import { getPhoneCode ,phoneCodeLogin, pwdLogin } from '@/api/index';
  export default {
    name: "Login",
    data () {
    	return {
    		loginMode:true, //true:短信登陆    false:账号登陆
    		phone:'',//用于验证的手机号
    		countDown:0,//手机号验证通过后可以进行倒计时
    		pwdMode:true,//true为密文 false 为名文
    		code:'',//短信验证码
    		pwd:'',//密码验证
    		captcha: '',  // 图形验证码
    		userInfo:{},//个人信息
    		user_name:''//用户姓名
    	}
    },
    computed:{
    	phoneCode(){
    		return /^[1][3,4,5,7,8][0-9]{9}$/.test(this.phone)
    	}
    },
    methods:{
    	  //从action里面获取 syncUserInfo方法
    	...mapActions(['syncUserInfo']),
    	//登陆模式的选择
    	delloginMode (flag) {
    		this.loginMode = flag
    	},
    	//获取验短信登陆的验证码
    	  async getVerifyCode(){
      	 //2.1开启倒计时
      	    if(this.phoneCode){
	       	  this.countDown=10;
	       	   this.setIntervalId = setInterval(()=>{
	       		 this.countDown--;
	       		 if(this.countDown===0){
	       		 	clearInterval(this.setIntervalId);
	       		  }
	       	  },1000)
    	    }
	       //2.2获取短信验证码
	       let result = await getPhoneCode(this.phone);
	       console.log(result)
	       if(result.err_code === 0){
	       	  Toast({
		       	  message: result.message,
	            position: 'center',
	            duration: 3000
	       	  });
//		       	clearInterval(this.setIntervalId);
//	          this.countDown = 0;
	       }
      },
      //密码现实的模式
      dealPwdMode(flag){
      	this.pwdMode = flag
      },
       //获取图形验证码
      getCaptcha(){
      	this.$refs.captcha.src="http://localhost:3000/api/captcha?time="+new Date();
      },
      async login(){
      	if(this.loginMode){ 
      		//短信验证码登陆
      		if(!this.phone){
      			//前端验证手机
      			Toast('请输入手机号');
      			return
	      	}else if(!this.phoneCode){
	      		 Toast('请输入正确的手机号格式');
	      			return
	      	}
	      	if(!this.code){
	    		 	Toast('请输入验证码');
	    			return;
	      	} else if(!(/^\d{6}$/gi.test(this.code))){
	      		Toast('请输入6位验证码');
	    			return;
      	}
      	//5.3登陆
        const result = await phoneCodeLogin(this.phone,this.code)
        console.log(result);
         if(result.success_code==200){
    	 	 this.userInfo = result.message;
	    	 }else{
	    	 	 this.userInfo ={
	    	 	 	  message:"登陆失败，手机号或验证码错误"
	    	 	 }
	    	 }
      }else{
      	//账号密码登陆
    		if(!this.user_name){
    			//前端验证手机
    			Toast('请输入用户名/手机号/邮箱');
    			return
		    	}else if(!this.pwd){
		    		 Toast('请输入密码');
		    			return;
		    	}else if(!this.captcha){
		    		 Toast('请输入验证码');
		    			return ;
		    	}
		    const result = await pwdLogin(this.user_name,this.pwd,this.captcha)
         console.log(result);
        if(result.success_code===200){
    	 	 this.userInfo = result.message;
	    	 }else{
	    	 	 this.userInfo ={
	    	 	 	  message:"登陆失败，用户名或密码不正确"
	    	 	 }
	    	 } 	
       }
      //后续处理
      if(!this.userInfo.id){
      	Toast(this.userInfo.message);
      }else{
      	this.syncUserInfo(this.userInfo);
      	this.$router.back();
      }
    },
 }  
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login-container
    width 100%
    height 100%
    background #fff
    .login-inner
      padding-top 60px
      width 80%
      margin 0 auto
      .login-header
        .login-logo
          font-size 40px
          font-weight bold
          color mediumpurple
          text-align center
        .login-header-title
          padding-top 40px
          padding-bottom 10px
          text-align center
          > a
            color #333
            font-size 14px
            padding-bottom 4px
            &:first-child
              margin-right 40px
            &.current
              color mediumpurple
              font-weight 700
              border-bottom 2px solid mediumpurple
      .login-content
        > form
          > div
            display none
            &.current
              display block
            input
              width 100%
              height 100%
              padding-left 8px
              box-sizing border-box
              border 1px solid #ddd
              border-radius 4px
              outline 0
              font 400 14px Arial
              &:focus
                border 1px solid mediumpurple
            .login-message
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .get-verification
                position absolute
                top 50%
                right 10px
                transform translateY(-50%)
                border 0
                color #ccc
                font-size 14px
                background transparent
                &.phone_right
                  color purple
            .login-verification
              position relative
              margin-top 16px
              height 48px
              font-size 14px
              background #fff
              .switch-show
                position absolute
                right 10px
                top 12px
                img
                  display none
                img.on
                  display block
            .login-hint
              margin-top 12px
              color #999
              font-size 12px
              line-height 20px
              > a
                color mediumpurple
          .login-submit
            display block
            width 100%
            height 42px
            margin-top 30px
            border-radius 4px
            background mediumpurple
            color #fff
            text-align center
            font-size 16px
            line-height 42px
            border 0
        .login-back
          display block
          width 100%
          height 42px
          margin-top 15px
          border-radius 4px
          background transparent
          border: 1px solid mediumpurple
          color mediumpurple
          text-align center
          font-size 16px
          line-height 42px
</style>
