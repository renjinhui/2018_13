import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            color:store.getState().color
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                // 每次dispatch完成之后 都要触发该函数
                color:store.getState().color
            })
        })
    }
    change1(str){
        //我们是想要改变 store里的state中的color
        store.dispatch({type:'CHANGE_COLOR',color:str})
    }
    render() {
        return <div className=''>
            {/* {store.getState().color} */}
            <h1 style={{color:this.state.color}}>珠峰</h1>
            <button onClick={()=>{this.change1('red')}}>变红</button>
            <button onClick={()=>{this.change1('blue')}}>变蓝</button>
        </div>;
    }
}

export default App