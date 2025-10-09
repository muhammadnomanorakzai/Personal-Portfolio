import React from 'react'
import './assets/circleBtn.css'

function CircleBtn({icon, link}) {
  return (
    <li><a href={link} className="circle-btn" target='_blank'><i className={`${icon}`}></i></a></li>
  )
}

export default CircleBtn