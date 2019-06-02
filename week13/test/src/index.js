// import React from 'react';
// import ReactDOM from 'react-dom'

// // import App from './day1/1_redux';
// // import App from './day1/myreact/index'
// // import App from './day1/myreact2/index'
// // import App from './day1/router/index'
// // import App from './day2/1_router'
// import App from './day2/menu/index'

// ReactDOM.render(<App />, document.getElementById('root'));
import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
// import "bootstrap/dist/css/bootstrap.css"
import jsonp from 'jsonp';

// promise封装jsonp
function JSONP(url,opt){
    return new Promise((resolve,reject)=>{
        jsonp(url,opt,(err,data)=>{
            if(err){
                reject(err);
                return;
            }
            resolve(data);
        })
    })
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            defaultKeyword:'',
            keyword:'',
            list:[],    //联想的列表
            curIndex:-1, //标志，控制列表中那一项是高亮
            iptIsBlur:true  //input失去焦点
        };
    }
    handleChange= async (e)=>{
        const keyword = e.target.value;
        this.setState({
            keyword
        })
        let data = await JSONP("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+keyword,{param:'cb'});
        this.setState({
            list:data.s,
            defaultKeyword:keyword,
            iptIsBlur:false
        }); 
    }
    iptBlur=()=>{
        this.setState({iptIsBlur:true})
    }
    // 
    jumpPage=(value)=>{
        window.open("https://www.baidu.com/s?wd="+value);
    }
    // 点击go按钮
    handleClickGo=()=>{
        this.jumpPage(this.state.keyword);
    }
    // 键盘弹起
    handleKeyUp=(e)=>{
        if(e.keyCode === 13){ // 只有是回车键时跳转
            // 发起请求，获取所搜的结果
            this.jumpPage(e.target.value);
        } else if(e.keyCode === 38){    //键盘-上键
            let curIndex = this.state.curIndex-1;
            let keyword = '';
            if(curIndex === -1){    //显示默认输入值
                keyword = this.state.defaultKeyword;
            } else {
                if(curIndex < -1){
                    curIndex = this.state.list.length-1;
                }
                keyword = this.state.list[curIndex];
            }
            this.setState({
                curIndex,
                keyword
            })
        } else if(e.keyCode === 40){    //键盘-下键
            let curIndex = this.state.curIndex+1;
            let keyword = '';
            if(curIndex === this.state.list.length){
                keyword = this.state.defaultKeyword;
            } else {
                if(curIndex > this.state.list.length){
                    curIndex = 0;
                }
                keyword = this.state.list[curIndex];
            }
            this.setState({
                curIndex,
                keyword
            })
        }        
    }
    // 联想列表点击
    handleItemClick=(keyword)=>{
        this.jumpPage(keyword);
    }
    // 鼠标滑上
    handleListOver=(index)=>{
        this.setState({
            curIndex:index,
            keyword:this.state.list[index] || ''
        })
    }
    render(){
        return <div 
            className="container col-md-6 col-md-offset-3" 
            style={ {paddingTop: "100px"}}>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search for..." 
                    onChange={this.handleChange} 
                    onKeyUp={this.handleKeyUp}
                    value={this.state.keyword}
                    onBlur={this.iptBlur} />
                <span className="input-group-btn">
                    <button 
                        className="btn btn-default" 
                        type="button" 
                        onClick={this.handleClickGo}
                        >Go!</button>
                </span>
            </div>
            {/* input失去焦点，ul隐藏 */}
            <ul className={this.state.iptIsBlur ? "list-group hide" : "list-group"}>
                {this.state.list.map((item,index)=>{
                    return <li 
                            className={this.state.curIndex === index ? "list-group-item active" : "list-group-item"} 
                            key={index}
                            onClick={()=>{this.handleItemClick(item)}}
                            onMouseOver={this.handleListOver.bind(this,index)}>{item}</li>
                })}
            </ul>
        </div>
    }
}

render(<div className="wrap">
    <App />
</div>,document.getElementById("root"));
