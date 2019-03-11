import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
            首页
            <Link to='/user'>珠峰</Link>
        </div>;
    }
}

export default App