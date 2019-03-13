import React from 'react';
import  '../../css/home_header.css'
import {connect} from 'react-redux'
import { getHomeList } from '../../store/actions';
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            str:'caidan'
        }
    }
    changeClass(){
        if(this.state.str === 'caidan'){
            this.setState({
                str:'more'
            })
        }else{
            this.setState({
                str:'caidan'
            })
        }
    }
    getData(str){
        this.props.dispatch(getHomeList(str))
    }
    render() {
        return <div className='header_box'>
            <div className='logo_header'>
                <div className='logo lt'></div>
                <div className='list rt ' onClick={()=>{this.changeClass()}}>
                    <i className={'iconfont icon-'+this.state.str}></i>
                </div>
            </div>
            {/* 只有当 str 是  more 时; 才去展示该ul */}
            {
                this.state.str === 'more' ?
                <ul className='listBox fadeIn'>
                    <li onClick={()=>{this.getData('all')}}>全部课程</li>
                    <li onClick={()=>{this.getData('react')}}>react课程</li>
                    <li onClick={()=>{this.getData('vue')}}>vue课程</li>
                </ul>
                :null
            }
            
        </div>;
    }
}
Header = connect(()=>{
    return{
        
    }
},(dispatch)=>{
    return{
        dispatch
    }
})(Header)
export default Header