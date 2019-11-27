import axios from "axios";
import {CHECK_USER} from './types'






const update = ({
    api,_page=1,type,_id=null,
})=>dispatch=>(
    axios({
        url:_id? `/api/${api}/${_id}`:`/api/${api}`,
        
        params:{_page}
    }).then(
        res=>{
           console.log(res.data.data)
            dispatch({type,payload:res.data.data})
        }
    ).catch(
        err=>new Error(err)
    )
);

const checkUser =({api,username,password,method='get'})=>(dispatch,getState)=>(
    axios({
        url:`/api/${api}`,
        method,
        params:method==='get'? {username,password}:null,
        data:method ==='post' ? {username,password}:null
    }).then(
        res=>{
            console.log(res.data)
            dispatch({type:CHECK_USER,payload:res.data})
            return res.data
        }
    )
)

export {update,checkUser};