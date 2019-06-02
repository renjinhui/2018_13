import React from 'react';
import qqq from 'echarts'
import {dataMap,option} from './data'
class App extends React.Component {
    constructor() {
        super();
        
    }
    componentDidMount(){
        this.init();
        this.init2();
        this.init3();
        this.init4();
    }
    init(){
        var myChart = qqq.init(this.box);
        let option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            xAxis: {
                data: ['css', 'js', 'html', 'vue', 'react', 'angular']
            },
            yAxis: {},
            series: [{
                name: '掌握程度',
                type: 'bar',
                data: [50, 200, 360, 100, 100, 200]
            }]
        }
        myChart.setOption(option);
    }
    init2(){
        var myChart = qqq.init(this.box2);
        let option = {
            roseType: 'angle',
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
                        {value:400, name:'搜索引擎'},
                        {value:600, name:'搜索引擎3'}
                    ],
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
                }
            ]
        }
        myChart.setOption(option);
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
        var myChart = qqq.init(this.box3);
        myChart.setOption(option);
    }
    init4(){
        var myChart = qqq.init(this.box4);
        myChart.setOption(option);
    }
    render() {
        return <div className=''>
            <div className='weqwe' 
                ref={(ele)=>{this.box=ele}} 
                style={{height:'300px',margin:'auto'}}>
            </div>
            <div className='weqwe' 
                ref={(ele)=>{this.box2=ele}} 
                style={{height:'500px',margin:'auto'}}>
            </div>
            
            <div className='weqwe' 
                ref={(ele)=>{this.box3=ele}} 
                style={{height:'500px',margin:'auto'}}>
            </div>

            <div className='weqwe' 
                ref={(ele)=>{this.box4=ele}} 
                style={{height:'500px',margin:'auto'}}>
            </div>
        </div>;
    }
}

export default App