import React, { useContext } from 'react'
import SaleQuery from './Pages/OnlySaleQuery/SaleQuery'
import CardPage from './Pages/Home/CardPage'

import Footer from './Pages/Home/Footer'
import { UserContext } from './UserContext'
import HeroPage from './Pages/Home/Heropage'


export default function Home() {
  const {user} = useContext(UserContext)
  return (
    <div>

      {!!user && (
        <SaleQuery />
      )}

      <div className='mb-[100px]'>
        <HeroPage />
        <CardPage />
        
      </div>
      
      <Footer />
    </div>
  )
}
