import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ShopQuery() {
    const {user} = useContext(UserContext);
    const [shopSaleData, setShopSaleData] = useState(null)
    const [loading, setLoading] =useState(false)
    const tsmarea = useParams()

    
    useEffect(() => {
      
      if(user) {
        setLoading(true)
        axios.post('/tsmsalequery', tsmarea).then(({data}) => {
          setShopSaleData(data)
          setLoading(false)
      })
      } 
    },[tsmarea])

  return (
    <div className='w-full flex flex-col py-5 m-2 px-1'>
      <div className='bg-blue-500 p-2 text-white rounded text-center w-[200px] m-auto mb-2'>
      Shop Sale Query
      </div>
      {shopSaleData?.map((items,i) => (
        <div key={i} className='flex md:flex-row flex-col gap-2 shadow-md shadow-gray-400 mb-3 rounded-2xl md:items-center md:justify-evenly bg-gray-300 text-black font-medium p-2'>
            <div className='md:border-r border-gray-400 p-1 w-[300px]'>
                Shop Name : {items.vworkShopName}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[100px]'>
            Target : {items.target}
            </div>
            <div className='md:border-r border-gray-400 p-1 w-[100px]'>
              Ach : {items.ach}
            </div>
            <div className=' p-1 w-[150px]'>
              Ach% : {((items.ach/items.target)*100).toFixed(1)} %
            </div>
        </div>
      ))}
      {!!loading && (
        <div className='m-auto w-full text-center'>
          Loading....
        </div>
      )}
    </div>
  )
}
