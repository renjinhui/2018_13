import React from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { login } from '../../store/actions';
class App extends React.Component {
    constructor() {
        super();
        
    }
    login(){
        // 发送请求
        this.props.dispatch(login({
            username:this.inpName.value,
            password:this.inpPass.value
        })).then((data)=>{
            console.log(data);
            if(data.data.error){
                alert('登录失败')
            }
            if(data.data.success){
                localStorage.setItem('isLogin','true');
                let obj = {
                    username:this.inpName.value,
                    age:10
                }
                localStorage.setItem('userData',JSON.stringify(obj));
                // 跳回个人中心
                this.props.history.push('/index/user')
            }
        })
    }
    render() {
        return <div className='login'>
            用户名：<input ref={(ele)=>{this.inpName = ele}} type="text"/> <br/>
            密&nbsp;&nbsp;码：<input type="password" ref={(ele)=>{this.inpPass=ele}}/><br/>
            <button onClick={()=>{this.login()}}>登录</button><br/>
            <Link to='/reg'>前往注册</Link><br/>
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