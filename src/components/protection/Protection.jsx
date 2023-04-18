import { useState } from 'react'
import './Protection.css'
import '../../echarts'

function Protection() {
  const [count, setCount] = useState(0)
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: '程文硕战败次数'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  return (
    <div className="Protection">
    <script src="echarts.js"></script>
      Echarts Here!
      <div id="main" style={{width: '600px',height:'400px'}}></div>
    </div>
  )
}

export default Protection
