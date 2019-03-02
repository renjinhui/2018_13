import React from 'react'
import ReactDOM from 'react-dom'

// react组件 有两种声明方式  1 function ； 2 class 声明
// 组件名 首字母必须大写（也就是函数名）
//  div h1 ...原有的html标签是react的内置组件
// 组件使用时 类似vue 直接当作标签名使用即可
function Hello(props){
    console.log(props)
    // props = {};
    // props.id = 'eee'; // 不能修改props内部的属性
    let {id,className} = props;// 对象的解构赋值
    return (
        <div id={id} className={className}>hello 你好</div>
    )
}


ReactDOM.render(<div>
    <Hello id='qqq' className='www'></Hello>
    {/* {Hello()} */}
</div>,document.getElementById('root'))
// 先把 组件的行内属性 组合到一个对象中
// 执行对应的函数 并把组合的对象传递过去
// 显示return的 DOM元素