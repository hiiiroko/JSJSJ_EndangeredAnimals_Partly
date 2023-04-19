import { useState } from 'react'
import './UI.css'
import '../protection/Protection'
import '../distribution/Distribution'

function UI() {
  const [count, setCount] = useState(0)

  return (
    <div className="UI">
      <div className='display'>
        <div className='logo'></div>
        <div className='content'></div>
      </div>
      <div className='control'><button></button></div>
    </div>
  )
}

export default UI
