import React from 'react'
import { Typography } from "@material-tailwind/react";

export default function Footer() {
  return (
    <div className='fixed bottom-0 w-full bg-white'>
        <footer className="">
      <Typography color="blue-gray" className="font-normal p-2 flex items-center justify-center text-center w-full">
        <div>
        &copy; 2023 medpl.co
        </div>
      </Typography>
    </footer>
    </div>
  )
}
