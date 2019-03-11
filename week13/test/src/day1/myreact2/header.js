import React from 'react';
import ReactDOM from 'react-dom';

import {connect} from 'react-redux'
class Header extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <h1 style={{color:this.props.color}}>头部</h1>
        </div>;
    }
}
Header = connect((state)=>{
    return{
        // state,
        color:state.myCol.color
    }
},(dispatch)=>{
    return{
        dispatch
    }
})(Header)


export default Header