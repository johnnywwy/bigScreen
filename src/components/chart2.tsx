import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';
import {createEchartsOptions} from '../shared/create-echarts-options';

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(divRef.current);
    // 绘制图表
    myChart.setOption(createEchartsOptions({
      ...baseEchartOptions,
      grid: {
        x: px(100),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '灭国', '印度', '中国', '世界人口','加拿大','澳洲','日本']
      },
      series: [
        {
          name: '破案排名1',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230,456415, 104970,456881]
        },
        {
          name: '破案排名2',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807,134141, 681807,104970]
        }
      ],
    }));
  }, []);
  return (
    <div className="bordered 管辖统计">
      <h2>按键破获排名</h2>
      <div ref={divRef} className="chart"/>
    </div>
  );
};