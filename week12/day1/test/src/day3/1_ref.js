import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component{
    fn(){
        console.log('hahaha')
    }
    render(){
        return(
            <h1>hello</h1>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        // this.setState({}) 死循环
        return <div className=''  ref='qqq'>
            <Hello ref={q=>this.www=q}/>
            <div ref={(q)=>{this.qqq=q}}>ｗｏｒｌｄ</div>
            {/* 
                ref 的两种方式  
                1、直接跟字符串  我们通过this.refs.xxx调用到DOM元素
                2、跟一个函数体  我们设置形参；把形参赋给this.xxx，
                                            然后通过this.xxx调用DOM元素
                ref 发现给的是一个函数体时；
                会默认执行该函数体 ，并且把获取到的元素通过参数的方式
                传给 我们自己定义的属性
            */}
            <button onClick={()=>{
                console.log(this.www.fn)
            }}>按钮</button>
        </div>;
    }
}

export default App