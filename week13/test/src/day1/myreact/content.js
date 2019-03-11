import React from 'react';
import ReactDOM from 'react-dom';
import {changeColor,changeColor1} from '../store/actions'
// import {connect} from '../../react-redux'
import {connect} from 'react-redux'
class Content extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <h2 style={{color:this.props.color}}>内容部分</h2>
            <button onClick={()=>{
                // this.props.dispatch({
                //     type:"CHANGE_COLOR",
                //     color:'blue'
                // })
                // setTimeout(()=>{
                //     this.props.dispatch(changeColor('blue'))
                // },2000)
                // this.props.dispatch(changeColor('blue'))

                // 通过this.props执行
                this.props.qqq('blue')
            }}>变蓝</button>
            <button onClick={()=>{
                // 相当于直接当用了 store里的dispatch
                this.props.dispatch(changeColor('red'))
            }}>变红</button>
        </div>;
    }
}
Content = connect((state)=>{
    return{
        color:state.myCol.color
    }
},{qqq:changeColor1})(Content)

export default Content