import React from 'react';

import '../assets/css/Home.css'
import '../assets/css/icon.css'

import {NavLink} from 'react-router-dom'
export default class Footer extends React.Component{
   
    render(){
        return(
            <div className="Footer" >
                <footer className="aui-footer-default aui-footer-fixed">
		<NavLink  className="aui-footer-item " to="/home" activeClassName="aui-footer-active">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-home"></span>
			<span className="aui-footer-item-text">首页</span>
		</NavLink>
		
		<NavLink  className="aui-footer-item" to="/login" activeClassName="aui-footer-active">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-find"></span>
			<span className="aui-footer-item-text">登录</span>
		</NavLink>
		<NavLink  className="aui-footer-item" to="/shopcar" activeClassName="aui-footer-active"> 
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-car"></span>
			<span className="aui-footer-item-text">购物车</span>
		</NavLink>
		<NavLink  className="aui-footer-item" to="/user" activeClassName="aui-footer-active">
			<span className="aui-footer-item-icon aui-icon aui-footer-icon-me"></span>
			<span className="aui-footer-item-text">我的</span>
		</NavLink>
	</footer>
                 
            </div>
        )
    }
}