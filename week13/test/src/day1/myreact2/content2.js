import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {changeColor,changeColor1} from '../store/actions'
class Content extends React.Component {
    constructor() {
        super();
        
    }
    fn(str){
        this.props.change1(str);
    }
    render() {
        return <div className=''>
            <h2 style={{color:this.props.color1}}>这是内容2</h2>
            <button onClick={()=>{this.fn('blue')}}>变蓝2</button>
            <button onClick={()=>{this.fn('red')}}>变红2</button>
        </div>;
    }
}
Content = connect((state)=>{
    return{
        color1:state.myCol.color
    }
},{
    change1:changeColor1,
    change:changeColor
})(Content)

export default Content