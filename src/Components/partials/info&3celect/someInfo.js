import React from 'react'

let name = {
  fontSize: 9,
  color: '#ccc',
}

export default function SomeInfo(props) {
  return (
    <div>
      <div style={name}>meropriyatie</div>
      <div>{props.info}</div>
      <hr />
    </div>
  )
}
