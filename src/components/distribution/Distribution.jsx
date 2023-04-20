import { useState } from 'react'
import './Distribution.css'
import React, { PureComponent } from "react";
import * as eCharts from "echarts";

// render方法负责将jsx转换为真实DOM
// 在写组件时没有生成真实DOM因此拿不到真实DOM 故需要添加ref
// PROBLEM SOLVED 这里一直没法获取到Bmap
// rollup全局暴露❌ window对象挂载⭕️
// BMap已经在index.html中挂载到了window对象上
export default class Distribution extends PureComponent {

  constructor() {
    super(...arguments);
    this.state = {
      view: 'china',
    };
  }

  BMapRef = React.createRef();

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    // 之所以将初始化的地图放到this对象上，是方便其他方法调用map对象
    this.map = new window.BMap.Map(this.BMapRef.current);
    this.map.centerAndZoom('宁夏市', 5);
  }

  switchView = (arg) => {
    this.setState({ view: arg }, () => { console.log(`Now the view is ${this.state.view}.`) })
    // 直接打印的是旧值
    // console.table(this.state)
  }

  // 为了避免类名污染在前面加D
  render() {
    return (
      <div className="Distribution">
        <div className='Dcontent'>

          <div id="DcontainerChina" style={{
            width: 1200,
            height: 800,
            display: this.state.view == 'china' ? 'block' : 'none',
            
          }} ref={this.BMapRef}></div>

          <div id="DcontainerYangtze" style={{
            width: 1200,
            height: 800,
            display: this.state.view == 'yangtze' ? 'block' : 'none',
          }}>YANGTZE</div>
          {/* 这里因为初始化了BMap的实例所以不能改变DOM 故调整CSS display属性 */}
          {/* {this.state.view == 'china' ? china  : ''}
          {this.state.view == 'yangtze' ? yangtze : ''} */}
          <div className='Dcontrol'>
            <button onClick={() => this.switchView('china')}>中国全景</button>
            <button onClick={() => this.switchView('yangtze')}>长江流域</button>
          </div>
        </div>
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
