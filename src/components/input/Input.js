import React from 'react'
import './Input.css'
import propTypes from 'prop-types';

export default class Input extends React.Component{
    render(){
        let {type, value ,onChange,name,placeholder} = this.props;
        return(
            <div className="input">
                <input name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}  />
            </div>
        )
    }
}
Input.defaultProps={
    type:"text",
  label:'',
  value:'',
  defaultValue:'',
  name:'',
  onChange:()=>{},
  placeholder:''
}

Input.propTypes={
    type:propTypes.string,
  label:propTypes.string,
  name:propTypes.string,
  value:propTypes.string,
  defaultValue:propTypes.string,
  onChange:propTypes.func,
  placeholder:propTypes.string
}
