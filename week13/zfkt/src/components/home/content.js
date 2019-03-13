import React from 'react';
import Item from './item'
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='home_content'>
            <h2>全部课程</h2>
            <Item></Item>
        </div>;
    }
}

export default App