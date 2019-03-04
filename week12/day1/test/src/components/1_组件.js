import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// 使用 Hello时 会把行内属性 包装到一个对象中 然后传给 Hello组件
function Hello(props) {
    // 函数声明方式 拿不到this
    console.log(props)
    console.log(this);
    let str = '<h2>字符串str</h2>'
    return(
        <div className={props.className}>
            <h1>hello{props.name}</h1>
            {str}
            <div dangerouslySetInnerHTML={{__html:str}}></div>
            {/*  dangerouslySetInnerHTML 用来显示内容标签的 */}
        </div>
    )
}
console.log(Component)
class App extends Component {
    constructor(props) {
        super(props);// super 就是 Component的函数体
        // this.props = props 
        // super 执行； 把 super中的this指向了当前字类的实例
        console.log(props)
        console.log(this.props)
    }
    render() {
        return <div className=''>

        </div>;
    }
}

ReactDOM.render(<div>
    <Hello name='珠峰' className='aaa'/>
    <App name='APP'></App>
</div>,window.root)