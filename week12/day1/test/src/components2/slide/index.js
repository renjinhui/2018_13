import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css'

import Arrow from './arrow'
import Item from './item'
import Dot from './dot'
class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            ary:[1,2,3],
            index:0 // 控制显示第几张
        }
        
    }
    turn(n){
        // n 确定 前进或者后退
        this.setState({
            index:this.state.index+n
        })
    }
    move(){
        this.timer = setInterval(()=>{
            this.turn(1)
        },3000)
    }
    componentDidMount(){
        this.move();
    }
    render() {
        return <div className='container'>
            <Arrow/>
            <Item 
                data={this.state.ary} 
                index={this.state.index}
                initIndex={(n)=>{this.setState({index:n})}}
                ></Item>
            <Dot/>
        </div>;
    }
}

export default Slider