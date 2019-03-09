import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './header'
import Content from './content'
import {Provider} from './react-redux'
// 目的是 把 store 跟 context 结合到一块
import {store} from '../store/index';
// 引入 store
class App extends React.Component {
    // static childContextTypes = {
    //     // color:PropTypes.string
    //     store:PropTypes.object
    // }
    // getChildContext(){
    //     return {
    //         // color:this.state.color
    //         store:store
    //     }
    // }
    // constructor() {
    //     super();
        
    // }
    // componentDidMount(){
    //     store.subscribe(()=>{
    //         this.setState({})
    //     })
    // }
    render() {
        return <Provider store={store}>
            <div className=''>
                <Header  qq='12'/>
                <Content/>
            </div>;
        </Provider>
    }
}

export default App