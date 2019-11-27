import React from 'react';
import ReactDOM from 'react-dom';
import App from './layouts/App.js'

import './plugins/axios';


//路由上下文
import {BrowserRouter,Route} from 'react-router-dom'
// 状态管理 
import store from './plugins/redux';
import { Provider } from 'react-redux'
// 取stroange同步状态管理
let local=window.localStorage.getItem('react_app');
if(local){
store.dispatch({type:'CHECK_USER',payload:JSON.parse(local)})
}
//
let cartList = window.localStorage.getItem('react_goods');
if(cartList){
  store.dispatch({type:'ADD_SHOPCAR',payload:JSON.parse(cartList)})
}
//
let price = window.localStorage.getItem('react_price');
if(price){
  store.dispatch({type:'TOTAL',payload:JSON.parse(price)})
}
React.baseUrl = 'http://106.14.168.127:3001';
//
ReactDOM.render(
   <Provider store={store}>
       <BrowserRouter>
    <Route component={App}/>
   </BrowserRouter>
   </Provider>,
    document.getElementById('root')

)