import React from 'react';
import '../assets/css/core.css'
import '../assets/css/icon.css'
import '../assets/css/Home.css'
import '../assets/css/Detail.css'
import querystring from 'query-string'
import { update} from "../store/actions"
import * as types from "../store/types" 
import {connect} from "react-redux"
import store from '../plugins/redux';
import { Toast } from 'antd-mobile';

 class Detail extends React.Component {
    
    componentDidMount(){
        let id=this.props.match.params._id;
		let dataName = querystring.parse(this.props.location.search).dataName;
		
		this.props.getDetail(dataName,id)
		
    }
    
    render() {
        
        
		let {detail,shopcar} = this.props;
		
        let el =null;
        if(detail){
            el=(

                <div className="Detail">
					<header className="aui-header-default aui-header-fixed aui-header-bg">
		<a onClick={()=>{this.props.history.go(-1)}} className="aui-header-item">
			<i className="aui-icon aui-icon-back-white"></i>
		</a>
		<div className="aui-header-center aui-header-center-clear">
			<div className="aui-header-center-logo">
				<div id="scrollSearchPro">
					<span className="current">商品</span>
					<span>评价</span>
					<span>详情</span>
				</div>
			</div>
		</div>
		<a  className="aui-header-item-icon select"    style={{minWidth:0}}>
			<i className="aui-icon aui-icon-share-pd selectVal" ></i>
			<div className="aui-header-drop-down selectList">
				<div className="aui-header-drop-down-san"></div>
				
			</div>
		</a>
	</header>
    <img src={detail.goods_big_logo} alt="" className="teshu"/>
                <div className="aui-product-content">
                    <div className="aui-real-price clearfix">
                        <span>
                            <i>￥</i>{detail.goods_price}
			</span>
                        <del><span className="aui-font-num">￥699</span></del>
                        <div className="aui-settle-choice">
                            <span>促销价</span>
                        </div>
                    </div>
                    <div className="aui-product-title">
                        <h2>
                            {detail.goods_name}
			</h2>
                        <p>
                           {detail.cat_one_id} {detail.cat_two_id}
			</p>
                    </div>
                    <div className="aui-product-boutique clearfix">
			<img src={[require("../assets/img/icon/icon-usa.png")]} alt=""/>
			<span className="aui-product-tag-text">美国品牌</span>
			<img src={[require("../assets/img/icon/icon-sj.png")]} alt=""/>
			<span className="aui-product-tag-text">精选商家</span>
		    </div>
            <div className="aui-product-strip">
			<img src={[require("../assets/img/bg/ssy.jpg")]}  alt="" />
		</div>
        <div className="aui-product-coupon">
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear" data-ydui-actionsheet="{target:'#actionSheet',closeElement:'#cancel'}">
				<div className="aui-address-cell-bd">选择</div>
				<div className="aui-address-cell-ft">颜色分类</div>
			</a>
			
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">领券</div>
				<div className="aui-address-cell-ft">
					<span>满159减10券</span>
					<span>满299减30券</span>
				</div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">配送</div>
				<div className="aui-address-cell-ft">上海 至 北京海淀区</div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">运费</div>
				<div className="aui-address-cell-ft">免运费</div>
			</a>
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">说明</div>
				<div className="aui-address-cell-ft">假一赔十 7天无忧退货</div>
			</a>
		</div>
        <div className="aui-dri"></div>
		<div className="aui-product-evaluate">
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">商品评价   <em>(3290)</em></div>
				<div className="aui-address-cell-ft">
					<span>好评 100%</span>
				</div>
			</a>
		</div>
        <div className="aui-dri"></div>
		<div className="aui-product-evaluate">
			<a  className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">
					<div className="clearfix">
						<div className="aui-product-shop-img">
							<img src={[require("../assets/img/user/user10.png")]} alt="" />
						</div>
						<div className="aui-product-shop-text">
							<h3>Versace官方旗舰店</h3>
							<p>精选商家  服务保障</p>
							<p>在售商品2390件</p>
						</div>
					</div>
				</div>
				<div className="aui-address-cell-ft">
					<span>进店看看</span>
				</div>
			</a>
		</div>
        <div className="aui-dri"></div>
		<div className="aui-slide-box">
			<div className="aui-slide-list">
				<ul className="aui-slide-item-list">
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-1.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">NIKE耐克男女鞋 ROSHE ONE 男女情侣小黑鞋奥利奥轻便休闲鞋</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-2.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">【防晒神器】let's diet 防晒帽 SPF50PA++ </p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥99</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥198</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-3.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">秋冬新款 女士优雅宽松麂皮绒彷皮毛一体中长款仿皮</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥399</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥999</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-4.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">adidas 阿迪达斯 运动型格 女子短袖T恤 CF3657  CF3658</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥189</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥299</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-5.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">独立日限定 pop-up 短袖T恤 T-2</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥1349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥4199</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-6.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">秋冬纯棉床单套件</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
							</p>
						</a>
					</li>
					<li className="aui-slide-item-item">
						<a  className="v-link">
							<img className="v-img" src={[require("../assets/img/pd/sf-7.jpg")]} alt=""/>
							<p className="aui-slide-item-title aui-slide-item-f-els">法国品牌尚玛可 W-梵诺克·二合一七孔纤维冬被</p>
							<p className="aui-slide-item-info">
								<span className="aui-slide-item-price">¥349</span>&nbsp;&nbsp;<span className="aui-slide-item-mrk">¥499</span>
							</p>
						</a>
					</li>
				</ul>
			</div>

		</div>
        <div className="aui-dri"></div>
		<div className="aui-product-pages">
			<div className="aui-product-pages-title">
				<h2>图文详情</h2>
			</div>
			<div className="aui-product-pages-img">
				<img src={[require("../assets/img/pd/pd-cp0.jpg")]} alt="" />
				<div dangerouslySetInnerHTML={{__html:detail.goods_introduce}}>

                </div>

			</div>
		</div>
                </div>

                <footer className="aui-footer-product">
		<div className="aui-footer-product-fixed">
			<div className="aui-footer-product-concern-cart">
				<a >
					<span className="aui-f-p-icon"><img src={[require("../assets/img/icon/icon-kf.png")]} alt=""/></span>
					<span className="aui-f-p-focus-info">客服</span>
				</a>
				<a >
					<span className="aui-f-p-icon"><img src={[require("../assets/img/icon/icon-sc.png")]} alt=""/></span>
					<span className="aui-f-p-focus-info">收藏</span>
				</a>
				<a >
					<span className="aui-f-p-icon"><img src={[require("../assets/img/icon/icon-dp.png")]} alt=""/></span>
					<span className="aui-f-p-focus-info" onClick={()=>{this.props.history.push('/home')}}>首页</span>
				</a>
			</div>
			<div className="aui-footer-product-action-list">
				<a  className="yellow-color" onClick={()=>{this.props.add1(detail,shopcar,this.props)}}>加入购物车</a>
				<a  className="red-color" onClick={()=>{this.props.add2(detail,shopcar,this.props)}}>立即购买</a>
			</div>
		</div>
	</footer>
            </div>
            )
        }else{
            el = <div>骨架屏</div>
        }
            return el;


        
	}


	// add=()=>{
		// store.dispatch({type:})
	// 	let local= window.localStorage.getItem('react_app')
    //         if(local){
    //             let arr =[...state.shopcar];
    //     let find = false;
    //     arr.forEach((item,index)=>{
    //       if(item._id==payload._id){
    //         item.cart_number++ //数量增加
    //         find=true;
    //         console.log(state.shopcar)
    //       }
    //     });
    //     if(!find){
    //       payload.cart_number=1
    //       arr.push(payload)
    //     }
    //         }
		
	// }
};

 

