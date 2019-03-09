import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from './react-redux'
class Header extends React.Component {

    render() {
        console.log(this.props.color)
        return <div className=''>
            <h1 style={{color:this.props.color}}>这是头部</h1>
        </div>;
    }
}
const mapStateToProps = (state)=>{
    return{
        state1:state,
        color:state.colorReducer.color
    }  
}
const mapDispatchToProps = (dispatch)=>{
    return{
        dispatch:dispatch
    }
}

Header = connect(mapStateToProps,mapDispatchToProps)(Header)
export default Header