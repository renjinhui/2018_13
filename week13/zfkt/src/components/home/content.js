import React from 'react';
import Item from './item'
import {connect} from 'react-redux'
import { add } from '../../store/actions';
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        // this.fresh();
        this.scroll();
    }
    fresh(){
        let box = this.box;
        document.body.ontouchstart = function(e){
            this.sy = e.changedTouches[0].pageY;
            box.style.transition = 'none';
        }
        document.body.ontouchmove = function(e){
            // console.log(e)
            let my = e.changedTouches[0].pageY - this.sy;
            if(my > 0){
                box.style.transform = `translateY(${my/3}px)`
            }

        }
        document.body.ontouchend = function(e){
            box.style.transform = `translateY(1.5rem)`;
            box.style.transition = '0.3s';
            setTimeout(() => {
                box.style.transform = `translateY(0)`;
            }, 2000);
        }
    }
    scroll(){
        // window.onscroll = null;
        let n = 5;
        let flag = true;
        window.onscroll = (e)=>{
            // console.log(e)
            // console.log(this.span.offsetTop);
            let st = document.documentElement.scrollTop || document.body.scrollTop;
            let ch = document.documentElement.clientHeight||document.body.clientHeight;
            if(st+ch > this.span.offsetTop && flag){
                // 我们去请求新数据
                // getLessons/all?limit=10&offset=20
                // limit是设置每次加载多少条数据  offset是设置 从多少开始加载
                // 请求回来的数据要合并到老数组
                flag = false;
                let p = this.props.dispatch(add(n));
                p.then((ddd)=>{
                    console.log(ddd)
                    flag = true;// 避免接口的频繁请求
                    if(!ddd){
                        // 当没有新的数据时；不再去执行请求的操作
                        window.onscroll = null;
                    }
                })
                n+=5;
            }
        }
    }
    componentWillUnmount(){
        
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.titleCode !== this.props.titleCode){
            // 当两次 titleCode不一样时， 证明我们是点击的 三条选项；需要重新执行scroll
            // debugger
            this.scroll();
        }
        return true;
    }
    render() {
        let {titleCode,list=[]} = this.props;
        let str = '';
        switch (titleCode) {
            case 'all':
                str = '全部课程'
                break;
            case 'vue':
                str = 'VUE课程'
            break;
            default:
                str = 'REACT课程'
                break;
        }
        return <div className='home_content' ref={(ele)=>{this.box = ele}}>
            {/* <h2>{str}</h2> */}
            <h2>
                {
                    titleCode === 'all' ? 
                    '全部课程':
                    titleCode === 'vue' ? 
                    'VUE课程':
                    'React课程'
                }
            </h2>
            {
                // list 多少条数据  Item组件就用多少次
                list.map(item=>{
                    return <Item data1={item} key={item.id}></Item>
                })
            }
            {/* <Item></Item> */}
            <span ref = {(ele)=>{this.span = ele}}></span>
        </div>;
    }
}
App = connect((state)=>{
    return{
        titleCode: state.homeList.titleCode,
        // homeList 在index.js 的combineReducers; titleCode在reducers中
        list: state.homeList.list
    }
},(dispatch)=>{
    return {
        dispatch
    }
})(App)

export default App