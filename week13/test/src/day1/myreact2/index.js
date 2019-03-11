import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import store123 from '../store/index'
import Header from './header'
import Content from './content'
import Content2 from './content2'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return (<Provider store={store123}>
            {/* 是把store 给了Provider的context;
            使得其所有的子组件都可以通过 context获取到store */}
            <div className=''>
                <Header/>
                <Content/>
                <Content2/>
            </div>
        </Provider>);
    }
}

export default App