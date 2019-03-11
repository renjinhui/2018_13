import React from 'react';
import Content from './content'
import Header from './header'

import store from '../store/index'
// import {Provider} from '../../react-redux'
import {Provider} from 'react-redux'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        // Provider 是 react-redux提供的一个容器；
        // 内部就是简单给 context 赋值了一下
        return (<Provider store={store}>
            <div className=''>
                <Header/>
                <Content/>
            </div>
        </Provider>)
    }
}

export default App

//  使用 redux + react-redux
//  首先在根组件引入 创造好的 store 和 Provider组件(react-redux)
//  在后代组件中  我们使用 connect 函数 传入两个函数 和 当前组件
//  这时 我们就可以通过 this.props 调用到 store中的状态 和 dispatch