import { useState } from 'react'
import './Protection.css'
import './P_Style.css'

function Protection() {
  const items = [
    {
      backgroundImage: `url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      slogan: `Explore The World`
    },
    {
      backgroundImage: `url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      slogan: `Wild Forest`
    },
    {
      backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')`,
      slogan: `Sunny Beach`
    },
    {
      backgroundImage: `url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')`,
      slogan: `City on Winter`
    },
    {
      backgroundImage: `url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')`,
      slogan: `Mountains - Clouds`
    }
  ]

  const panels = document.querySelectorAll('.panel')

  panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  })

  function removeActiveClasses() {
    panels.forEach(panel => {
      panel.classList.remove('active')
    })
  }

  return (
    <div className="Protection">
      <div class="container">
        {items.map((item, i) => {
          return (
            <div class={`panel${i == 0 ? ' active' : ''}`} style={item} >
              <h3>{item.slogan}</h3>
            </div>
          )
        })}
      </div>

    </div >
  )
}

export default Protection
