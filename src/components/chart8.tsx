import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';

export const Chart8=()=>{
  const divRef = useRef(null);
  const colors = ['#856BED', '#F46064', '#F38E1C', '#1CDB7C', '#33A4FA'];
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(createEchartsOptions({
      xAxis: {show: false},
      yAxis: {show: false},
      color: colors,
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['75%', '90%'],
          avoidLabelOverlap: false,
          label: {
            show: true, position: 'inside', textStyle: {color: 'white', fontSize: px(20)},
            formatter(options) {
              return (options.value * 100).toFixed(0) + '%';
            }
          },
          labelLine: {
            show: false
          },
          itemStyle: {
            borderColor: '#0F113A',
            borderWidth: px(4)
          },
          data: [
            { value: 0.07, name: '55-65' },
            { value: 0.10, name: '45-55' },
            { value: 0.23, name: '35-45' },
            { value: 0.28, name: '25-35' },
            { value: 0.32, name: '15-25' },
          ]
        }
      ]
    }))
  }, []);


  return (
    <div className="年龄段-图2">
      <div className="chart">
        <div className="main" ref={divRef}/>
        <div className="text">年龄段</div>
      </div>
      <div className="legend">
        <span style={{background: colors[0]}} />10-20
        <span style={{background: colors[1]}} />20-30
        <span style={{background: colors[2]}} />30-40
        <span style={{background: colors[3]}} />40-50
        <span style={{background: colors[4]}} />50-60
      </div>
    </div>
  );
}