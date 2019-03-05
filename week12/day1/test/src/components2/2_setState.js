import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count:0,
            age:10
        }
    }
    fn(){
        console.log(this.state.count)
        // 在事件对应的函数 生命周期钩子函数中的都是异步的
        this.state.count = 2;
        this.setState({

        })
        // this.setState({count: ++this.state.count})
        // let q = {count: ++this.state.count}
        console.log(this.state.count)
    }
    fn2(){
        // this.setState({
        //     age:this.state.age+1
        // })
        // this.setState({
        //     count:this.state.count+2
        // })
        // console.log(this.state.count)
        // this.setState((prevState)=>{
        //     console.log(prevState);
        //     return{
        //         count:prevState.count+1
        //     }
        // })
        // this.setState((prevState)=>{
        //     console.log(prevState);
        //     return{
        //         count:prevState.count+1
        //     }
        // })
        this.setState({count:10},()=>{
            // 函数会在 count 改变完成之后 触发
            console.log(this.state.count)
        })
    }
    render() {
        return <div className=''>
            <button onClick={()=>{this.fn2()}}>按钮</button>
            {this.state.count}
            {this.state.age}
        </div>;
    }
}

export default App