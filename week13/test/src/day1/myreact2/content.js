import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {changeColor,changeColor1} from '../store/actions'
class Content extends React.Component {
    constructor() {
        super();
        
    }
    fn(str){
        // this.props.dispatch(changeColor(str))
        // changeColor 返回值是一个 对象
        // changeColor1 返回值是一个 函数f
        // 那么函数f执行时 会有两个实参 一个dispatch  一个getState
        this.props.dispatch(changeColor1(str))
    }
    render() {
        return <div className=''>
            <h2 style={{color:this.props.color1}}>这是内容</h2>
            <button onClick={()=>{this.fn('blue')}}>变蓝</button>
            <button onClick={()=>{this.fn('red')}}>变红</button>
        </div>;
    }
}
Content = connect((state)=>{
    return{
        color1:state.myCol.color
    }
},(dispatch)=>{
    return{
        dispatch
    }
})(Content)

export default Content