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
        return <div className='container'
            onMouseEnter={()=>{clearInterval(this.timer)}}
            onMouseLeave={()=>{this.move()}}
        >
            {/* 子组件  调用  父组件方法 */}
            <Arrow 
                onLeft={()=>{this.turn(-1)}} // 点击左按钮执行的函数
                onRight={()=>{this.turn(1)}} // 点击右按钮执行的函数 都是自己定义的函数
            />
            <Item 
                data={this.state.ary} 
                index={this.state.index}
                initIndex={(n)=>{this.setState({index:n})}}
                ></Item>
            
            {/* 把数据传给 Dot 组件 */}
            <Dot 
                data={this.state.ary}
                index={this.state.index}
                initIndex={(n)=>{this.setState({index:n})}}
                />
        </div>;
    }
}

export default Slider