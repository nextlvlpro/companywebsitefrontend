import axios from 'axios'
import React from 'react'


export default function Securedeletequery() {

    function deleteQuery() {
        axios.post('/delete').then((res) => { 
            document.querySelector(".delete3").innerHTML = "deleted"
        })
    }

  return (
    <div className='flex items-center justify-center flex-col border border-gray-400 p-4 w-full'>
      <h1 className='text-lg text-white bg-blue-500 p-2 w-[200px] rounded text-center'>delete Sale data</h1>
        <button className=' bg-blue-950 p-1 rounded-lg mt-3 text-white font-semibold w-[100px]' onClick={deleteQuery}>delete</button>
            <div className="delete3 flex items-center justify-center">
            </div>
    </div>
  )
}
