import React from 'react';
import '../assets/css/Home.css'
import Swiper from '../components/swiper/Swiper.js' //引入轮播图
import Gridd from '../components/Grid/Grid.js' // 引入宫格
import Cell from '../components/cell/Cell' //引入商品
import '../components/cell/Cell.css'
import { NoticeBar, WhiteSpace } from 'antd-mobile';

import { connect } from 'react-redux'
import { update, checkUser } from "../store/actions"
import * as types from '../store/types'

class Home extends React.Component {
    
    // async componentDidMount() {
    //     let res = await React.axios({
    //         url: '/api/home',
    //         params: {
    //             _page: 1,

    //         }
    //     });
    //     this.setState({
    //         list: res.data.data
    //     })
    // }
    // 构造器
    constructor(props){
        super();
        props.getList()
        
    }

    
    render() {
        let { list} = this.props;
        let user = window.localStorage.getItem('react_app')

        
        return (

            <div className="Home">
                <header className="aui-header-default aui-header-fixed aui-header-bg">
                    <a href="#" className="aui-header-item">
                        <i className="aui-icon aui-icon-code"></i>
                    </a>
                    <div className="aui-header-center aui-header-center-clear">
                        <div className="aui-header-search-box">
                            <i className="aui-icon aui-icon-small-search"></i>
                            <input id="" type="text" placeholder="iphone8 手机钢化膜" className="aui-header-search" />
                        </div>
                    </div>
                    <a  className="aui-header-item-icon">
                    {user?<div id="scrollSearchDiv">
							<img src={`${React.baseUrl}`+ JSON.parse(user).data.icon} alt="" onClick={()=>this.props.history.push('/user')}/>
						</div>:<div >
                        <i className="de " onClick={()=>{this.props.history.push('/login')}}>登录 |</i>
			            <i className="de " onClick={()=>{this.props.history.push('/reg')}}> 注册</i>
                        </div>}
                        
                    </a>
                </header>
                <div className="cl"></div>
                <NoticeBar mode="link" onClick={() => alert('1')}>
                    Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                </NoticeBar>
                <WhiteSpace size="lg" />

                <Swiper />
                <Gridd />
                <section className="aui-list-product">
                    <div className="aui-list-product-box">
                        {
                            list.map(item => (
                                <Cell key={item._id} item={item} dataName="home" />
                            ))
                        }
                    </div>
                </section>
            </div>
        )
    }
}
const MapStateToProps = state => ({
    list: state.list,
    
})
const MapDispatchToProps = dispatch => ({
    getList: () => {
        dispatch(update({
            api: 'home',
            type: types.UPDATE_HOME
        }))
    },
    // getUser:()=>{
    //     dispatch(checkUser({
    //         type:types.CHECK_USER
    //     }))
    // }
});

export default connect(MapStateToProps, MapDispatchToProps)(Home)
