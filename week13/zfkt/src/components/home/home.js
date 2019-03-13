import React from 'react';
import Header from './header'
import Content from './content'
import '../../css/home.css'
import Swiper from '../../common/swiper'
import { getSwiperData, getHomeList } from '../../store/actions';
import { connect } from "react-redux";
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            swiperList:[]
        }
    }
    componentDidMount(){
        let p = this.props.dispatch(getSwiperData());
        p.then((data)=>{
            // console.log(data)
            this.setState({
                swiperList:data.data
            })
        });
        // 加载完 home后 请求列表数据  默认是 all 类型
        this.props.dispatch(getHomeList('all'))
    }
    render() {
        console.log(this)
        let {swiperList} = this.state;// 解构获取 轮播图数据
        return <div className='home_box' style={{paddingTop:'1.5rem'}}>
            <Header/>
            <Swiper data={swiperList}/>
            <Content/>
            首页
        </div>;
    }
}
App = connect((state)=>{
    return{
        state
    }
},(dispatch)=>{
    return{
        dispatch
    }
})(App)
export default App