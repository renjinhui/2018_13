import React from 'react';
import {connect} from 'react-redux'
import { reg } from '../../store/actions';
class App extends React.Component {
    constructor() {
        super();
        
    }
    reg(){
        // 发送请求
        this.props.dispatch(reg({
            username:this.inpName.value,
            password:this.inpPass.value
        })).then((data)=>{
            if(data.data.success){
                // 注册成功之后跳转到login页
                this.props.history.push('/login')
            }
            if(data.data.error){
                alert('注册失败')
            }
        })
    }
    render() {
        return <div className='login'>
            用户名：<input ref={(ele)=>{this.inpName = ele}} type="text"/> <br/>
            密&nbsp;&nbsp;码：<input type="password" ref={(ele)=>{this.inpPass=ele}}/><br/>
            <button onClick={()=>{this.reg()}}>注册</button><br/>
        
        </div>;
    }
}
App = connect((state)=>{
    return{

    }
},(dispatch)=>{
    return{
        dispatch
    }
})(App)
export default App