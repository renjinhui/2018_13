import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            flag : true,
            index:0
        }
    }
    fn(){
        // this.state.flag = false;
        // this.setState({});

        this.setState({
            flag:false
        })
        this.setState((nextState)=>{
            return{
                flag: nextState.flag
            }
        })
        this.setState({flag:false},()=>{
            // 回调函数 在重新render之后
        })
    }
    render() {
        function fn() {
            if(this.state.flag){
                return (<h1></h1>)
            }else{
                return (<h2></h2>)
            }
        }
        let { index } = this.state;
        return <div className=''  style={{}}>
            {
                this.state.flag ?
                <h1></h1>
                :
                <h2></h2>
            }
            {
                fn.call(this)
            }
            <button onClick={(e)=>{console.log(e)}}>按钮</button>
            <div ref='wer'>恩斯特微软特是德国首都</div>
            <div ref={(c)=>{this.aaa=c}} >恩斯特微软特是德国首都</div>

            {/* <button className={index==0?'current':''} onClick={()=>{this.setState({index:0})}}>1</button>
            <button className={index==1?'current':''} onClick={()=>{this.setState({index:1})}}>2</button>
            <button className={index==2?'current':''} onClick={()=>{this.setState({index:2})}}>3</button> */}
            {
                [1,2,3].map((item,i)=>{
                    return (
                        <button className={index==i?'current':''} onClick={()=>{this.setState({index:i})}} key={i}>{item}</button>
                    )
                })
            }
            <div style={{display:index==0?'block':'none'}}>1</div>
            <div style={{display:index==1?'block':'none'}}>2</div>
            <div style={{display:index==2?'block':'none'}}>3</div>
        </div>;
    }
}

// react 实现双向数据绑定
// 在组件里设置一个状态state val， 给对应的input框的value属性绑定改状态val
// 再给input 绑定一个 onChange事件；在对应的函数里 更新本地状态

export default App