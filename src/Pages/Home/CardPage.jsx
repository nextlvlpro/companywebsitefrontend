import React, { useContext } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';


export default function CardPage() {
  const {user} = useContext(UserContext)
  return (
    <div className='w-full p-2 flex items-center justify-center gap-2 flex-col sm:flex-row pb-2 sm:flex-wrap'>
      <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
        <CardHeader color="blue-gray" className="relative">
          <div className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </svg>
          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              Sale Query
            </Typography>
            <Typography>
              Here You can hav query about Sales. <br /> you will need your shop code if you don't have account.
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/onlysalequery'} >Know Your Sales</Link>
          </div>
        </div>
      </Card>

      {!!user && (
        <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
        <CardHeader color="blue-gray" className="relative">
          <div className='mt-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-9 h-9">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
            </svg>


          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              Pending Activations
            </Typography>
            <Typography>
              Sale Punched but not Ative <br /> Here You can check the sales which are punched but still not active.
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/pendingactivation'} >Pending Activations</Link>
          </div>
        </div>
      </Card>
      )}



{!!user && (
        <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
        <CardHeader color="blue-gray" className="relative">
            <div className='mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>


          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              Pending Upload
            </Typography>
            <Typography>
              Sale Activated but Punched <br /> Here You can check the sales which are Activated but still not Punched.
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/pendingpunch'} >Pending Upload</Link>
          </div>
        </div>
      </Card>
      )}

{!!user && (
        <Card className="mt-3 rounded-2xl overflow-hidden border-2 border-gray-600 flex flex-col justify-center items-center w-[300px] h-[300px]">
          <CardHeader color="blue-gray" className="relative">
            <div className='mt-2'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-9 h-9">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>



          </div>
        </CardHeader>
        <div className='flex flex-col justify-center items-center'>
          <CardBody className='w-full '>
            <Typography variant="h5" color="blue-gray">
              Scheme Payout
            </Typography>
            <Typography>
              Payout of Retailers <br /> Here You can check the Scheme Payout of Retailer.
            </Typography>
          </CardBody>
          <div className='border border-gray-600 p-1 bg-[#1F2937] text-white rounded-xl w-[70%] mb-2 flex items-center justify-center'>
          <Link to={'/schemepayout'} >Scheme Payout</Link>
          </div>
        </div>
      </Card>
      )}

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
              Don't Know your shop code? <br /> You can contact us and find your shop code and register with website.
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