const mapStateToProps=state=>({
	detail:state.detail,
	shopcar:state.shopcar
});

const mapDispatchToProps=dispatch=>({
	
	getDetail:(api,_id)=>{
		dispatch({type:"CLEAR_DETAIL",payload:{}})
		dispatch(update({
		api,
		type:types.UPDATE_DETAIL,
		_id
	}))},
	add1:(detail,shopcar,props)=>{
		let local = window.localStorage.getItem('react_app') 
		if(local){
			let find = false;
        shopcar.forEach((item,index)=>{
          if(item._id==detail._id){
            item.cart_number++ //数量增加
            find=true;            
          }
        });
        if(!find){
          detail.cart_number=1
          shopcar.push(detail)
		}
		dispatch({type:"ADD_SHOPCAR",payload:shopcar})
		Toast.success('添加商品成功', 1);
		console.log(shopcar)
		window.localStorage.setItem('react_goods',JSON.stringify(shopcar))
		}else{
			Toast.fail('亲！请先登录', 1);
			setTimeout(()=>{
				props.history.push('/login')
			},1000)
		}	
	},
	add2:(detail,shopcar,props)=>{
		let local = window.localStorage.getItem('react_app') 
		if(local){
			let find = false;
        shopcar.forEach((item,index)=>{
          if(item._id==detail._id){
            item.cart_number++ //数量增加
            find=true;            
          }
        });
        if(!find){
          detail.cart_number=1
          shopcar.push(detail)
		}
		dispatch({type:"ADD_SHOPCAR",payload:shopcar})
		props.history.push('/shopcar')
		console.log(shopcar)
		window.localStorage.setItem('react_goods',JSON.stringify(shopcar))
		}else{
			Toast.fail('亲！请先登录', 1);
			setTimeout(()=>{
				props.history.push('/login')
			},1000)
		}	
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail)
