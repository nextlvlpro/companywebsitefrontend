import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import AsmPendingActivation from './asmpendingactivation/AsmPendingActivation'

export default function PendingActivation() {
    const {user} = useContext(UserContext)
  return (
    <div>
      
      <AsmPendingActivation/>

    </div>
  )
}
