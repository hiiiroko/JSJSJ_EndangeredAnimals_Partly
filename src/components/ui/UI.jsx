import { useState } from 'react'
import './UI.css'
import '../protection/Protection'
import '../distribution/Distribution'
import Distribution from '../distribution/Distribution'
import Protection from '../protection/Protection'

function UI() {
  const [scene, setScene] = useState('protection')
  const switchScene = (arg) => {
    setScene(arg)
    console.log(`Switch to ${arg}.`)
  }

  // 为了避免类名污染在前面加DP
  return (
    <div className="DPUI">
      <div className='DPdisplay'>
        <div className='DPlogo'>濒危动物调查局</div>
        <div className='DPcontent'>
          {/* {scene == 'distribution' ? 'Distribution' : ''} */}
          {scene == 'protection' ? <Protection /> : ''}
          {/* {scene == 'protection' ? 'Protection' : ''} */}
          {scene == 'distribution' ? <Distribution /> : ''}
        </div>
      </div>
      <div className='DPcontrol'>
        <button onClick={() => switchScene('distribution')}>地区分布</button>
        <button onClick={() => switchScene('protection')}>保护措施</button>
      </div>
    </div>
  )
}

export default UI
