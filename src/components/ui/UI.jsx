import { useState } from 'react'
import './UI.css'
import '../protection/Protection'
import '../distribution/Distribution'
import Distribution from '../distribution/Distribution'
import Protection from '../protection/Protection'

function UI() {
  const [scene, setScene] = useState('distribution')
  const switchScene = (arg) => {
    setScene(arg)
    console.log(`Switch to ${arg}.`)
  }

  return (
    <div className="UI">
      <div className='display'>
        <div className='logo'>濒危动物调查局</div>
        <div className='content'>
          {/* {scene == 'distribution' ? 'Distribution' : ''} */}
          {scene == 'protection' ? <Protection /> : ''}
          {/* {scene == 'protection' ? 'Protection' : ''} */}
          {scene == 'distribution' ? <Distribution /> : ''}
        </div>
      </div>
      <div className='control'>
        <button onClick={() => switchScene('distribution')}>地区分布</button>
        <button onClick={() => switchScene('protection')}>保护措施</button>
      </div>
    </div>
  )
}

export default UI
