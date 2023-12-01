import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';


export default function AsmSchemePayout() {
    const {user} = useContext(UserContext)
    const [tsmarealist, setTsmarealist] = useState(null)
    const [loading, setLoading] =useState(false)

    useEffect(()=>{
        setLoading(true)
        if(user) {
            axios.post('/asmareaquery',{vworkid: user.vworkid}).then(({data})=> {
                setTsmarealist(data)
                console.log(tsmarealist);
                setLoading(false)
            })
        }
    },[user])
  return (
    <div className='p-2 mt-4 flex flex-col items-center justify-center'>
        {!!loading && (
            <div>
                Loading.....
            </div>
        )}
        {!!tsmarealist && tsmarealist?.map((items,i)=> (
            <div key={i} className='flex flex-col items-center justify-center w-full gap-2'>
                <Link to={'/tsmschemepayout/'+items.tsmArea} className='p-2 bg-blue-500 w-[80px] text-center text-white mt-1 rounded'>
                    {items.tsmArea}
                </Link>
            </div>
        ))}
    </div>
  )
}
