import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button'
import { connect } from './react-redux';
class Content extends React.Component {
    render() {
        console.log(this)
        return <div className=''>
            <h2 style={{color:this.props.color}}>内容部分</h2>
            <Button></Button>
        </div>;
    }
}
Content = connect((state)=>{
    return{
        color:state.colorReducer.color
    }
},(dispatch)=>{
    return{
        dispatch:dispatch
    }
})(Content)
export default Content