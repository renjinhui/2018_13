import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from './redux'

const store = createStore(countReducer)

function countReducer(state,action) {
    if(!state){
        return {
            count:0
        }
    }
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                ...state,
                count:state.count+action.num
            }
            break;
        case 'REMOVE_COUNT':
            return {
                ...state,
                count:state.count-action.num
            }    
        default:
            return state
            break;
    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count:store.getState().count
        }
    }
    componentDidMount(){
        store.subscribe(()=>{this.setState({
            count:store.getState().count
        })})
    }
    add(){
        store.dispatch({type:"ADD_COUNT",num:10})
    }
    remove(){
        store.dispatch({type:"REMOVE_COUNT",num:100})
    }
    render() {
        console.log(store.getState())
        return <div className=''>
            <h1>{store.getState().count}</h1>
            <h1>{this.state.count}</h1>
            <button onClick={()=>{this.add()}}>增加</button>
            <button onClick={()=>{this.remove()}}>减少</button>
        </div>;
    }
}

export default App