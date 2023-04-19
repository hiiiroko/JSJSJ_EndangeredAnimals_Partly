import { useState } from 'react'
import './Distribution.css'
// BMap没有成功暴露，无法在Distribution中导入
// import BMap from 'BMap'

function Distribution() {
  const [count, setCount] = useState(0)
  navigator.geolocation.getCurrentPosition((position => {
    const map = new BMap.Map("container");
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    map.centerAndZoom((new BMap.Point(longitude, latitude)), 15);
  }))

  return (
    <div className="Distribution">
      <div id="container"></div>

    </div>
  )
}

export default Distribution
