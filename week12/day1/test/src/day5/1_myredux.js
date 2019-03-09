import React from 'react';
import ReactDOM from 'react-dom';

import {store} from './store/index'
import {add,remove,change} from './store/actions'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count:store.getState().countReducer.count,
            color:store.getState().colorReducer.color
        }
    }
    componentDidMount(){
        store.subscribe(()=>{this.setState({
            count:store.getState().countReducer.count,
            color:store.getState().colorReducer.color
        })})
    }
    add1(){
        // store.dispatch({type:"ADD_COUNT",num:10})
        store.dispatch(add(100))
    }
    remove1(){
        // store.dispatch({type:"REMOVE_COUNT",num:100})
        store.dispatch(remove(100))
    }
    changeColor(str){
        store.dispatch(change(str))
    }
    render() {
        console.log(store.getState())
        return <div className=''>
            <h1 style={{color:this.state.color}}>{this.state.count}</h1>
            <button onClick={()=>{this.add1()}}>增加</button>
            <button onClick={()=>{this.remove1()}}>减少</button>

            <div>
                <button onClick={()=>{this.changeColor('blue')}}>蓝色</button>
                <button onClick={()=>{this.changeColor('red')}}>红色</button>
            </div>
        </div>;
    }
}

export default App