import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';
import {createEchartsOptions} from '../shared/create-echarts-options';
import {px} from '../shared/px';
import {baseEchartOptions} from '../shared/base-echart-options';

export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(divRef.current);
    // 绘制图表
    myChart.setOption({
      ...baseEchartOptions,
      xAxis: {
        data: ['入室抢劫', '当街偷盗', '团伙诈骗', '刑事案件', '民事案件'],
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
      axisLabel: {
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
      series: [
        {
          type: 'bar',
          data: [40, 22, 20, 18, 32],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#0A97FB'
          }, {
            offset: 1,
            color: '#1E34FA'
          }]),
        }
      ]
    });
  }, []);

  return (
    <div ref={divRef} className="chart">
    </div>
  );

};