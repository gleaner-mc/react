import React from 'react'
import '../assets/css/Reg.css'
import { ImagePicker } from 'antd-mobile';
import Input from '../components/input/Input'
const data = [];
export default class Reg extends React.Component {
    state = {
        username: '',
        password: '',
        nikename: '',
        msg: '',
        files: data,
    
    };
    reg = () => {
        let formData = new FormData();
        formData.append('username', this.state.username)
        formData.append('password', this.state.password)
        formData.append('nikename', this.state.nikename)

        // let input = document.getElementById('icon')
        formData.append('icon', this.state.files[0].file)

        React.axios({
            url: '/api/reg',
            method: 'post',
            data: formData
        }).then(
            res => {
                console.log(res)
                if (res.data.err === 1) {
                    this.setState({msg: res.data.msg,files: data,})
                } else {

                    this.props.history.push('/login')
                }
            }
        )
    };
    changeIpt = (ev) => {
        this.setState({
            [ev.target.name]: ev.target.value
        })
    };
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
      onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
          multiple: index === 1,
        });
      }
    render() {
        const { files } = this.state;
        return (
            <div className="reg">
                <div className="login-box">
                    <div className="lg-title">用户注册</div>
                    <ImagePicker
                    length="1"
          files={files}
          onChange={this.onChange}
          className='ic'
          selectable={files.length < 1}
          
        />
                    <div className="login-form">
                        <form action="#">
                            <div className="login-user-name common-div">
            	<span className="eamil-icon common-icon">
                	<img src={[require("../assets/img/user/eamil.png")]} alt=""/>
                </span>
                                <Input name="username" type="text" value={this.state.username} onChange={this.changeIpt}
                                       placeholder="请输入用户名"/>
                            </div>
                            <div className="login-user-name common-div">
            	<span className="eamil-icon common-icon">
                	<img src={[require("../assets/img/icon/icon-kf.png")]} alt=""/>
                </span>
                                <Input name="nikename" type="text" value={this.state.nikename} onChange={this.changeIpt}
                                       placeholder="请输入昵称"/>
                            </div>
                            <div className="login-user-pasw common-div">
            	<span className="pasw-icon common-icon">
                	<img src={[require("../assets/img/user/password.png")]} alt=""/>
                </span>
                                <Input name="password" type="password" value={this.state.password}
                                       onChange={this.changeIpt} placeholder="请输入密码"/>
                            </div>
                            {/* <div className="uploadWallpaperButton" id="uploadWallpaperButton">
                                上传头像<input type="file" id="icon" style={{display: "block"}}/>

                            </div> */}

                            <a className="login-btn common-div" onClick={this.reg}>注册并登录</a>
                            {/* <a  className="login-oth-btn common-div">微信登陆</a>
            <a  className="login-oth-btn common-div">QQ登陆</a>  */}
                        </form>
                    </div>
                    <div className="forgets">
                        <a>忘记密码？</a>

                    </div>
                </div>
            </div>
        )
    }
}