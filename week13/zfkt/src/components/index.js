import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Info from './info'
import Login from './login/login'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props)
        return (
            <BrowserRouter>
                <div className='box'>
                    <Route path='/' exact render={()=>{
                        let isLogin = true;
                        let str = '/login';
                        str = isLogin ? '/index' : '/login';
                        return <Redirect to={str}></Redirect>
                    }}></Route>
                    <Switch>
                        <Route path='/index' component={Info}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route render={()=><h1>404</h1>}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App