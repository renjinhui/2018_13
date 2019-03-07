import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state={
            val:'珠峰'
        }
    }
    fn(e){
        console.log(e.target.value);
        // val = e.target.value;
        // this.setState({})
        this.setState({
            val:e.target.value
        })
    }
    render() {
        console.log(111)
        let {val} = this.state;
        return <div className=''>
            <input value={val} onChange={this.fn.bind(this)}/>
            {/* 
                react 的 onChange 是当 input内容改变时 就直接触发了
                不用等着失去焦点
             */}
        </div>;
    }
}

export default App