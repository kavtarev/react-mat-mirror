import React from 'react'
import FormControlSelect from './partials/formControlSelect'

import InfoPlusThreeSelect from './partials/info&3celect/total'
import RadioComponent from './partials/radio'

export default function Osnova() {
  return (
    <>
      <FormControlSelect />
      <h1>Lorem ipsum dolor sit amet.</h1>
      <InfoPlusThreeSelect info='tolko spartak' />
      <InfoPlusThreeSelect info='tolko dinamo' />
      <InfoPlusThreeSelect info='tolko koni' />
      <h1>uslovia po zapisi</h1>
      <RadioComponent />
    </>
  )
}
