import React from 'react'
import { connect } from 'react-redux';
import { Result, Icon, WhiteSpace ,NavBar,Toast} from 'antd-mobile'
import "../assets/css/Pay.css"
import store from "../plugins/redux"
const myImg = src => <img src={src} className="spe am-icon am-icon-md" alt="" />;

class Pay extends React.Component {
    
    render() {
        let {price} =this.props
        return (
            <div className="Pay">
                <NavBar
      mode="light"
      icon={<Icon key="1" type="ellipsis" />}
      onLeftClick={() =>{this.props.history.push('/home')}}
     
    >支付结果</NavBar>
                <div className="result-example" onClick={this.go}>
                    
                    <Result
                        img={myImg('https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg')}
                        title="支付成功"
                        message={<div>{price}元 </div>}
                    />
                    <WhiteSpace />
                </div>
            </div>
        )
    }
    go=()=>{
        
            Toast.loading('支付成功Loading...', 1, () => {
                store.dispatch({type:"CLEAR_CAR"})
                store.dispatch({type:"CLEAR_PRICE"})
                window.localStorage.removeItem('react_goods')
                window.localStorage.removeItem('react_price')
                window.localStorage.removeItem('react_check')
                this.props.history.push('/home')
                
              });
            
      
    }
}
const mapStateToProps=state=>({
	car:state.shopcar,
	price:state.totalPrice
})


export default connect(mapStateToProps, null)(Pay)