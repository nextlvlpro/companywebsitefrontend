import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../UserContext'

export default function PendingPuch() {
    const { user } = useContext(UserContext)
    const [imeiData, setImeiData] = useState(null)
    const [imeishops, setImeiShops] = useState(null)
    const [finalImei, setFinalImei] = useState(null)
    const [loading, setLoading] = useState(false)
    let imeishop = []



    useEffect(() => {

        if (user) {
           
                setLoading(true)
                axios.post('/pendingpunch', { area: user.area, subdesignation: user.subdesignation, uploadercode: user.shopCode }).then(({ data }) => {
                    setImeiData(data)

            })
           
            
        }



    }, [user])

    useEffect(() => {
        setLoading(true)
        if (imeiData) {

            imeiData.forEach(element => {
                if (!imeishop.includes(element.storename))
                    imeishop.push(element.storename)

            });

            setImeiShops(imeishop)

            if (imeishop) {
                let shopwiseimei = []
                for (let i = 0; i < imeishop.length; i++) {

                    shopwiseimei.push({ shopname: imeishop[i], imei: '', product: '', activationtime: '', count: 0 })

                    for (let j = 0; j < imeiData.length; j++) {
                        if (shopwiseimei[i].shopname == imeiData[j].storename) {
                            shopwiseimei[i].imei += imeiData[j].IMEI + ','
                            shopwiseimei[i].product += imeiData[j].product + ','
                            shopwiseimei[i].activationtime += imeiData[j].activationtime + ','
                            shopwiseimei[i].count++
                        }
                    }

                }
                setLoading(false)
                setFinalImei(shopwiseimei)
            }

        }

    }, [imeiData])

    return (
        <div className='mt-2 px-2'>
            <div className='bg-blue-500 text-white p-2 rounded mb-2 w-[200px] mx-auto text-center'>Pending Upload {imeiData && (<>{`(${imeiData.length})`}</>)}</div>
            {!!loading && (
                <div className='md:w-[500px] mx-auto'>
                    Loading....
                </div>
            )}
            {finalImei?.map((items, i) => (
                <div key={i} className='border border-black rounded md:w-[400px] mx-auto mt-2'>
                    <div className='flex flex-col justify-start'>
                        <div className=''>
                            <div className='bg-blue-500 p-1 rounded text-white text-sm'>
                                {items.shopname} {`(${items.count})`}
                            </div>
                        </div>
                        <div className='flex items-center justify-start p-2'>
                            <div className='flex gap-2 justify-normal'>
                                <div>
                                    <h1 className='text-sm font-semibold'>IMEI</h1>
                                    {items?.imei.split(',').map((imei, i) => (
                                        <div key={i} className='text-sm font-mono'>
                                            {imei}
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <h1 className='text-sm font-semibold'>Date</h1>
                                    {items?.activationtime.split(',').map((activationtime, i) => (
                                        <div key={i} className='text-sm font-mono'>
                                            {activationtime.split("T")[0]}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <h1 className='text-sm font-semibold'>Product</h1>
                                    {items?.product.split(',').map((product, i) => (
                                        <div key={i} className='text-sm font-mono'>
                                            {product}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
