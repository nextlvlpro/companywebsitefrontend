import axios from 'axios'
import React from 'react'


export default function Securedeletequery() {

    function deleteQuery() {
        axios.post('/delete').then((res) => { 
            document.querySelector(".delete").innerHTML = "deleted"
        })
    }

  return (
    <div className='flex items-center justify-center flex-col gap-5 border border-gray-400 p-4'>
      <h1 className='text-lg text-white bg-blue-500 p-2 w-[200px] rounded text-center'>delete Sale data</h1>
        <button className=' bg-blue-950 p-1 rounded-lg mt-3 text-white font-semibold' onClick={deleteQuery}>delete</button>
            <div className="delete flex items-center justify-center">
            </div>
    </div>
  )
}
