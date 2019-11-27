import React from 'react';
import '../assets/css/Login.css'
import {Link} from 'react-router-dom'
import Input from '../components/input/Input'
import store from "../plugins/redux"
import {checkUser} from "../store/actions"
export default class Login extends React.Component{
     state={
        username:'',
        password:'',
        msg:''
     }

    render(){
        return(
            <div className="login">
            <div className="login-box">
  	<div className="lg-title">欢迎登录</div>
    <div className="login-form">
    	<form action="#">
        	<div className="login-user-name common-div">
            	<span className="eamil-icon common-icon">
                	<img src={[require("../assets/img/user/eamil.png")]} alt=""/>
                </span>
                {/* <input type="email"   placeholder="请输入您的手机号" />         */}
                <Input name="username" type="text" value={this.state.username} onChange={this.changeIpt} placeholder="请输入用户名"/>
            </div>
            <div className="login-user-pasw common-div">
            	<span className="pasw-icon common-icon">
                	<img src={[require("../assets/img/user/password.png")]} alt=""/>
                </span>
                {/* <input type="password"   placeholder="请输入您的密码" />         */}
                <Input name="password" type="password"  value={this.state.password}  onChange={this.changeIpt} placeholder="请输入密码"/>
            </div>
            
            <a  className="login-btn common-div" onClick={this.login}>登录</a>
             {/* <a  className="login-oth-btn common-div">微信登陆</a>
            <a  className="login-oth-btn common-div">QQ登陆</a>  */}
        </form>
    </div>
    <div className="forgets">
    	<a >忘记密码？</a>
        <Link to="/reg">免费注册</Link>
    </div>
</div>
            </div>
        )
    }


    changeIpt=(ev)=>{
        //  console.log('login changeIpt',ev.target)
        this.setState({
            [ev.target.name]:ev.target.value
        })
      };
// Login=()=>{
//     React.axios({
//         url:'/api/login',
//         method:'post',
//         data:{
//             username:this.state.username,
//             password:this.state.password
//         }
//     }).then(
//         res=>{
//             console.log(res)
//             if(res.data.err===1){
//                 this.setState({
//                     msg:res.data.msg
//                 })
//             }else{
//                 this.props.history.push('/user')
//             }
//         }
//     )
// }
login=()=>{
   store.dispatch(checkUser({
       api:'login',
       method:'post',
       username:this.state.username,
       password:this.state.password
   })).then(
       data=>{
           
           if(data.err===1){
               this.setState({
                   msg:data.msg
               })
           }else{
               window.localStorage.setItem('react_app',JSON.stringify(data));
               this.props.history.push('/user')
           }
       }
   )
}

}

