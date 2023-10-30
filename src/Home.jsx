import React, { useContext } from 'react'

import CardPage from './Pages/Home/CardPage'

import Footer from './Pages/Home/Footer'
import { UserContext } from './UserContext'
import HeroPage from './Pages/Home/HeroPage'
import Securedeletequery from './Pages/Securedeletequery.jsx'
import SaleQuery from './Pages/OnlySaleQuery/SaleQuery'



export default function Home() {

const { user, admin } = useContext(UserContext)


  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-[90%] m-auto mt-[30px] bg-[#1F2937] rounded-3xl shadow-lg mb-[50px] pb-1'>
        <div className=''>
          <HeroPage />
          <CardPage />
        </div>
        <div className='border-t pt-5 mt-5'>
        <SaleQuery/>
        </div>
        
        {!!admin && (
          <Securedeletequery />
        )}

      </div>
      <Footer />
    </div>
  )
}
