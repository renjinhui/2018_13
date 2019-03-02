import React from 'react';
import ReactDOM from 'react-dom';

let str = 'hello 珠峰';
let ary = [1,2,3];
let n = 101;
// 若 n 是一个偶数 则展示一个 h1 里边显示 偶数
// 若 n 是一个奇数 则展示一个 h2 里边显示 奇数
var fn = function fn(){
    // 
    if(n%2==0){
        return <h1>{n}偶数</h1>
    }else{
        return <h2>{n}奇数</h2>
    }
}
// var fn = function(){};
// function 声明的函数不能重复命名

// render(jsx结构，容器，回调函数)
// style 使用时需要放一个对象(普通的JS对象)
let obj = {color:'red',fontSize:'30px'}
ReactDOM.render(<div id='qqq' 
                     htmlFor='eeee'
                     className={'www'} 
                     style={obj}
                >
        {/* render 函数 ？？？  */}
        hello world
        {str}
        <h1>{ary}</h1>
        {
            n%2 === 0?
            <h1>{n}是偶数</h1>
            :
            <h2>{n}是奇数</h2>
        }
        {fn()}
        <input id="a1" type="checkbox" name="a" value="33023" /> 
        <label htmlFor="a1" >.NET Framework 2.0</label>
    </div>,
    document.getElementById('root'),
    function(){
        console.log(document.getElementById('qqq'))
    }
)
console.log(document.getElementById('qqq'))