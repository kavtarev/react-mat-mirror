import { Container, Typography } from '@material-ui/core'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu'
import React, { useState } from 'react'
import Choice from '../../partials/choiceComponent'

export default function PlanBlock() {
  let [active, setActive] = useState(true)
  return (
    <div>
      <Typography
        data-hide
        variant='body1'
        component='h2'
        color='textSecondary'
        align='left'
      >
        Glavnaya - Planirovanie
      </Typography>
      <Typography data-hide variant='h1' component='h1'>
        <RestaurantMenuIcon fontSize='large' /> Planing
      </Typography>
      {/*   <Choice
          first='gruppovoe'
          second='individual'
          active={active}
          setActive={setActive}
        /> */}
    </div>
  )
}
