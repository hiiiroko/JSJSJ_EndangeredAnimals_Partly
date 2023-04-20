import './Distribution.css'
import React, { PureComponent } from "react";
import * as eCharts from "echarts";

// render方法负责将jsx转换为真实DOM
// 在写组件时没有生成真实DOM因此拿不到真实DOM 故需要添加ref
// PROBLEM SOLVED 这里一直没法获取到Bmap
// rollup全局暴露❌ window对象挂载⭕️
// BMap已经在index.html中挂载到了window对象上
export default class Distribution extends PureComponent {

  eChartsRef = React.createRef();
  BMapRef = React.createRef();

  componentDidMount() {
    // const myChart = eCharts.init(this.eChartsRef.current);

    // let option = {
    //   title: {
    //     text: "ECharts 入门示例",
    //   },
    //   tooltip: {},
    //   legend: {
    //     data: ["销量"],
    //   },
    //   xAxis: {
    //     data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    //   },
    //   yAxis: {},
    //   series: [
    //     {
    //       name: "销量",
    //       type: "bar",
    //       data: [5, 20, 36, 10, 10, 20],
    //     },
    //   ],
    // };

    // myChart.setOption(option);
    this.renderMap()
  }

  renderMap = () => {
    // 之所以将初始化的地图放到this对象上，是方便其他方法调用map对象
    this.map = new window.BMap.Map(this.BMapRef.current);
    this.map.centerAndZoom('北京市', 5);
  }

  render() {
    return (
      <div className="Distribution">
        {/* <div ref={this.eChartsRef} style={{
          width: 600,
          height: 400,
        }}></div> */}
        <div id="container" style={{
          width: 1200,
          height: 800,
        }} ref={this.BMapRef}></div>
      </div>);
  }
}

// export default Distribution
// import React, { useState } from 'react'
// import './Distribution.css'
// import * as echarts from 'echarts';
// import ReactEcharts from 'echarts-for-react'
// import { Map, Marker, NavigationControl, InfoWindow } from 'react-bmap'

// function Distribution() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="Distribution">
//       <div id="container"></div>
//       {/* 使用react-bmap的元素是可以显示地图的 */}
//       <Map center={{ lng: 116.402544, lat: 39.928216 }} zoom="11">
//         <Marker position={{ lng: 116.402544, lat: 39.928216 }} />
//         <NavigationControl />
//       </Map>
//     </div>
//   )
// }

// export default Distribution
