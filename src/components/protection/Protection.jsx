import './Protection.css'
import './P_Transition.css'
import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import P_Info from './P_Info'
import * as eCharts from "echarts"

function Protection() {
  const options = ['habitat', 'research', 'species', 'reserve', 'education', 'cooperation']
  const [option, setOption] = useState(options[0])
  const switchOption = (arg) => {
    setOption(arg)
    console.log(`Switch to ${arg}.`)
  }

  return (
    <div className="Protection">
      {/* Pcontrol和Ppanel并列 */}
      <div className='Pcontrol'>
        <div className='PlineA'>
          <button className='hexagon' onClick={() => switchOption(options[0])}>栖息地保护</button>
          <button className='hexagon' onClick={() => switchOption(options[1])}>科学研究</button>
        </div>
        <div className='PlineB'>
          <button className='hexagon' onClick={() => switchOption(options[2])}>物种保护</button>
          <button className='hexagon null'>null</button>
          <button className='hexagon' onClick={() => switchOption(options[3])}>建立保护区</button>
        </div>
        <div className='PlineC'>
          <button className='hexagon' onClick={() => switchOption(options[4])}>教育宣传</button>
          <button className='hexagon' onClick={() => switchOption(options[5])}>国际合作</button>
        </div>
      </div>
      <div className='Ppanel'>
        <div className='Ppassage'>
          <TransitionGroup className={'P3Mz'}>
            {
              options.map((e, i) => {
                if (option == e) {
                  return (
                    <CSSTransition
                      classNames="Pasuka"
                      timeout={1000}
                      key={i}>
                      <div className='PPite174'>{P_Info[i]}</div>
                    </CSSTransition>
                  )
                }
              })
            }
          </TransitionGroup>
        </div>
      </div>
    </div >
  )
}

export default Protection