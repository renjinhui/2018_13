import React from 'react';
import {HashRouter as Router,MemoryRouter,Route,Switch,Redirect,Link,NavLink} from "react-router-dom";

import Home from './home'
import List from './list'
import Login from './login'
import User from './user'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return (<MemoryRouter>
            <div>
                {/* <Route path='/' exact component={Home}></Route> */}
                <Route path='/' exact render={()=>{return <h1>gsgs</h1>}}></Route>
                <Route path="/:name" component={Home}/>
                <Route path='/list' component={List}></Route>
                <Route path='/login' component={Login}></Route>
                <Route path='/user' component={User}></Route>

                <NavLink to={'/home'}>home</NavLink>
                <Link to={'/login'}>home2</Link>
                <Link to={'/list'}>home3</Link>
                
                <Link to={'/list/qqq'}>home3/qqq</Link>
                <Link to={'/user'}>home4</Link>
            </div>
        </MemoryRouter>);
    }
}

export default App