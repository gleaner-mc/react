import React from 'react'
import { connect } from 'react-redux';

 class Order extends React.Component{
    render(){
		let { ListCar,data ,price} = this.props
		console.log(ListCar)
        return(

            <div className="Order">
                <header className="aui-header-default aui-header-fixed aui-header-bg">
		<a  className="aui-header-item" onClick={()=>{this.props.history.go(-1)}}>
			<i className="aui-icon aui-icon-back-white"></i>
		</a>
		<div className="aui-header-center aui-header-center-clear">
			<div className="aui-header-center-logo">
				<div className="aui-car-white-Typeface">填写订单</div>
			</div>
		</div>
		<a href="#" className="aui-header-item-icon"   style={{minWidth:0}}>
			<i className="aui-icon aui-icon-member"></i>
		</a>
	</header>
	<section className="aui-address-content">
		<div className="aui-address-box">
			<div className="aui-address-box-list">
				<a href="my-addres.html" className="aui-address-box-default">
					<ul>
						<li >
							<strong>{data.data.nikename} 185****6698</strong>
							<span className="aui-tag" id="aui-home">家里</span>
							<span className="aui-tag aui-tag-default" id="aui-default">默认</span>
						</li>
						<li>
							<i className="aui-icon aui-icon-address"></i>
							北京海淀区三环到四环之间学院路东里33号楼1门202
						</li>
					</ul>
				</a>
			</div>
		</div>
		<div className="aui-dri"></div>
		<div className="aui-list-product-float-item">
			{
				ListCar.map((item,index)=>{
					
						if(ListCar[index].is_select===true){
							return(
								<a className="aui-list-product-fl-item" key={item._id}>
				<div className="aui-list-product-fl-img">
					<img src={ListCar[index].goods_small_logo} alt=""/>
				</div>
				<div className="aui-list-product-fl-text">
					<h3 className="aui-list-product-fl-title">{ListCar[index].goods_name}</h3>
					<div className="aui-list-product-fl-mes">
						<div>
							<span className="aui-list-product-item-price">
								<em>¥</em>
								{ListCar[index].goods_price*ListCar[index].cart_number}
							</span>
							<span className="aui-list-product-item-price">
							&nbsp;&nbsp;&nbsp;单价: {ListCar[index].goods_price}
							</span>
						</div>
						<div className="aui-btn-purchase">
							<span>{ListCar[index].goods_weight}kgx{ListCar[index].cart_number}</span>
						</div>
					</div>
					<div className="aui-list-product-fl-bag">
						<span><img src={[require("../assets/img/icon/bag1.png")]} alt=""/></span>
						<span><img src={[require("../assets/img/icon/bag2.png")]} alt=""/></span>
					</div>
				</div>
			</a>
							)
						}
					}
									
				)
			}
		</div>
		<div className="aui-address-well">
			<a href="#" className="aui-address-cell aui-fl-arrow">
				<div className="aui-address-cell-bd">支持配送</div>
				<div className="aui-address-cell-ft">
					<p>在线支付</p>
					<p>顺丰快递</p>
					<p className="aui-address-text"><i className="aui-icon aui-prompt-sm"></i>11月12日[周五]09:00-15:00</p>
				</div>
			</a>
			<div className="aui-prompt"><i className="aui-icon aui-prompt-sm"></i>您的收货时间为工作日，请您做好收货准备。</div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">发票</div>
				<div className="aui-address-cell-ft">个人</div>
			</a>
			<div className="aui-dri"></div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">
					运费险
					<p style={{color:"#888"}}>7天内退货，15天内可换货</p>
				</div>
				{/* <div className="aui-address-cell-ft">￥0.50&nbsp;&nbsp;<input className="aui-switch" type="checkbox" checked="checked"/></div> */}
			</a>
			<div className="aui-dri"></div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">优惠券</div>
				<div className="aui-address-cell-ft">不可用</div>
			</a>
			<div className="aui-dri"></div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">礼品卡</div>
				<div className="aui-address-cell-ft">不可用</div>
			</a>
			<div className="aui-dri"></div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">积分</div>
				<div className="aui-address-cell-ft">567890</div>
			</a>
			<div className="aui-dri"></div>
			<a href="#" className="aui-address-cell aui-fl-arrow aui-fl-arrow-clear">
				<div className="aui-address-cell-bd">
					<h3>商品金额</h3>
					<p>运费(总重:1.978kg)</p>
				</div>
				<div className="aui-address-cell-ft">
					<span className="aui-red">￥{price}</span><br/>
					<span className="aui-red">+￥0.00</span>
				</div>
			</a>
		</div>
		<div className="aui-payment-bar">
			<div className="shop-total">
				<span className="aui-red aui-size">实付款: <em>￥{price}</em></span>
			</div>
			<a  className="settlement" onClick={this.pay}>提交订单</a>
		</div>
	</section>
            </div>
        )
	}
	
	pay=()=>{
		this.props.history.push('/pay')
		
	}
}

const mapStateToProps=state=>({
	ListCar:state.shopcar,
	data:state.user,
	price:state.totalPrice
})
export default connect(mapStateToProps, null)(Order)