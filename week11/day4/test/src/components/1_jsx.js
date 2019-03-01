// js + xml   jsx
import React from 'react'
import ReactDOM from 'react-dom' //处理jsx的语法


// render(jsx结构，容器，回调函数)
// 回调函数会在DOM放入容器之后触发

// react 没有指令
let name = '珠峰世纪';// react 语法 只有一个大括号
let ary = [1,2,3,4,5];
let obj = {name:"珠峰",n:123};// jsx语法不支持直接在xml中写对象
// react 的jsx中 也是只能有一个根元素
let fn = function () {
    console.log(666);
    let ary = []
    for(let i = 0; i < 6; i++){
        ary.push(<li key={i}>{i}</li>)
    }
    return ary
}
let ele = <div qqq={obj.name} q='12313' className='www' htmlFor='qqq'>
     {/* 对于类名  我们不能使用 class  需要使用 className属性  */}
     {/* 对于 for属性  我们使用htmlFor代替 */}
    <h1 id='haha'>hello world</h1>
    你好 珠峰
    {name} 
    {/* 大括号中可以书写值类型 也可以写三元表达式 也可以写函数执行 */}
    <div>{ary}</div>
    <div>{obj.n}</div>
    {fn()}
    {
        ary.map((item,i)=>{
            return <li key={i}>{item}</li>
        })
    }
</div>;
// console.log(document.getElementById('haha')); null
ReactDOM.render(ele,document.getElementById('root'),function(){
    console.log(document.getElementById('haha'));
})