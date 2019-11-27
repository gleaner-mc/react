import React from 'react';
import '../assets/css/App.css'
import {Route,Redirect,Switch} from 'react-router-dom'



import Header from "./Header"
import Footer from "./Footer"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import User from "../pages/User"
import Login from "../pages/Login"
import Logout from "../pages/Logout"
import ShopCar from "../pages/ShopCar"
import Auth from "../gurad/Auth"
import Reg from "../pages/Reg"
import Order from "../pages/Order"
import Pay from "../pages/Pay"
import ErrorPage from "../pages/ErrorPage"
import Loading from "../components/loading/Loading";
import * as types from "../store/types"
import {connect} from "react-redux"


 class App extends React.Component{
    state={};
    static getDerivedStateFromProps(nextProps,nextState){
        let {location:{pathname},viewNav,viewFoot} = nextProps;
        
        if(/home|user|logout/.test(pathname)){
            viewNav(false);
            viewFoot(true)
        }
        if(/login|reg/.test(pathname)){
            // return{bNav:true,bFoot:true}
            viewNav(true);
            viewFoot(true)
        }
        if(/detail|shopcar|order|pay/.test(pathname)){
            // return{bNav:false,bFoot:false}
            viewNav(false);
            viewFoot(false)
        }
        window.scrollTo(0,0);
        return null
    }
    render(){
        let {bNav,bFoot,bLoading}=this.props
        return(
            <div className="App">
                {bLoading && <Loading/>}
               {bNav && <Header/>}
               <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/logout" component={Logout} />
                    <Auth path="/shopcar" component={ShopCar} />
                    <Auth path="/user" component={User} />
                    <Route path="/order" component={Order} />
                    <Route path="/pay" component={Pay} />
                    <Route path="/detail/:_id" component={Detail} />
                    <Redirect exact from="/" to="/home" />
                    <Route component={ErrorPage} />
               </Switch>
               {bFoot &&<Footer/>}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    bNav: state.bNav,
    bFoot: state.bFoot,
    bLoading: state.bLoading,
});
const mapDispatchToProps = dispatch => ({
    viewNav:(bl)=>dispatch({type:types.VIEW_NAV,payload:bl}),
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl})
})
export default connect(mapStateToProps,mapDispatchToProps)(App)