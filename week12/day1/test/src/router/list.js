import React from 'react';
import ReactDOM from 'react-dom';
import QQQ from './qqq'
import {Route,Link} from 'react-router-dom'
class List extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className=''>
        List
        <Route path='/list/qqq' component={QQQ}/>
        </div>;
    }
}

export default List