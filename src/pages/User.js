import React from 'react'
import '../assets/css/User.css'



export default class User extends React.Component {
    render(){
		let{data}=this.props
		return(		
			<div className="User">
				<header className="aui-header-default aui-header-fixed aui-header-bg">
					<a className="aui-header-item ">
						{/* <i className="aui-icon aui-icon-back-white" id="scrollSearchI" style={{display:"block"}}></i> */}
						<div id="scrollSearchDiv">
							<img src={`${React.baseUrl}` + data.icon} alt=""/>
						</div>
					</a>
					<div className="aui-header-center aui-header-center-clear">
						<div className="">

						</div>
					</div>
					<a className="aui-header-item-icon " onClick={() => {
						this.props.history.push('/logout')
					}}>
						<i className="aui-icon aui-icon-Set"/>
						<p style={{fontSize: 12}}>注销</p>
					</a>
				</header>
				<section className="aui-me-content">
					<div className="aui-me-content-box">
						<div className="aui-me-content-info"/>
						<div className="aui-me-content-list">
							<div className="aui-me-content-item">
								<div className="aui-me-content-item-head">
									<div className="aui-me-content-item-img">
										<img src={`${React.baseUrl}` + data.icon} alt=""/>
									</div>
									<div className="aui-me-content-item-title">{data.nikename}</div>
								</div>
								<div className="aui-me-content-item-text">
									<a>
										<span>98</span>
										<span>收藏</span>
									</a>
									<a>
										<span>78</span>
										<span>关注</span>
									</a>
									<a>
										<span>99</span>
										<span>足迹</span>
									</a>
									<a>
										<span>65</span>
										<span>分享</span>
									</a>
								</div>
							</div>
							<div className="aui-me-content-card">
								<h3><i className="aui-icon aui-card-me"/>铂金会员</h3>
								<a href="my-membership.html">点击查看特权</a>
							</div>
						</div>
					</div>
					<div className="aui-me-content-order">
						<a className="aui-well aui-fl-arrow">
							<div className="aui-well-bd">我的订单</div>
							<div className="aui-well-ft">查看全部</div>
						</a>
					</div>
					<section className="aui-grid-content">
						<div className="aui-grid-row">
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-wallet"/>
								<p className="aui-grid-row-label">待付款</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-goods"/>
								<p className="aui-grid-row-label">待发货</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-receipt"/>
								<p className="aui-grid-row-label">待收货</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-evaluate"/>
								<p className="aui-grid-row-label">待评价</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-refund"/>
								<p className="aui-grid-row-label">退货退款</p>
							</a>
						</div>
						<div className="aui-dri"/>
						<div className="aui-me-content-order">
							<a className="aui-well ">
								<div className="aui-well-bd">我的服务</div>
								{/* <div className="aui-well-ft">查看全部</div> */}
							</a>
						</div>
						<div className="aui-grid-row">
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-invitation"/>
								<p className="aui-grid-row-label">邀请好友</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-signs"/>
								<p className="aui-grid-row-label">签到领币</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-coupon"/>
								<p className="aui-grid-row-label">优惠券</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-fight"/>
								<p className="aui-grid-row-label">我的拼团</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-recommend"/>
								<p className="aui-grid-row-label">商品推手</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-recharge"/>
								<p className="aui-grid-row-label">充值中心</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-help"/>
								<p className="aui-grid-row-label">帮助中心</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-problem"/>
								<p className="aui-grid-row-label">我的问答</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-evaluates"/>
								<p className="aui-grid-row-label">我的评价</p>
							</a>
							<a className="aui-grid-row-item">
								<i className="aui-icon-large aui-icon-large-sm aui-icon-shares"/>
								<p className="aui-grid-row-label">我的分享</p>
							</a>
						</div>

					</section>
				</section>

			</div>


		)		
}
}