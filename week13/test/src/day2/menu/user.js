import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        
    }
    render() {
        console.log(this.props.match.params.idqqq)
        console.log(this)
        // 可以获取到路径上的参数
        return <div className=''>
            USER
            <button onClick={()=>{
                this.props.history.push('/info/home');
                // 编程式导航
            }}>home</button>
        </div>;
    }
}

export default App