import React from 'react';
import ReactDOM from 'react-dom';
// react 组件中的数据来源有两个 属性(props) 状态(state)
// react 单向数据流  只有数据驱动视图
// props 里的属性是不能修改的 属于父组件的
// state 里的属性是可以修改的 属于该组件私有的
console.log(React.Component.prototype)
class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            age:10,
            qq:props.obj
        }
    }
    fn(){
        console.log(this);
        // this.props.name = '珠峰培训';
        // this.props.obj.a = 24;
        this.state.qq.a = 24
        // this.state.age++;
        this.setState({
            age: ++ this.state.age
        });// 能触发 render函数重新执行  在Component 的原型上
    }
    render() {
        let {className,name,qqq,obj} = this.props;
        return <div className={className}>
        {obj.a}
            <h1>
                姓名是：{name}；<br/>
                属性QQQ是{qqq}<br/>
                年龄是{this.state.age}
            </h1>
            <button onClick={this.fn.bind(this)}>按钮</button>
        </div>;
    }
}
let obj = {a:12,b:13}
ReactDOM.render(<div obj={obj}>
    {/* 在原生标签上不能有对象的数据格式 */}
    {obj.a}
    <App qqq='123' name='珠峰' obj={obj}/>
    {/* 自定义组件  行内属性的值 类型不限；可以是对象 */}
</div>,window.root)