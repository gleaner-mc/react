import React from 'react';
import '../assets/css/Header.css'
import { NavBar, Icon } from 'antd-mobile';
export default class Header extends React.Component{
    render(){
        return(
            <div className="Header">
                <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
            </div>
        )
    }
}