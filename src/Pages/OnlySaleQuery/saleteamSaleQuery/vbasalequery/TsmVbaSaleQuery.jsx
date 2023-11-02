import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../UserContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function TsmVbaSaleQuery() {
  const {user} = useContext(UserContext)
  const [vbasaledata, setVbasaledata] = useState(null)
  const [loading, setLoading] = useState(false)
  const tsmArea = useParams()
  useEffect(()=> {
    setLoading(true)
    if(user) {
      axios.post('/tsmareavbasalequery', tsmArea).then(({data}) => {
        setLoading(false)
        setVbasaledata(data)
      })
    }
  },[user])

  return (
    <div>
      <div className='w-full flex flex-col py-5 m-2'>
      <div className='bg-blue-500 p-2 text-white rounded text-center w-[200px] m-auto mb-2'>
      VBA Sale Query
      </div>
      {vbasaledata?.map((items,i) => (
        <div key={i} className='flex md:flex-row flex-col gap-2 shadow-md shadow-gray-400 mb-3 rounded-2xl md:items-center md:justify-evenly bg-gray-300 text-black font-medium p-2'>
            <div className='md:border-r border-gray-400 pl-3 p-1 md:w-[200px] md:bg-none bg-blue-500 rounded-lg text-white'>
                VBA Name : {items.vbaname}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[300px]'>
                Shop Name : {items.vworkshopname}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[100px]'>
                Stock : {items.currentstock}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[100px]'>
            Target : {items.target}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[150px]'>
              Ach : {items.ach}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[150px]  '>
              Ach% : {((items.ach/items.target)*100).toFixed(1)} %
            </div>
            <div className='p-1 w-[200px]'>
              Last Month Ach : {items.lastmonthsale}
            </div>
        </div>
      ))}
      {!!loading && (
        <div className='m-auto w-full text-center'>
          Loading....
        </div>
      )}
    </div>
    </div>
  )
}
