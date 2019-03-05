import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css'

import Arrow from './arrow'
import Item from './item'
import Dot from './dot'
class Slider extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        return <div className='container'>
            <Arrow/>
            <Item></Item>
            <Dot/>
        </div>;
    }
}

export default Slider