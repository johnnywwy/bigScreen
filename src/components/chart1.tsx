import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';


export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const date = [
    {name: '城关区', number: 10},
    {name: '七里区', number: 20},
    {name: '西固区', number: 36},
    {name: '安宁区', number: 24},
    {name: '红谷区', number: 26},
    {name: '红谷区', number: 19},
    {name: '皋兰区', number: 40},
    {name: '渝中区', number: 10},
    {name: '兰州区', number: 37}
  ];
  useEffect(() => {
    setInterval(() => {
      const newDate = [
        {name: '城关区', number: Math.random() * 20},
        {name: '七里区', number: Math.random() * 20},
        {name: '西固区', number: Math.random() * 20},
        {name: '安宁区', number: Math.random() * 20},
        {name: '红谷区', number: Math.random() * 20},
        {name: '红谷区', number: Math.random() * 20},
        {name: '皋兰区', number: Math.random() * 20},
        {name: '渝中区', number: Math.random() * 20},
        {name: '兰州区', number: Math.random() * 20}
      ];
      x(newDate);
    }, 2000);
  });
  const x = (date) => {
    myChart.current.setOption({
      ...baseEchartOptions,
      xAxis: {
        data: date.map(i => i.name),
        axisTick: {show: false},
        axisLine: {
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split('');
              array.splice(2, 0, '\n');
              return array.join('');
            } else {
              return val;
            }
          }
        },

      },
      yAxis: {
        splitLine: {show: false},
        axisLine: {
          show: true,
          lineStyle: {color: '#083B70'}
        },
        axisLabel: {
          fontSize: px(12)
        }
      },
      series: [
        {
          type: 'bar',
          data: date.map(i => i.number)
        }
      ]
    });
  };
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    myChart.current = echarts.init(divRef.current);
    // 绘制图表
    x(date);
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>案发派出所管辖统计</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};