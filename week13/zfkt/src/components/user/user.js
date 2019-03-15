import React from 'react';
import ReactDOM from 'react-dom';
import img from '../../images/profile.png'
import '../../css/userLogin.css'
class App extends React.Component {
    constructor() {
        super();
        let isLogin = localStorage.getItem('isLogin') === 'true' ? true:false;
        this.state = {
            isLogin,
        }
    }
    render() {
        let str = localStorage.getItem('userData');
        // str 有时会是一个 null;
        let userData = str ? JSON.parse(str) : {};
        return <div className=''>
            {
                this.state.isLogin ? 
                <ul>
                    <li>姓名：{userData.username}</li>
                    <li>年龄：{userData.age}</li>
                </ul>
                :
                <div className='login_box'>
                    <img src={img} alt=""/>
                    <button onClick={()=>{
                        this.props.history.push('/login')
                    }}>登录</button>
                </div>
            }
            用户中心
        </div>;
    }
}

export default App