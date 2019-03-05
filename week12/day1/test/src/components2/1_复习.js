// function  class
// Component

// props  在子组件不可更改
// state  组件私有的；可以更改
import React from 'react';
import ReactDOM from 'react-dom';
import MyPropTypes from 'prop-types';
console.log(MyPropTypes)
class Son extends React.Component{
    static propTypes = {
        // 校验 props类型的 属性名是定义死的 propTypes
        name:MyPropTypes.oneOfType([
            // 可以是多个类型的数据类型
            MyPropTypes.number,MyPropTypes.string
        ]),
        age:MyPropTypes.number.isRequired,// 必传  而且还需要是一个数字
                                          // 这个isRequired属性跟设置默认值有点冲突
        ary:MyPropTypes.array,
        obj:MyPropTypes.object
    }
    static defaultProps = {
        // react 规定的设置 props默认值的方式
        // defaultProps 定死的名字
        name:'珠峰',
        // age:10,
        address:'hahah'
    }
    render(){
        let {name,age} = this.props;
        return(
            <div>
                <button>变色</button>
                my name is {name||"hahaha"}
                {age}
            </div>
        )
    }
}

class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div className=''>
            <Son name={1} age={10}/>
        </div>;
    }
}

export default App