import React from 'react';
// import ReactDOM from 'react-dom';
import Echarts from 'echarts'
// import {dataMap} from './data'
import dataMap from './data'
import option from './option'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        // this.init()
        // this.init3()
        // this.bing()
        this.init4()
    }
    init(){
        var myChart = Echarts.init(this.box);
        myChart.setOption({
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            yAxis: {},
            series: [{
                name: 'ssssss',
                type: 'bar',
                data: [51, 220, 362, 120, 102, 202]
            }]
        });
    }
    bing(){
        var myChart = Echarts.init(this.box1);

        myChart.setOption({
            backgroundColor: '#2c343c',
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data:[
                        {value:235, name:'视频广告'},
                        {value:274, name:'联盟广告'},
                        {value:310, name:'邮件营销'},
                        {value:335, name:'直接访问'},
                        {value:400, name:'搜索引擎'}
                    ],
                    roseType:'angle',
                    itemStyle: {
                        // 阴影的大小
                        shadowBlur: 200,
                        // 阴影水平方向上的偏移
                        shadowOffsetX: 0,
                        // 阴影垂直方向上的偏移
                        shadowOffsetY: 0,
                        // 阴影颜色
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
            ],
        })
        
    }
    init3(){
        var option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                areaStyle: {}
            }]
        };
        var myChart = Echarts.init(this.box3);
        myChart.setOption(option);
    }
    init4(){
        var myChart = Echarts.init(this.box4);
        // console.log(option)
        // debugger
        setTimeout(()=>{
            debugger
            myChart.setOption(option);
        },20)
        
    }

    render() {
        
        return <div className="">
                <div 
                    className='sss' 
                    style={{height:'300px',width:"100%"}} 
                    ref={(ele)=>{this.box=ele}}>

                </div>
                <div 
                    className='sss' 
                    style={{height:'500px',width:"100%"}} 
                    ref={(ele)=>{this.box1=ele}}>
                </div>
                <div 
                    className='sss' 
                    style={{height:'500px',width:"100%"}} 
                    ref={(ele)=>{this.box3=ele}}>
                </div>
                <div 
                    className='sss' 
                    style={{height:'800px',width:"100%"}} 
                    ref={(ele)=>{this.box4=ele}}>
                </div>
        </div>;
        
    }
}

export default App