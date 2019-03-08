// // 高阶函数
// console.log(fn(1)(2)(3))
// function  fn(n) {
//     return function (m) {
//         return function (c) {
//             return n+m+c
//         }
//     }
// }
// let fn2 = n=>m=>c=>m+n+c

// let f = fn(2);

// let f2 = function(q){
//     console.log(q)
// }
// function  changeFN(f) {
//     return function(){
//         let q = 100;
//         return f(q)
//     }
// }
// let f3 = changeFN(f2);

import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props)
        return <div className=''>
            app 
        </div>;
    }
}

const hightComponent = (Comp)=>{
    // hightComponent 高阶组件
    // Comp 形参  是个要处理的组件
    class NewComp extends React.Component{
        constructor(){
            super();
            this.state = {
                name:'珠峰',
                age:10
            }
        }
        render(){
            return <div>
                <h1>hello world</h1>
                <Comp {...this.state} {...this.props}></Comp>
                {/* 可以通过上述方式 直接把state中的所有内容传给子组件 */}
            </div>
        }
    }
    return NewComp
}
const App2 = hightComponent(App)

export default App2

//纯组件  纯函数
// 纯函数  只跟 形参有关系，函数执行不会有任何副作用；
// 纯组件  展示的内容 只跟 props 有关；组件本身不会修改除了props之外的任何数据

// 高阶组件  就是一个函数，接受一个组件作为实参；返回值是一个依赖于实参的新组件

