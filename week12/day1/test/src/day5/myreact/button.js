import React from 'react';
import {connect} from './react-redux'
import {change} from '../store/actions'
class Button extends React.Component {
    change1(str){
        this.props.dispatch(change(str));
    }
    render() {
        console.log(this)
        return <div className=''>
            <button onClick={()=>{this.change1('red')}}>变红</button>
            <button onClick={()=>{this.change1('blue')}}>变蓝</button>
        </div>;
    }
}
Button = connect((state)=>{
    return{
        state:state
    }
},(dispatch)=>{
    return{
        dispatch:dispatch
    }
})(Button)
export default Button