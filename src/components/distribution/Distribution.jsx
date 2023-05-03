import './Distribution.css'
import React, { PureComponent } from "react"
import * as eCharts from "echarts"

import D_Data from './D_Data'
import 'echarts/extension/bmap/bmap'

// render方法负责将jsx转换为真实DOM
// 在写组件时没有生成真实DOM因此拿不到真实DOM 故需要添加ref
// PROBLEM SOLVED 这里一直没法获取到Bmap
// ❌ rollup全局暴露
// ⭕️ window对象挂载
// BMap已经在index.html中挂载到了window对象上
export default class Distribution extends PureComponent {

  constructor() {
    super(...arguments);
    this.state = {
      view: 'china',
    };
  }

  ChinaBMapRef = React.createRef();
  YangtzeBMapRef = React.createRef();

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    // PROBLEM SOLVED 这里一直没法获取到Bmap 通过window对象挂载已成功
    // 由于要通过echarts在地图上添加元素 这里应该调用echarts的bmap拓展来画出地图
    // ❌ 先调用原生BMap再调用eCharts
    // ⭕️ 调用eCharts的BMap插件
    // 通过百度BMap绘出的地图
    // 之所以将初始化的地图放到this对象上，是方便其他方法调用map对象
    // this.mapChina = new window.BMap.Map(this.ChinaBMapRef.current);
    // this.mapChina.centerAndZoom('宁夏市', 5);

    // 通过Echarts插件绘出的地图
    var mapChina = eCharts.init(this.ChinaBMapRef.current);
    // var mapYangtze = eCharts.init(this.YangtzeBMapRef.current);
    // mapYangtze.setOption()

    D_Data.option && mapChina.setOption(D_Data.option);
    // mapChina.setOption({
    //   backgroundColor: 'transparent',
    //   title: {
    //     text: '全国主要自然保护区分布',
    //     left: 'center'
    //   },
    //   tooltip: {
    //     trigger: 'item'
    //   },
    //   bmap: {
    //     center: [113, 28.21],
    //     zoom: 5,
    //     roam: true,
    //     mapStyle: {
    //       styleJson: D_StyleJson
    //     },
    //   },
    //   series: [{
    //     type: 'scatter',
    //     coordinateSystem: 'bmap',
    //     data: [[114.31, 30.52, 1]]
    //   }]
    // });
  }

  switchView = (arg) => {
    this.setState({ view: arg },
      () => { console.log(`Now the view is ${this.state.view}.`) })
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
          }} ref={this.ChinaBMapRef}></div>

          {/* <div id="DcontainerYangtze" style={{
            width: 1200,
            height: 800,
            display: this.state.view == 'yangtze' ? 'block' : 'none',
          }} ref={this.YangtzeBMapRef}></div> */}

          {/* 这里因为初始化了BMap的实例所以不能改变DOM 故调整CSS display属性 */}
          {/* {this.state.view == 'china' ? china  : ''}
          {this.state.view == 'yangtze' ? yangtze : ''}
          <div className='Dcontrol'>
            <button onClick={() => this.switchView('china')}>中国全景</button>
            <button onClick={() => this.switchView('yangtze')}>长江流域</button>
          </div> */}
        </div>
      </div>);
  }
}
