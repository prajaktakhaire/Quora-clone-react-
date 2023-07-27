import React from 'react'
import WidgetOptions from './WidgetOptions'
import '../Css/Widget.css'

function Widget({setLoading}) {
  return (
      <div onClick={() => setLoading(true)} className='widget'>
          <div className="widget__header">
              <h5>Spaces to follow</h5>
          </div>
      <WidgetOptions/>
    </div>
  )
}

export default Widget
