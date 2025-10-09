import React from 'react'

function PrimaryBtn(props) {
  return (
    <a href={props}><button>{props.content}</button></a>
  )
}

export default PrimaryBtn