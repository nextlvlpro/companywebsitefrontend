import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext'

export default function AsmPendingActivation() {
    const { user } = useContext(UserContext)
    const [pendingActivationShops, setPendingActivationShops] = useState(null)
    const [loading, setLoading] = useState(false)
    let shops = []
    let shopimei = []

    const [showimei, setshowimei] = useState(null)
    useEffect(() => {
        setLoading(true)
        if (user) {
            axios.post('/pendingactivationsshop', { area: user.area, subdesignation: user.subdesignation,uploadercode:user.vworkid }).then(({ data }) => {
                setPendingActivationShops(data);
            });
        }
    }, [user])

    useEffect(()=> {
        setLoading(true)
        if (pendingActivationShops) {
            
            pendingActivationShops.forEach(element => {
                if (!shops.includes(element.shopname)) {
                    shops.push(element.shopname)
                }
            });
            
            if (shops) {
                for (let i = 0; i < shops.length; i++) {
                    shopimei.push({ shopname: shops[i],imei:'',uploaddate:'',product:'',count:0,uploadername:'' })
                    for (let j = 0; j < pendingActivationShops.length; j++) {

                        if (shops[i] == pendingActivationShops[j].shopname) {
                            if (pendingActivationShops[j]) {
                                shopimei[i].imei += pendingActivationShops[j].imei + ','
                                shopimei[i].uploaddate += pendingActivationShops[j].uploaddate + ','
                                shopimei[i].product += pendingActivationShops[j].product + ','
                                shopimei[i].uploadername += pendingActivationShops[j].uploadername + ','
                                shopimei[i].count++
                            }

                        }

                    }
                }
            }
            setLoading(false)
        }
        
        setshowimei(shopimei)
        
    },[pendingActivationShops])
    
    return (
        <div className='flex flex-col items-center justify-center my-2'>
            <div className='bg-blue-500 text-white p-2 rounded mb-2'>Pending Activation {pendingActivationShops && (<>{pendingActivationShops.length}</>)}</div>
            {!!loading && (
                <>
                    Loading....
                </>
            )}
            <div className='text-sm flex flex-col gap-1'>
                {showimei && showimei.map((items, i) => (
                    <div key={i} className='flex flex-col border border-black p-1 rounded'>
                        <div className='bg-blue-500 p-2 rounded text-white'>

                            {user.subdesignation =='vba' && (
                                <>
                                {items.uploadername.split(',')[0]} {`(${items.count})`}
                                </>
                                
                            )}

                            {user.subdesignation !='vba' && (
                                <>
                                {items.shopname} {`(${items.count})`}
                                </>
                            )}
                        </div>
                        <div className='flex gap-3 p-2'>
                            <div>
                                <h1 className='h-10 w-22'>IMEI</h1>
                                {items.imei.split(',').map((theitem,i) => (
                                    <div key={i}>{theitem}</div>
                                ))}
                            </div>
                            <div>
                                <h1 className='h-10 w-18 '>Upload Date</h1>
                                {items.uploaddate.split(',').map((theitem,i) => (
                                    <div key={i}>{theitem.split('T')[0]}</div>
                                ))}
                            </div>
                            <div>
                                <h1 className='h-10 w-18'>Product</h1>
                                {items.product.split(',').map((theitem,i) => (
                                    <div key={i}>{theitem}</div>
                                ))}
                            </div>
                            
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
