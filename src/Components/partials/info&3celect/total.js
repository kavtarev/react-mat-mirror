import React from 'react'
import SomeInfo from './someInfo'
import ThreeSelect from './threeSelect'

export default function InfoPlusThreeSelect(props) {
  return (
    <div>
      <SomeInfo info={props.info} />
      <ThreeSelect />
    </div>
  )
}
