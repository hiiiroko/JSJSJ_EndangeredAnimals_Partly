import './Protection.css'
import './P_Transition.css'
import React, { useState } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import P_Info from './P_Info'
import * as eCharts from "echarts"

function Protection() {

  const [friends, setFriends] = useState([])

  const options = ['habitat', 'research', 'species', 'reserve', 'education', 'cooperation']
  const [option, setOption] = useState(options[0])
  const switchOption = (arg) => {
    setOption(arg)
    console.log(`Switch to ${arg}.`)
  }

  const addFriend = () => {
    setFriends([...friends, 'codewhy'])
    console.log(friends)
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
          <TransitionGroup>
            {
              friends.map((item, index) => {
                return (
                  <CSSTransition classNames="friend" timeout={300} key={index}>
                    <div>{item}</div>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup>
          <button onClick={() => addFriend()}>+friend</button>
          {/* <TransitionGroup>
            {
              options.map((item, index) => {
                return (
                  <CSSTransition classNames="friend" timeout={300} key={index}>
                    <div>{P_Info[index]}</div>
                  </CSSTransition>
                )
              })
            }
          </TransitionGroup> */}
        </div>
        {/* <div className='Ppassage'>
          {option == options[0] ? P_Info[0] : ''}
          {option == options[1] ? P_Info[1] : ''}
          {option == options[2] ? P_Info[2] : ''}
          {option == options[3] ? P_Info[3] : ''}
          {option == options[4] ? P_Info[4] : ''}
          {option == options[5] ? P_Info[5] : ''}
        </div> */}
      </div>
    </div >
  )
}

export default Protection