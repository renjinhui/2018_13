import React from 'react';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import Home from './home/home'
import Lesson from './lesson/lesson'
import Echart from './lesson/echart'
import User from './user/user'
import  '../css/info.css'

class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this)
        return <div className=''>
            <div className='content_box'>
                <Route path='/index' exact render={
                    ()=> <Redirect to='/index/home'></Redirect>
                }></Route>
                <Switch>
                    <Route path='/index/home' component={Home}></Route>
                    <Route path='/index/lesson' component={Echart}></Route>
                    <Route path='/index/user' component={User}></Route>
                </Switch>
            </div>
            <div className='nav_box'>
                <NavLink to='/index/home'>
                    <div className='iconfont icon-yidiandiantubiao04'></div>
                    <div>首页</div>
                </NavLink>
                <NavLink to='/index/lesson'>
                    <div className='iconfont icon-Dollar'></div>
                    <div>课程中心</div>
                </NavLink>
                <NavLink to='/index/user'>
                    <div className='iconfont icon-user'></div>
                    <div>个人中心</div>
                </NavLink>
            </div>
        </div>;
    }
}

export default App