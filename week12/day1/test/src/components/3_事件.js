import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    fn(e,n){
        // 对应的事件对象在函数执行的过程中可以获取
        // 事件执行完毕之后就不能在获取到了， react 把他设置成了null
        console.log(n)
        console.log(this)
        console.log(arguments)
        // 阻止默认事件  原生可以 e.preventDefault() 或者 return false
        // 但是 在react 中我们只能通过 e.preventDefault()阻止
        this.setState({
            count: ++this.state.count
        })
    }
    fn2=()=>{

    }
    render() {
        return <div className=''>
            <h1>当前显示的数字是{this.state.count}</h1>

            {/* bind 的写法 事件对象在实参的最后一个位置 */}
            <button onClick={this.fn.bind(this,1,2,3)}>按钮</button>

            {/* 箭头函数的写法 事件对象跟你传递的位置一致 */}
            <button onClick={(e)=>{this.fn(e,1)}}>按钮+</button>
        </div>;
    }
}

ReactDOM.render(<App></App>,window.root)