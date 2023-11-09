import React from 'react'
import { Link } from 'react-router-dom'

export default function OfficeVBASaleQuery() {
  return (
    <div className='flex flex-col items-center justify-center w-full gap-2 mt-10'>
      <Link to={'/vbasaletsmareaquery/hp 1'} className='p-2 bg-blue-500 w-[180px] text-center text-white mt-1 rounded'>
        HP 1
      </Link>
      <Link to={'/vbasaletsmareaquery/hp 2'} className='p-2 bg-blue-500 w-[180px] text-center text-white mt-1 rounded'>
        HP 2
      </Link>
      <Link to={'/vbasaletsmareaquery/hp 3'} className='p-2 bg-blue-500 w-[180px] text-center text-white mt-1 rounded'>
        HP 3
      </Link>
      <Link to={'/vbasaletsmareaquery/hp 4'} className='p-2 bg-blue-500 w-[180px] text-center text-white mt-1 rounded'>
        HP 4
      </Link>
      <Link to={'/vbasaletsmareaquery/hp 5'} className='p-2 bg-blue-500 w-[180px] text-center text-white mt-1 rounded'>
        HP 5
      </Link>
    </div>
  )
}
