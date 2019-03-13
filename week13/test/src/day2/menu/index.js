import React from 'react';

import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Info from './info'
import Login from './login'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    {/* <Info>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/list' component={List}></Route>
                        <Route path='/user' component={User}></Route>
                    </Info> */}
                    {/* exact 完全匹配 / ；不会匹配到 /home之类的路径 */}
                    <Route path='/' exact render={
                        ()=>{
                            let login = true;
                            // 判断是否是登录的状态
                            let str = login ? '/info' :'/login'
                            return <Redirect to={str}></Redirect> 
                            }
                        }
                    ></Route>
                    <Switch>
                        <Route path='/info' component={Info}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route render={()=><h1>404页面</h1>}></Route>
                        {/* 可以自己定义404路径 */}
                    </Switch>
                    
                </div>
            </BrowserRouter>
        )
    }
}

export default App