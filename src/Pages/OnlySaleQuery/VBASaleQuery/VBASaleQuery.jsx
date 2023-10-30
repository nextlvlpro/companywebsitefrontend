import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext'
import axios from 'axios'

export default function VBASaleQuery() {
  const {user} = useContext(UserContext)
  const [vbavworkid, setVbavworkid] = useState(null)
  const [vbasaledata, setVbasaledata] = useState(null)
  

  async function hadlevbasalesdata(e) {

    e.preventDefault()

    setVbavworkid(user.vworkid)

    await axios.post('/vbasalequery', { vbavworkid }).then(({data}) => {
      setVbasaledata(data)
    })

    
    

  }
  return (
    <div className='m-auto text-lg text-white border-2 my-1 p-2 flex flex-col items-center justify-center max-w-[500px] rounded-2xl'>
   
        <button onClick={hadlevbasalesdata} type='submit' className='rounded w-lg border py-1 px-2 m-1 shadow-sm shadow-white bg-blue-600 text-white'> Click to get your Sales</button>
     
      
        {!!vbasaledata && (
          <>
          <div className='bg-[#1F2937] p-2 rounded w-full flex flex-col gap-2 items-center'>
            <div>
              Target : {vbasaledata.target}
            </div>
            <div>
              Ach : {vbasaledata.ach}
            </div>
            <div>
              Ach % : {((vbasaledata.ach/vbasaledata.target)*100).toFixed(1)}%
            </div>
            </div>
          </>
        )}
      
    </div>
  )
}
