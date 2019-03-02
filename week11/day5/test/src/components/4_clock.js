import React from 'react'
import ReactDOM from 'react-dom'
let time = new Date().toLocaleString();
let ele = (<div>
    {time}
</div>)
setInterval(()=>{
    time = new Date().toLocaleString();
    ele = (<div>
        {time}
    </div>)
    // console.log(11)
    console.log(ele)
    ReactDOM.render(ele,document.getElementById('root'))
},1000)
// ReactDOM.render(ele,document.getElementById('root'))