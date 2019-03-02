import React from 'react';
import ReactDOM from 'react-dom';

// let ele = <div>hello world</div>;
// jsx语法 最终会被bable转译成 createElement执行
// createElement 执行的时候 会把标签转成 第一个参数
// 行内属性转成第二个参数(是一个对象)
// 第三个是标签里边的内容

// let ele = React.createElement('h1',null,'哈哈哈')
let ele = React.createElement(
    'h1',
    {id:'qqq',className:'www'},
    '哈哈哈',
    React.createElement('div',null,'呵呵呵'),
    React.createElement('div',null,'嘻嘻嘻')
);
let ele2 = <h1 id='qqq' className='www'>
                哈哈哈
                <div>呵呵呵</div>
                <div>嘻嘻嘻</div>
           </h1>;
// ele ele2 是完全等价的
// console.log(ele);
// console.log(ele2);

ReactDOM.render(ele,document.querySelector('#root'));