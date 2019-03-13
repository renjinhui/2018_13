import React from 'react';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom'
import Home from './home'
import List from './list'
import User from './user'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <div style={{float:'left',width:'200px',background:'#ccc'}}>
                <NavLink to='/info/home'>首页</NavLink>
                <NavLink to='/info/list?q=12'>列表页</NavLink>
                <NavLink to='/info/user?r=23'>用户中心</NavLink>
                <NavLink to='/info/user?r=23'>用户中心</NavLink>
            </div>
            <div style={{float:"left",width:"600px"}}>
                {/* {this.props.children} */}
                <Route path='/info' exact render={
                    ()=> <Redirect to='/info/home'></Redirect>
                }></Route>
                <Switch>
                    {/* 使用 Switch组件；  
                        我们可以避免走到/home还能匹配到user ,
                        也就是说 Switch 可以让路由 匹配到某一个时；不再向下进行匹配
                    */}
                    <Route path='/info/home' component={Home}></Route>
                    <Route path='/info/list' component={List}></Route>
                    <Route path='/info/user' component={User}></Route>
                    <Route path='/info/intro/:idqqq' component={User}></Route>
                </Switch>
            </div>
        </div>;
    }
}

export default App