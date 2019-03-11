import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,BrowserRouter,MemoryRouter,Route,Link} from 'react-router-dom'
// Link 相当于 vue-router 的 router-link
// Route 相当于 vue-router 的 router-view
import Home from './home'
import List from './list'
import User from './user'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <BrowserRouter>
                <div>
                    <Route path='/' render={
                        ()=>{return <h1>哈哈</h1>}
                    }
                    ></Route>
                    
                    <Route path='/home' component={Home}></Route>
                    {/* 相当于 用 home组件把 这个 Route标签替换了 */}

                    <Route path='/list' component={List}></Route>
                    <Route path='/user' component={User}></Route>
                    
                    <Link to='/home'>首页</Link>
                    <Link to='/list'>列表页</Link>
                    <Link to='/user'>用户中心</Link>
                </div>
            </BrowserRouter>
        </div>;
    }
}

export default App