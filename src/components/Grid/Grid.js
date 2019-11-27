import React from 'react'
import { Grid } from 'antd-mobile';


const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));
export default class Gridd extends React.Component{

    
    render(){
        return(
            <div>
                
               
    <Grid data={data} hasLine={false} />
            </div>
        )
    }
}
