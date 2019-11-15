import React from 'react';
import '../assets/css/App.css'
import {Route,Redirect,Switch} from 'react-router-dom'



import Header from "./Header"
import Footer from "./Footer"
import Home from "../pages/Home"
import Detail from "../pages/Detail"
import User from "../pages/User"
import Login from "../pages/Login"
import Reg from "../pages/Reg"
import ErrorPage from "../pages/ErrorPage"

export default class App extends React.Component{
    render(){
        return(
            <div className="App">
               <Header/>
            </div>
        )
    }
}