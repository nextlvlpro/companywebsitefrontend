import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div className='w-full p-2 flex items-center justify-center gap-2 flex-col sm:flex-row pb-2 sm:flex-wrap bg-blue-500 my-6'>

      <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
        <CardHeader color="blue-gray" className="relative">
          <div className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>

          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              Retailer Helpline
            </Typography>
            <Typography>
              Don't Know your shop code or Other issues? <br /> You can contact us and register with website.
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/retailercontact'} >Reach Us</Link>
          </div>
        </div>
      </Card>

      <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
        <CardHeader color="blue-gray" className="relative">
          <div className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>

          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              VBA Voice
            </Typography>
            <Typography>
              VBA Helpline Program <br /> Facing Issues while you Work. Contect us on helpLine
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/vbacontact'} >Contact Us</Link>
          </div>
        </div>
      </Card>
    </div>
  )
}
