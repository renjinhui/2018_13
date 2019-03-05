import React from 'react';
// import ReactDOM from 'react-dom';
import '../css/dialog.css'
class Dialog extends React.Component{

    render() {
        let {title,
            isShow,
            onCancel,
            content,
            children,
            showSure = false,
            okText = '确认',
            noText = '取消'
        } = this.props;
        console.log(this.props);
        // let {isShow} = this.state;
        let box = '';
        if(isShow){
            box = <div className='dialogBox'>
                <div className='box'>
                    <h1>{title}</h1>
                    {content}
                    {children}
                    <footer>
                        <button onClick={onCancel}>{noText}</button>
                        {
                            showSure ? 
                            <button >{okText}</button>
                            :''
                        }
                        
                    </footer>
                </div>
            </div>
        }else{
            box = <div></div>
        }
        return box
    }
}
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            qqq:false
        }
    }
    render() {
        let h = <h1>gsfgsgfgsdg</h1>;
        return <div className=''>
            <Dialog 
                title='自定义的标题' 
                isShow={this.state.qqq}
                content={h}
                showSure={true}
                okText="我自己的确认"
                noText='我自己的取消'
                onCancel={()=>{this.setState({qqq:false})}}    
            >
                <div className='www'>孩子内容</div>
                <div className='www'>孩子内容</div>
                <div className='www'>孩子内容</div>
                <div className='www'>孩子内容</div>
            </Dialog>
            <button 
                onClick={()=>{this.setState({qqq:true})}}
            >按钮</button>
        </div>;
    }
}

export default App