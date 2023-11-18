import React, { useContext } from 'react'
import Carousel from "nuka-carousel"
import p1 from './assests/CarsoulPhotos/p1.jpg'
import p2 from './assests/CarsoulPhotos/p2.jpg'
import p3 from './assests/CarsoulPhotos/p3.jpg'
import logo from './assests/logo.jpg'
import { UserContext } from '../../UserContext'
import SaleQuery from '../OnlySaleQuery/SaleQuery'

export default function HeroPage() {
  const {user} = useContext(UserContext)
  return (
    <div className='m-auto w-full flex items-center justify-center mt-4 p-1 flex-col'>
      <div className='text-white p-4'>
        Welcome to MEDPL Official Website
      </div>
      <div className='rounded-2xl overflow-hidden border-2 p-1'>
      <img src={logo} alt="logo" className='w-96 rounded-2xl shadow-sm shadow-black' />
      </div>
      
    </div>
  )
}
