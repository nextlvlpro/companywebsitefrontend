import React from 'react'
import Carousel from "nuka-carousel"
import example from './assests/CarsoulPhotos/example.jpg'
import { button } from '@material-tailwind/react'

export default function HeroPage() {
  return (
    <div className='m-auto w-full flex items-center justify-center'>
      <div>
        <div className='text-white font-semibold text-center p-2'>
          Welcome to MEDPL official website
        </div>
        <div className='rounded-2xl overflow-hidden bg-white md:flex hidden w-[600px]'>
          <Carousel wrapAround={true} autoplay={true} autoplayInterval={5000}
           renderCenterLeftControls={({previousSlide}) => (
             <button onClick={previousSlide} className='h-16 w-10  bg-[#1F2937] shadow-sm shadow-gray-400 flex items-center justify-center rounded-r-md' >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"/>
              </svg>
               
            </button>
           )}

           renderCenterRightControls={({nextSlide}) => (
             <button onClick={nextSlide} className='h-16 w-10  bg-[#1F2937] shadow-sm shadow-gray-400 flex items-center justify-center rounded-l-md' >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
               </svg>
           </button>
          )}
           >  
            <img className='object-cover' src={example} alt="" />
            <img className='object-cover' src={example} alt="" />
            <img className='object-cover' src={example} alt="" />
          </Carousel>
        </div>

              {/* Moble View */}
        <div className='rounded-2xl overflow-hidden md:hidden flex w-[300px]'>
          <Carousel wrapAround={true} autoplay={true} autoplayInterval={5000}
           renderCenterLeftControls={({previousSlide}) => (
             <button onClick={previousSlide} className='h-10 w-5 bg-[#1F2937] shadow-sm shadow-gray-300 flex items-center justify-center rounded-r-md' >
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
               </svg>
            </button>
           )}

           renderCenterRightControls={({nextSlide}) => (
            <button onClick={nextSlide} className='h-10 w-5  bg-[#1F2937] shadow-sm shadow-gray-400 flex items-center justify-center rounded-l-md' >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
          </button>
         )}
          >
            <img src={example} alt="" />
            <img src={example} alt="" />
            <img src={example} alt="" />
          </Carousel>
        </div>        
      </div>

    </div>
  )
}
