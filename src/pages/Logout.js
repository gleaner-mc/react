import React from 'react';
import { Toast } from 'antd-mobile';
import store from '../plugins/redux';


export default class Logout extends React.Component{
    render(){
        return(
            <div className="Logout">
                <header className="aui-header-default aui-header-fixed aui-header-bg">
		<a  className="aui-header-item" onClick={()=>{this.props.history.go(-1)}}>
			<i className="aui-icon aui-icon-back-white"></i>
		</a>
		<div className="aui-header-center aui-header-center-clear">
			<div className="aui-header-center-logo">
				<div className="aui-car-white-Typeface">设置</div>
			</div>
		</div>
		<a  className="aui-header-item-icon"   style={{minWidth:0}}>
			<i className="aui-icon aui-icon-share-pd"></i>
		</a>
	</header>

	<section className="aui-myOrder-content">
		<div className="aui-product-set">

			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">个人信息</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">我的实名认证</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">我的收货地址</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">消息推送设置</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">清除缓存</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">弹幕设置</div>
				<div className="aui-address-cell-ft"></div>
			</a>
			<div className="aui-dri"></div>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">关于我们</div>
				<div className="aui-address-cell-ft">v5.0</div>
			</a>
		</div>
		<div className="aui-out">
			<span onClick={this.logout}>退出当前账号</span>
		</div>
	</section>
            </div>
        )
    }

    logout=()=>{
        React.axios({
            url:'/api/logout',
            method:'delete'
        }).then(
            res=>{
				console.log(res.data)
				if(res.data.err===0){
				Toast.success('注销成功',2)
				window.localStorage.removeItem('react_app');
				store.dispatch({type:'CLEAR_USER'})
                setTimeout(()=>{
                    this.props.history.push('/home')
                },2000)
                
				}
                
            }
        )
    }
    // logout=()=>{
    //     React.axios({
    //         url:'/api/logout',
    //         method:'delete'
    //     }).then(
    //         res=>{
    //             Toast.success('注销成功',2)
    //             setTimeout(()=>{
    //                 this.props.history.push('/home')
    //             },2000)
    //             // this.props.history.push()
    //         }
    //     )
    // }
}