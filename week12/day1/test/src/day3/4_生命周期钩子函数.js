import React from 'react';
import ReactDOM from 'react-dom';

class Son extends React.Component{
    constructor(){
        super()
    }
    componentWillMount(){
        // console.log('son-will')
    }
    componentDidMount(){
        // console.log('son-did');
        // this.timer = setInterval(()=>{
        //     this.setState({})
        //     // console.log(11231)
        // },1000)
    }
    componentWillReceiveProps(nextProps){
        // nextProps 更新后的 属性值
        // 子组件身上的 钩子函数；
        // 在父组件更新 props 时触发；初次加载组件时不执行
        // 在子组件的render之前执行
        // console.log(nextProps); //新值
        // console.log(this.props)// 老值
    }
    shouldComponentUpdate(nextProps,nextState){
        // nextProps 更新后的 属性
        // nextState 更新后的 状态
        // 询问组件是否要更新的一个钩子函数
        // 询问组件是否要重新 render
        // 返回true 就是要重新render; false 就不再更新
        // 这是一个可以提高代码性能的一个钩子函数
        // 不管是 状态的更新 或者是 属性的更新 都会触发该函数
        console.log(nextProps)
        console.log(nextState)
        console.log(this)
        return false;
    }
    componentWillUpdate(){
        // 再重新render执行之前会触发该函数
        // 相当于 vue 的 beforeUpdate
    }
    componentDidUpdate(){
        // 在重新render之后会触发该函数
        // 在 更新的这两个钩子函数中 都不要写能触发
        // 重新render的操作
    }
    componentWillUnmount(){
        // 组件将要销毁时 触发
        // console.log('SON 将要销毁');
        clearInterval(this.timer);
    }
    render(){
        console.log('son-render')
        return (
            <h1>
                SON
                {new Date().toLocaleString()}
            </h1>
        )
    }
}

class App extends React.Component {
    static defaultProps={
        // 设置 属性的默认值
    }
    static propTypes = {
        // 设置属性的类型
    }
    constructor() {
        super();
        console.log(1)
        this.state = {
            flag:true
        }
    }
    componentWillMount(){
        // 在render之前执行
        console.log(2)
        // console.log(document.getElementById('btn'))
    }
    componentDidMount(){
        // DOM渲染完成之后
        // 一般放置一些ajax请求
        // console.log(document.getElementById('btn'))
        console.log(4)
    }
    //  constructor componentWillMount componentDidMount
    //  只执行一次
    render() {
        console.log(3)
        // 父组件更新的 render 只会触发子组件的 render;
        // 不会再触发子组件 constructor componentWillMount componentDidMount
        return <div className=''>
            <button id='btn' onClick={()=>{
                this.setState({
                    flag:!this.state.flag
                });
            }}>按钮</button>
            <Son flag={this.state.flag} www='123131'/>
            {/* {
                this.state.flag 
                ?
                <Son></Son>
                :''
            } */}
        </div>;
    }
}

export default App

/*
    static defaultProps={}
    static propTypes={} prop-types  // 等价于 vue props:{default:,type:Number}
    constructor(){
        super()
    }

    componentWillMount(){}  // vue created
    render(){}  
    **componentDidMount(){} // vue mounted
    componentWillReceiveProps(nextProps){}
    **shouldComponentUpdate(nextProps,nextState){}
    componentWillUpdate(){}     // beforeUpdate
    componentDidUpdate(){}      // updated
    componentWillUnmount(){}    // beforeDestroy
*/