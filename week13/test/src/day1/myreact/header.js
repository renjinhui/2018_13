import React from 'react';
import ReactDOM from 'react-dom';
// import {connect} from '../../react-redux'
import {connect} from 'react-redux'
// 子组件必须引入 connect
class Header extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <h1 style={{color:this.props.color}}>我是头部</h1>
        </div>;
    }
}
const mapStateToProps= (state)=>{
    // state是个形参  react-redux会传给该函数实参 实参就是store里 共用的state
    // 通过这个函数 我们就可以在Header中通过 this.props去调用store中的属性
    return{
        color:state.myCol.color
    }
}
const mapDispatchToProps = (dispatch)=>{
    // dispatch 也是一个形参  react-redux会传给该函数实参 实参就是store里 共用的dispatch
    return {
        dispatch
    }
}
Header = connect(mapStateToProps,mapDispatchToProps)(Header)

export default Header