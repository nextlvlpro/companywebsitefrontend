import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../UserContext';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function ShopQuery() {
  const { user } = useContext(UserContext);
  const [shopSaleData, setShopSaleData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [theshopsales, setTheshopsales] = useState(null)
  const [theshoptgt, setTheshoptgt] = useState(null)
  const tsmarea = useParams()

  useEffect(() => {
    if (user) {
      setLoading(true)
      axios.post('/tsmsalequery', tsmarea).then(({ data }) => {
        setShopSaleData(data)
        
        
        setLoading(false)
      })
    }
  }, [user])

  useEffect(()=> {
    if(shopSaleData){
      let totalshopsale = 0
      let totalshoptgt = 0
      if(shopSaleData) {
        for (let i = 0; i < shopSaleData.length; i++) {
         totalshopsale += shopSaleData[i].ach
         totalshoptgt += shopSaleData[i].target
        }
        setTheshopsales(totalshopsale)
        setTheshoptgt(totalshoptgt)
      }
    }
  },[shopSaleData])

  return (
    <div className='flex flex-col px-2'>
      <div className='bg-blue-500 p-2 text-white rounded text-center w-[250px] m-auto my-5'>
        Shop Sale Query {`(${tsmarea.tsmarea})`} 
        <br /> 
        {!!shopSaleData && (<>{`Total Target (${theshoptgt})`}</>)}
        <br />
        {!!shopSaleData && (<>{`Total Activations (${theshopsales})`}</>)}
        <br/>
        Ach: {!! shopSaleData && (<>({((theshopsales/theshoptgt)*100).toFixed(2)}%)</>)}
      </div>
      {shopSaleData?.map((items, i) => (

        <div key={i} className='flex flex-col text-left shadow-sm shadow-blue-500  border border-blue-500 rounded-xl items-center p-1 mb-2 bg-gray-300'>
          <div className='bg-blue-500 text-white p-1 rounded '>
            {items?.vworkShopName.split('(')[0]}
          </div>
          <div className='flex items-center justify-center gap-2 p-1'>
            <div className='border-r border-gray-500 p-1'>
              Stock: {items.currentStock}
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 '>
            <div className='border-r border-gray-500 p-1'>
              Target: {items.target}
            </div>
            <div className='border-r border-gray-500 p-1'>
              Ach: {items.ach}
            </div>
            <div>
              Ach %: {((items.ach / items.target) * 100).toFixed(1)} %
            </div>
          </div>
          <div className='flex items-center justify-center gap-2 '>
            <div className='border-r border-gray-500 p-1'>
              Last Month Sale: {items.lastMonthTotalSale}
            </div>
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
