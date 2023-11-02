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

    console.log(vbavworkid);
    await axios.post('/vbasalequery', { vbavworkid }).then(({data}) => {
      setVbasaledata(data)
    })
  }




  return (
    <div className='m-auto text-lg text-white border-2 my-1 p-2 flex flex-col items-center justify-center max-w-[500px] rounded-2xl bg-blue-500'>
        <div className='p-4'>
          VBA Sale Portal
        </div>
        <button onClick={hadlevbasalesdata} type='submit' className='rounded w-lg border py-1 px-2 m-1 shadow-sm shadow-white bg-[#00738E] text-white'> Check Sales</button>
     
      
        {!!vbasaledata && (
          <>
          <div className='p-2 rounded-lg w-full flex flex-col gap-2 items-center border'>
            <div className='text-left w-[150px]'> 
              Target : {vbasaledata.target}
            </div>
            <div className='text-left w-[150px]'>
              Ach : {vbasaledata.ach}
            </div>
            <div className='text-left w-[150px]'>
              Ach % : {((vbasaledata.ach/vbasaledata.target)*100).toFixed(1)}%
            </div>
            {((vbasaledata.ach-vbasaledata.target)<0) && (
              <div className='text-xl text-center'> 
                You need {vbasaledata.target-vbasaledata.ach} Units to achieve your target <br/>
                <br />
                You will be eligble for incentive if you achieve 90% of your Target. <br /> <br />
                For incentive you will need {Math.ceil((vbasaledata.target)*0.9)} Units.
              </div>
            )}
            </div>
          </>
        )}
      
    </div>
  )
}
