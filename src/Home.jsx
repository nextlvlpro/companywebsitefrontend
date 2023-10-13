import React, { useContext } from 'react'
import SaleQuery from './Pages/OnlySaleQuery/SaleQuery'
import CardPage from './Pages/Home/CardPage'
import Heropage from './Pages/Home/Heropage'
import Footer from './Pages/Home/Footer'
import { UserContext } from './UserContext'


export default function Home() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <div className='mb-[100px]'>
        <Heropage />
        <CardPage />
        {!!user && (
        <SaleQuery />
      )}
      </div>
      
      <Footer />
    </div>
  )
}
