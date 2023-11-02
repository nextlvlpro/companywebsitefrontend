import React from 'react'
import { Link } from 'react-router-dom'

export default function OfficeAreaQuery() {
    return (
        <div className='w-full flex items-center justify-center flex-col gap-4 p-10'>
            {user?.designation == 'office' && (
                <>
                    <Link to={'/officeshopquery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center'>Shop Sales</Link>
                    <Link to={'/officevbaquery'} className='bg-blue-500 p-2 text-white rounded w-[200px] text-center' >VBA Sales</Link>
                </>
            )}
        </div>
    )
}
