import React from 'react';
import ReactDOM from 'react-dom';

class Count extends React.Component{
    // constructor 可以不写;  写了的话就必须有 super()
    
    render() {
        return(
            <div>
                <h1>展示模块</h1>
                <h2>当前数字是{this.props.n}</h2>
            </div>
        )
    }
}
class Button extends React.Component{
    fn(){
        console.log(this)
    }
    render(){
        console.log(this.props)
        let {text='按钮',www} = this.props;
        return (
            <div>
                {/* <button onClick={()=>{www()}}>{text}</button> */}
                <button onClick={this.props.www.bind(this,"珠峰")}>按钮2</button>
            </div>
        )
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            count:0,
            name:'珠峰'
        }
    }
    add(n){
        // 改变数据 触发视图更新即可
        // this.state.count++;
        // this.setState({});
        let m = this.state.count += n
        this.setState({
            count:m,
            // name:str
        });
    }
    remove(){
        this.setState({
            count: -- this.state.count
        })
    }
    render() {
        return <div className=''>
            {/* <button onClick={()=>{this.add()}}>按钮</button> */}
            {/* <Button www={this.add.bind(this)} qqq={(s)=>{this.add(s)}}/> */}
            <Button text='增加' www={()=>{this.add(1)}}/>
            <Button text='减少' www={()=>{this.add(-1)}}/>
            <Button text='减少2' www={()=>{this.remove()}}/>
            <Count n={this.state.count}/>
            <h1>{this.state.name}</h1>
        </div>;
    }
}
//  父传子  子使用父的数据    通过自定义属性传递，子组件通过 this.props.xxx调用
//                                             不可以修改props中的属性

// 子传父   子修改父的数据(父用子)    通过自定义属性传递一个函数体，子组件通过this.props.xxx(参数)
//                                             通过让函数体执行，结合传参数的方式修改父组件数据         


ReactDOM.render(<App/>,window.root)