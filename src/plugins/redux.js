import {createStore,applyMiddleware} from 'redux'; //applyMiddleware 处理中间件合并到store对象中

import think from 'redux-thunk'

import reducer from "../store/reducer";
import state from "../store/state";

let store = createStore(reducer,state,applyMiddleware(think));
export default store