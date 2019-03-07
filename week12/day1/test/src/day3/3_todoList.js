import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        this.state={
            val:'吃饭',
            ary:[],
            name:'123'
        }
    }
    fn(e){
        let v = e.target.value;
        this.setState({
            val: v
        })
    }
    add(v,ary){
        let a = this.state.val;// input的内容
        this.state.ary.push(a);// 把内容放到数组里边
        // ary.push(v);
        this.state.val = '';
        this.setState({})
    }
    render() {
        let {val,ary,name} = this.state;
        return <div className=''>
            <input value={val} onChange={(e)=>{this.fn(e)}}/>
            {/* <button onClick={this.add.bind(this,val,ary)}>提交</button> */}
            <button onClick={this.add.bind(this)}>提交</button>
            {/* {name} */}
            <ul>
                {
                    ary.map((item,i)=>{
                        return (
                            <li key={i}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>;
    }
}

export default App