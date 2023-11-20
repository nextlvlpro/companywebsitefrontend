import React, { useContext } from 'react'
import { UserContext } from '../../UserContext'
import Securedeletequery from './Securedeletequery'
import EmployeeInfo from './EmployeeInfo'
import Vbasales from './Vbasales'
import PendingActivationUpload from './PendingActivationUpload'
import PendingPunchupload from './PendingPunchupload'


export default function AdminPanal() {
    const {user,admin} = useContext(UserContext)
  return (
    <>
    {!!user && user?.email == 'bhanusharma089@gmail.com' && (
      <div className='w-full p-4 flex flex-col items-center gap-2'>
      <h1 className='text-2xl text-white bg-blue-500 p-2 w-[200px] rounded text-center'>Admin Panal</h1>
      <Securedeletequery/>
      <EmployeeInfo />
      <Vbasales/>
      <PendingActivationUpload />
      <PendingPunchupload />
    </div>
    )}
    {!user?.email == 'bhanusharma089@gmail.com' && (
      
      <div className='text-white mt-22'>
      Not Authorised
      </div>
    )}
    </>
    
    
  )
}
