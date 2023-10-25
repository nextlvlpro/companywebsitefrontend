import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { UserContext } from '../../UserContext'



export default function SaleQuery() {
    
    const { user, ready } = useContext(UserContext)
    const [isData, setIsData] = useState(false)
    const [loading, setLoading] = useState(false)

    function showSaleData(e) {
        setLoading(true)
        setIsData(false)
        e.preventDefault()
        axios.post('/salequery', { shopCode: user.shopCode }).then(({ data }) => {
            setIsData(data)
            setLoading(false)
            
        })
    }

    return (
        <div>
            <div className="my-5 mx-auto  md:w-fit p-4 text-white border  rounded-lg shadow sm:p-6 md:p-8 bg-white border-gray-700 flex flex-col gap-2">
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium  text-black">Sale Query Platform for Retailers</h5>
                    <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={showSaleData}>
                            Show Your Performance
                        </button>

                    <div className="text-sm font-medium text-gray-600 cantFind">
                        Can't find your Shop <Link to="/contact " className="hover:underline text-blue-500">Contact us.</Link>
                    </div>
                </form>
                <div className='mt-4 p-4 text-white font-medium transition-all bg-[#1E2936] rounded-md border border-gray-700'>
                    {loading && (
                        <Stack>
                            <div className='flex flex-col gap-0 transition-all'>
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                                <Skeleton variant="text" sx={{ fontSize: '1.5rem' }} />
                            </div>
                        </Stack>
                    )}
                    <div className='results'>
                        {!!isData && (
                            <div className='flex flex-col gap-2'>
                            <div>
                              Shop Code :  <span className=''>{isData.shopCode}</span>
                            </div>
                            <div>
                              Shop name:  {isData.vworkShopName.split('(')[0]}
                            </div>
                            <div>
                                ASM Area : {isData.amArea}
                            </div>
                            <div>
                                TSM Area : {isData.tmArea}
                            </div>
                            <div>
                                Current Stock : {isData.currentStock}
                            </div>
                            <div>
                              Shop Target :  {isData.target}
                            </div>
                            <div>
                              Shop Ach :  {isData.ach}
                            </div>
                            <div>
                              Progress :  {((isData.ach/isData.target)*100).toFixed(2)}%
                            </div>
                            <div>
                              Last Month Sale:  {isData.lastMonthTotalSale}
                            </div>                                 
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

