import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class GrandSon extends React.Component{
    static contextTypes={
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    constructor(){
        super()
    }
    render(){
        console.log(this)
        return(
            <button 
                style={{color:this.context.color}} 
                onClick={()=>{this.context.setColor('red')}}>
                变色
            </button>
        )
    }
}
class Son extends React.Component{
    static contextTypes={
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    constructor(){
        super()
    }
    render(){
        console.log(this)
        return(
            <div style={{color:this.context.color}}>
                <button onClick={()=>{this.context.setColor('green')}}>变色</button>
                son组件
                <GrandSon></GrandSon>
            </div>
        )
    }
}
class App extends React.Component {
    static childContextTypes = {
        color:PropTypes.string,
        setColor:PropTypes.func
    }
    constructor() {
        super();
        this.state = {
            color:'blue'
        }
    }
    setColor = (color) =>{
        this.setState({
          color
        })
    };
    getChildContext(){
        return{
            color:this.state.color,
            setColor:this.setColor
        }
    }
    componentDidMount(){
        console.log(this)
        // 只要父组件设置了 context;
        // 那么所有的子组件都能拿得到context;
        // 子组件设置 父组件是获取不到的
        // 使用时 有限制；
        // 在父组件上  我们使用 static childContextTypes={}
        // 还有一个函数 getChildContext(){ return {数据}}
        // 子组件使用时 需要 写 static contextTypes = {}
    }
    render() {
        return <div className=''>
            父组件
            <Son></Son>
        </div>;
    }
}

export default App