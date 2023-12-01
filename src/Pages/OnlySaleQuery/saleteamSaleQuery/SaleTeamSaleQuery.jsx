import React, { useContext, useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import ShopcodeSaleQuery from '../shocodeQuery/ShopcodeSaleQuery'
import { UserContext } from '../../../UserContext'

export default function SaleTeamSaleQuery() {
  const { user } = useContext(UserContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (user) {
      setLoading(false)
    }
  }, [user])
  return (
    <div>
      {!!loading && (
        <>
          Loading...
        </>
      )}
      
      {!loading && (
        <div className='w-full flex items-center justify-center flex-col gap-4 p-10'>
          {user?.subdesignation == 'asm' && (
            <>
            <Link to={'/asmshopsalequery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center'>Shop Sales</Link>
            <Link to={'/asmvbasalequery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center' >VBA Sales</Link>
            </>
          )}

          {user?.subdesignation == 'tsm' && (
            <>
            <Link to={'/saleteamshopsalequery/' + (user.area).toUpperCase()} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center'>Shop Sales</Link>
            <Link to={'/tsmareavbasalequery/'+ (user.area).toUpperCase()} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center' >VBA Sales</Link>
            </>
          )}
          
          
          
          <div>
            <ShopcodeSaleQuery />
          </div>
        </div>
      )}

    </div>

  )
}
