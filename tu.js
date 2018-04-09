import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts'
class Tu extends React.Component {
    
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            legend: {
                data:['增速', '出口额']
            },
            title: {
                text: ''
            },
            tooltip: {
                show:true
            },
            
            xAxis: {
                axisPointer:{
                    show:false
                },
                // data: ["2012年","2013年","2014年","2015年","2016年","2017年"]
                data: ["2011年","2012年","2013年","2014年","2015年","2016年"]
            },
            yAxis: [
                {
                    name:'出口额(百万美元)',
                    
                },
                {
                    name:'增速(%)',
                    min:-10,
                    max:35,
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }
            ]
            ,
            series: [{
                name: '出口额',
                type: 'bar',
                // data: [2048714, 2209004, 2342292, 2273468.22, 2097631.19, 2263522],
                data: [1898381, 2048714, 2209004, 2342292, 2273468.22, 2097631.19],
                color:'#5c92a5',
                barWidth:'50px',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color:'#000'
                    }
                },
                
            },
           {
               name:'增速',
                // data:[7.9,7.9,6.1,-2.9,-7.7,7.9],
                data:[20.3,7.9,7.9,6.1,-2.9,-7.7],
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        color:'#000'
                    }
                },
                type:'line',
                yAxisIndex: 1,
                color:'#024b64'
            }
        ]
            
        };

        // 使用刚指定的配置项和数据显示图表。
        

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }
    render(){
        return(
            <div id="main" style={{width: "700px",height:"500px",marginLeft:"50px"}}></div>
        )
    }
    
}


export default Tu;
