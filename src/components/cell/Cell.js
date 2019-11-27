import React from 'react';
import './Cell.css'

import { withRouter } from 'react-router-dom';



  
//  class Cell extends React.Component{
//      goDetail = (_id,datName)=>{
//     this.props.history.push({pathname:'/detail/'+_id,search:'dataName='+datName})
// }

//     render(){
//         let {item,dataName} = this.props;
//         return(
            
                
// 				<a  className="aui-list-product-item"  onClick={()=>this.goDetail(item._id,dataName)}>
                   
// 					<div className="aui-list-product-item-img">
// 						<img src={item.goods_small_logo} alt="" />
// 					</div>
// 					<div className="aui-list-product-item-text">
// 						<h3>{item.goods_name}</h3>
// 						<div className="aui-list-product-mes-box">
// 							<div>
// 							<span className="aui-list-product-item-price">
// 								<em>¥</em>
// 								{item.goods_price}
// 							</span>
// 								<span className="aui-list-product-item-del-price">
// 								¥{item.goods_number}
// 							</span>
// 							</div>
// 							<div className="aui-comment">评论:{item.is_promote}</div>
// 						</div>
// 					</div>
                    
// 				</a>
				
			
          
//         )
//     }
    
// }
let goDetail = (_id,dataName,history)=>{
	     history.push({pathname:'/detail/'+_id,search:'dataName='+dataName})
	 }

export default withRouter(({item,dataName,history})=>(
	<a className="Cell aui-list-product-item"  onClick={()=>goDetail(item._id,dataName,history)}>
		<div className="aui-list-product-item-img">
 						<img src={item.goods_small_logo} alt="" />
 					</div>
 					<div className="aui-list-product-item-text">
 						<h3>{item.goods_name}</h3>
 						<div className="aui-list-product-mes-box">
 							<div>
 							<span className="aui-list-product-item-price">
 								<em>¥</em>
 								{item.goods_price}
 							</span>
 								<span className="aui-list-product-item-del-price">
 								¥{item.goods_number}
 							</span>
 							</div>
 							<div className="aui-comment">评论:{item.is_promote}</div>
 						</div>
 					</div>

	</a>
))