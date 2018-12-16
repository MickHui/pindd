import axios from 'axios'
export default function ajax(url="",params={},type="GET"){
	//1.定义peromise 
	let promise;
	return new Promise((resolve,reject)=>{
		   //判断请求方式
		if(type === 'GET'){
			  //设置拼接字符串
			 let paramsStr = '';
			 Object.keys(params).forEach((key)=>{
			 	   paramsStr += key +'='+params[key]+"&"
			 })
			 //过滤最后的&
			 if(paramsStr!==''){
			 	paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf('&'))
			 }
			 //完整的路径
			  url += "?"+paramsStr;
			  promise = axios.get(url)
		}else if(type==='POST'){
			promise = axios.post(url,params)
		}
		// 3. 返回请求的结果
		promise.then((response)=>{
			 resolve(response.data)
		}).catch((error)=>{
			 reject(error)
		})
  })
}