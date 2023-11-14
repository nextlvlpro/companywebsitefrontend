import React, { useContext } from 'react'

import CardPage from './Pages/Home/CardPage'


import { UserContext } from './UserContext'
import HeroPage from './Pages/Home/HeroPage'
import Securedeletequery from './Pages/admin/Securedeletequery.jsx'

import Footer2 from './Pages/Home/Footer2'



export default function Home() {

const { user, admin } = useContext(UserContext)


  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <div className='w-[90%] m-auto mt-[30px] bg-blue-500  shadow-lg mb-2 pb-10 rounded-lg'>
        <div className='flex items-center justify-center flex-col m-auto'>
          <HeroPage />
          <CardPage />
        </div>

      </div>
      <Footer2 />
      
    </div>
  )
}
