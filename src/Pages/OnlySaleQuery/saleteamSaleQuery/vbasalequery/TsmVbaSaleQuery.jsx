import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../UserContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function TsmVbaSaleQuery() {
  const { user } = useContext(UserContext)
  const [vbasaledata, setVbasaledata] = useState(null)
  const [loading, setLoading] = useState(false)
  const tsmArea = useParams()
  useEffect(() => {
    setLoading(true)
    if (user) {
      axios.post('/tsmareavbasalequery', tsmArea).then(({ data }) => {
        setLoading(false)
        setVbasaledata(data)
      })
    }
  }, [user])

  return (
    <div>
      <div className='flex flex-col py-5 m-2'>
        <div className='bg-blue-500 p-2 text-white rounded text-center w-[200px] m-auto mb-2'>
          VBA Sale Query {`(${tsmArea.tsmarea})`}
        </div>

        {vbasaledata?.map((items, i) => (
          <div key={i} className='flex flex-col text-left shadow-sm shadow-blue-500  border border-blue-500 rounded-xl items-center justify-center p-1 mb-2 bg-gray-300'>
            <div>
              <div className='bg-blue-500 text-white p-1 rounded'>
                {items?.vbaname}
              </div>
            </div>

            <div>
              <div className='flex items-center justify-center gap-2 px-2 py-1'>
                <div className='border-r border-gray-500 px-2 text-blue-500'>
                  <b>Shop: {items?.vworkshopname.split("(")[0]}</b>
                </div>
                <div className='border-r border-gray-500 px-2 py-1'>
                  Stock: {items.currentstock}
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 '>
                <div className='border-r border-gray-500 px-2 py-1'>
                  Target: {items.target}
                </div>
                <div className='border-r border-gray-500 px-2 py-1'>
                  Ach: {items.ach}
                </div>
                <div>
                  Ach %: {((items.ach / items.target) * 100).toFixed(1)}%
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 '>
                <div className='border-r border-gray-500 px-2 py-1'>
                  Last Month Sale: {items.lastmonthsale}
                </div>
              </div>
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
