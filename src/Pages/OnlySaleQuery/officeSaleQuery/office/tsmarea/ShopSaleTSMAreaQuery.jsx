import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

export default function ShopSaleTSMAreaQuery() {

  const asmarea = useParams()
  const [tsmarealist, setTsmarealist] = useState(null)
  const [loading, setLoading] =useState(false)

  useEffect(()=> {
    setLoading(true)
    axios.post('/officetsmareaquery', asmarea).then(({data}) => {
      setTsmarealist(data)
      setLoading(false)
    })
  },[])

  
  return (
    <div className='p-2 mt-4 flex flex-col items-center justify-center'>
        {!!loading && (
            <div>
                Loading.....
            </div>
        )}
        {tsmarealist?.map((items,i)=> (
            <div key={i} className='flex flex-col items-center justify-center w-full gap-2'>
                <Link to={'/saleteamshopsalequery/'+items.tsmArea} className='p-2 bg-blue-500 w-[80px] text-center text-white mt-1 rounded'>
                    {items.tsmArea}
                </Link>
            </div>
        ))}
    </div>
  )
}
