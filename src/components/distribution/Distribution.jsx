import React, { useState } from 'react'
import './Distribution.css'
import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react'
import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'

function Distribution() {
  const [count, setCount] = useState(0)
  return (
    <div className="Distribution">
      <div id="container"></div>
      {/* 使用react-bmap的元素是可以显示地图的 */}
      <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
        <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
        <NavigationControl />
      </Map>
    </div>
  )
}

export default Distribution

// import './Distribution.css'
// import React, { PureComponent } from "react";
// import * as eCharts from "echarts";

// // 好久没接触类组件了(3MZ 我给你举盾
// export default class Distribution extends PureComponent {

//   eChartsRef = React.createRef();

//   componentDidMount() {
//     const myChart = eCharts.init(this.eChartsRef.current);

//     let option = {
//       title: {
//         text: "ECharts 入门示例",
//       },
//       tooltip: {},
//       legend: {
//         data: ["销量"],
//       },
//       xAxis: {
//         data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
//       },
//       yAxis: {},
//       series: [
//         {
//           name: "销量",
//           type: "bar",
//           data: [5, 20, 36, 10, 10, 20],
//         },
//       ],
//     };

//     myChart.setOption(option);
//   }

//   render() {
//     return <div ref={this.eChartsRef} style={{
//       width: 600,
//       height: 400,
//     }}></div>;
//   }
// }