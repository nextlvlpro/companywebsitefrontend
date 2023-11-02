import axios from 'axios';
import React, { useState } from 'react'

export default function ShopcodeSaleQuery() {
    const [shopCode, setShopCode] =useState('')
    const [shopSaleData, setShopSaleData] =useState(null)

    function handleShopcodeSaleQuery (e) {
        e.preventDefault()
        axios.post('/salequery',{shopCode}).then(({data})=> {
            setShopSaleData(data)
        })

    }
  return (
    <div className='m-auto text-lg text-white border-2 my-1 p-2 flex flex-col items-center justify-center max-w-[500px] rounded-2xl w-full'>
      <form className='flex flex-col items-center justify-center w-full'> 
        <input type="text" className='outline-none border border-gray-400 rounded text-black px-2 py-1 w-full text-center'
        value={shopCode}
        onChange={(e) => setShopCode(e.target.value)}
        placeholder='Enter Shop Code'
        />
        <button onClick={handleShopcodeSaleQuery} type='submit' className='w-lg border py-1 px-2 m-1 shadow-sm shadow-white bg-[#00738E] text-white rounded'>Check Sales</button>
      </form>
      {!!shopSaleData && (
        <div className='border my-2 p-2 rounded bg-[#1F2937] w-full flex flex-col gap-2 items-center'>
            <div>
                Shop Name : {shopSaleData.vworkShopName?.split('(')[0]}
            </div>
            <div>
                Target : {shopSaleData.target}
            </div>
            <div>
                Ach : {shopSaleData.ach}
            </div>
            <div>
                Ach % : {((shopSaleData.ach/shopSaleData.target)*100).toFixed(1)}%
            </div>
            <div>
                Current Stock: {shopSaleData.currentStock}
            </div>
            <div>
                ASM Area: {shopSaleData.amArea}
            </div>
            <div>
                TSM Area: {shopSaleData.tmArea}
            </div>
        </div>
      )}
    </div>
  )
}
