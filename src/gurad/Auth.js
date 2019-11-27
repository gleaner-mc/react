import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import { connect } from 'react-redux'
//数据加载 


//守卫同步条件


const Auth=({component:Component,err,data,...rest})=>(
    <Route {...rest} render={porps=>(
        err===0?<Component {...porps} data={data}/>:<Redirect to="/login"/>
    )} />
);


const mapStateToProps =  state =>({
    err:state.user.err,
    data:state.user.data
})

export default connect(mapStateToProps,null)(Auth)



// export default class Auth extends React.Component{
//     state={
//         hasAuth:false,// 请求是否发出过
//         err:1,//是否通过
//         data:{},// 预载数据
//     };
//     componentDidMount(){
//         React.axios({
//             url:'/api/user'
//         }).then(
//             res=>{
//                 console.log(res)
//                 this.setState({
//                 hasAuth:true,
//                 err:res.data.err,
//                 data:res.data.data
//             })}
//         )
//     }
//     render(){
//         let{component:Component,...rest}=this.props
//         if(!this.state.hasAuth) return null ;
//         return <Route render={rpg=>(
//             this.state.err===0?<Component {...rest} {...rpg} data={this.state.data}/>:<Redirect to="/login"/>
//         )}/>

        
//     }
// }