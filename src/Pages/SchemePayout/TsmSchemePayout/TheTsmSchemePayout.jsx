import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext'



export default function TheTsmAreaPayout() {

    const { user } = useContext(UserContext)
    const [retailerpayout, setRetailerpayout] = useState(null)
    const [loading, setLoading] = useState(false)
    


    useEffect(() => {
        if (user) {
            const tsmarea = user.area.toUpperCase()
            
            setLoading(true)
            axios.post('/retailerpayout', {tsmarea}).then(({ data }) => {
                setRetailerpayout(data)
                setLoading(false)
            })
            
        }
      
    }, [user])

   

    return (
        <div className='flex flex-col items-center'>
            <div className='bg-blue-500 p-2 text-white rounded text-center w-[250px] m-auto my-5'>
                Retailer Payout {`(${user.area.toUpperCase()})`}
            </div>
            {!!retailerpayout && retailerpayout.map((items,i) => (
                <div key={i} className='flex flex-col border my-1 border-black rounded md:w-[500px] w-full text-sm'>
                    <div className='bg-blue-500 text-white p-1 '>
                        Shop Name : {items.storename}
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center w-full'>
                       <div className='w-[140px]'>May Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.maypayout)} </div>
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center'>
                       <div className='w-[140px]'>June Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.junepayout)}</div>
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center'>
                       <div className='w-[140px]'>July Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.julypayout)} </div>
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center'>
                       <div className='w-[140px]'>August Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.augpayout)}</div>
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center'>
                       <div className='w-[140px]'>September Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.septpayout)}</div>
                    </div>
                    <div className='px-3 font-semibold flex gap-2 items-center'>
                       <div className='w-[140px]'>October Payout : </div>  <div>₹{Intl.NumberFormat('en-in').format(items.octpayout)}</div>
                    </div>
                </div>
            )) }

            {!!loading && (
                <div className='m-auto w-full text-center'>
                    Loading....
                </div>
            )}
        </div>
    )
}
