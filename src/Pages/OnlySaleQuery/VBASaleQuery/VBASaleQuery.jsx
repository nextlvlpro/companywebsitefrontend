import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext'
import axios from 'axios'

export default function VBASaleQuery() {
  const {user} = useContext(UserContext)
  const [vbavworkid, setVbavworkid] = useState(null)
  const [vbasaledata, setVbasaledata] = useState(null)
  

  useEffect(()=>{
    setVbavworkid(user.vworkid)
  },[user])
  async function hadlevbasalesdata(e) {

    e.preventDefault()
    await axios.post('/vbasalequery', { vbavworkid }).then(({data}) => {
      setVbasaledata(data)
    })
  }




  return (
    <div className='m-auto text-lg text-white border-2 my-1 p-2 flex flex-col items-center justify-center max-w-[500px] rounded-2xl bg-blue-500'>
        <div className='p-4'>
          VBA Sale Portal
        </div>
        <button onClick={hadlevbasalesdata} type='submit' className='rounded w-lg border py-1 px-2 mb-3 shadow-sm shadow-white bg-[#004e8e] text-white'> Check Sales</button>
     
      
        {!!vbasaledata && (
          <>
          <div className='p-2 rounded-lg w-full flex flex-col gap-2 items-center border'>
          <div className='text-left'> 
              VBA Name : {vbasaledata.vbaname.split('_')[0]}
            </div>
            <div className='text-left'> 
              Target : {vbasaledata.target}
            </div>
            <div className='text-left'>
              Ach : {vbasaledata.ach}
            </div>
            <div className='text-left'>
              Ach % : {((vbasaledata.ach/vbasaledata.target)*100).toFixed(1)}%
            </div>
            {((vbasaledata.ach-vbasaledata.target)<0) && (
              <div className='text-xl text-center'> 
                You need {vbasaledata.target-vbasaledata.ach} Units to achieve 100% of your target.<br/>
                
                You will be eligble for 90% incentive if you achieve 90% of your Target. 
                For incentive you will need {Math.ceil((vbasaledata.target)*0.9)-vbasaledata.ach} More Units.
              </div>
            )}
            </div>
          </>
        )}
      
    </div>
  )
}
