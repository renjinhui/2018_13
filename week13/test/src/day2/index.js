import React from 'react';
import {NavLink} from 'react-router-dom'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            <header>
                <NavLink to='/home'><button>首页</button></NavLink>
                <NavLink to='/list'><button>列表页</button></NavLink>
                <NavLink to='/user'><button>用户中心</button></NavLink>
                
                <NavLink to='/home/son'><button>首页儿子</button></NavLink>
            </header>
            <main>
                {this.props.children}
                {/* <h1>
                    <Route path='/home' component={Home}></Route>
                </h1>
                <Route path='/list' component={List}></Route>
                <Route path='/user' component={User}></Route> */}
            </main>
        </div>;
    }
}

export default App