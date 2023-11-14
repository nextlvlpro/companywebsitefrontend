import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../UserContext'
import ShopcodeSaleQuery from '../shocodeQuery/ShopcodeSaleQuery'

export default function OfficeSaleQuery() {
  const {user} = useContext(UserContext)
  return (
    <div className='flex flex-col items-center justify-center w-full gap-2 mt-10'>
        {user?.designation == 'office' && (
                <>
                    <Link to={'/officeshopquery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center'>Shop Sales</Link>
                    <Link to={'/officevbaquery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center' >VBA Sales</Link>
                </>
            )}
            <ShopcodeSaleQuery/>
    </div>
  )
}
