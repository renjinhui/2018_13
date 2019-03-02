import React from 'react'
import ReactDOM from 'react-dom'

// Component 是react 内部的一个类；
// 所有用class声明的组件都需要继承该类
// 所有用class声明的组件都要有一个render函数
// render函数返回的内容 就是该组件要展示的结构

// super() 传参 ；
// 若不传， 我们在 constructor内部  通过this调用不到对应的参数
// 若传， 可以在contructor中调用掉
// 不管传不传 在render中都能获取到 ？？？
console.log(React.Component.prototype);
class World extends React.Component{
    constructor(props){
        super(props);//super 父类的函数体
        console.log(this);
        console.log(this.props);
        // 我们一般把本组件的数据 放到 state中；
        // 这个state 是react 规定的属性
        this.state = {
            count:0,
            n:0,
            m:0,
            t:0
        }
    }
    // fn=()=>{
    //     console.log(this)
    // }
    fn(){
        // console.log(this);
        // this.state.count ++;
        // this.setState({
        //     count: this.state.count
        // }); // 触发render函数重新执行
        // this.state.count +=1
        this.setState({
            count: ++this.state.count,
            n:++this.state.n,
            m:++this.state.m,
        })
        // this.setState({
        //     // t:Math.random()
        // })
    }
    render(){
        // console.log(this)  ??? this.props
        let {className='qqq'} = this.props;
        console.log(11)
        // 给变量className 一个默认值
        return(
            <h1 className={'zzz '+className}>
                World
                当前数字是{this.state.count}
                当前数字是{this.state.n}
                当前数字是{this.state.m}
                <button onClick={this.fn.bind(this)}>按钮</button>
                <div qqq={this.state.t}></div>
            </h1>
        )
    }
}
class World2 extends React.Component{
    render(){
        return(
            <h1>World2</h1>
        )
    }
}
ReactDOM.render(<div>
    <World id='qqq' className='www'/>
    <World ccc='aaa'/>
    <World2/>
    <World2/>
</div>,document.getElementById('root'))