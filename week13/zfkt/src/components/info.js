import React from 'react';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import Home from './home/home'
import Lesson from './lesson/lesson'
import User from './user/user'
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
                    <Route path='/index/lesson' component={Lesson}></Route>
                    <Route path='/index/user' component={User}></Route>
                </Switch>
            </div>
            <div className='nav_box'>
                <NavLink to='/index/home'>
                    <div></div>
                    <div>首页</div>
                </NavLink>
                <NavLink to='/index/lesson'>
                    <div></div>
                    <div>课程中心</div>
                </NavLink>
                <NavLink to='/index/user'>
                    <div></div>
                    <div>个人中心</div>
                </NavLink>
            </div>
        </div>;
    }
}

export default App