import React from 'react';
import '../assets/css/Header.css'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
 class Header extends React.Component{
    
    render(){
        
        return(
            <div className="Header">
                <NavBar
      mode="dark"
      icon={<Icon type="left" />}
      onLeftClick={()=>this.props.history.go(-1)}

      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
            </div>
        )
    }
}
export default withRouter(Header)