import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Securedeletequery from './Securedeletequery'
import EmployeeInfo from './EmployeeInfo'
import Vbasales from './Vbasales'
import PendingActivationUpload from './PendingActivationUpload'


export default function AdminPanal() {
    const {user,admin} = useContext(UserContext)
  return (
    <div className='w-full p-4 flex flex-col items-center gap-2'>
      <h1 className='text-2xl text-white bg-blue-500 p-2 w-[200px] rounded text-center'>Admin Panal</h1>
      <Securedeletequery/>
      <EmployeeInfo />
      <Vbasales/>
      <PendingActivationUpload />
    </div>
  )
}
