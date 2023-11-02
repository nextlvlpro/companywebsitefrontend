import axios from 'axios'
import React from 'react'

export default function Vbasales() {
    function deleteQuery() {
        axios.post('/deletevbasales').then((res) => { 
            document.querySelector(".delete3").innerHTML = "deleted"
        })
    }
  return (
    <div className='border border-gray-400 p-2 flex flex-col'>
      <h1 className='text-2xl text-white bg-blue-500 p-2 w-[200px] rounded text-center'>vba sales</h1>
      <button className=' bg-blue-950 p-1 rounded-lg mt-3 text-white font-semibold' onClick={deleteQuery}>delete</button>
      <div className="delete3 flex items-center justify-center"></div>
    </div>
  )
}
