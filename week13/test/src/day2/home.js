import React from 'react';
import {Route,NavLink} from 'react-router-dom'
import Son from './son'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <NavLink to='/home/son'><button>首页儿子</button></NavLink>
            首页
            {/* {this.props.children} */}
            <Route path='/home/son' component={Son}></Route>
        </div>;
    }
}

export default App