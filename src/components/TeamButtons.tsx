import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../App';
import { Data, Team } from '../util/types'

export default function TeamButtons() {
    const data = useContext(DataContext)

  return (
    <div>Team Buttons {data?.athletes[0].items[0].displayName}</div>
  )
}
