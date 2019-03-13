import React from 'react';

import {BrowserRouter,Route,Link,NavLink} from 'react-router-dom'
import Home from './home'
import List from './list'
import User from './user'
import Index from './index'
import Son from './son'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return (
            <BrowserRouter>
                <Index>
                    {/* path  render  component  */}
                    <Route path='/home' component={Home}>
                        {/* <Route path='son' component={Son}></Route> */}
                    </Route>
                    <Route path='/list' component={List}></Route>
                    <Route path='/user' component={User}></Route>

                    {/* <NavLink to='/home' className='qqq' activeClassName='current'>home</NavLink>
                    NavLink 可以指定选中当前路径是的类名  activeClassName 
                    <Link to='/list' className='www'>list</Link>
                    <Link to='/user'>user</Link>
                    <Link to={{pathname:'/home',search:'?q=12&w=23'}}>首页</Link> */}
                </Index>
            </BrowserRouter>
        )
    }
}

export default App