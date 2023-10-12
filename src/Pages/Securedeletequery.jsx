import axios from 'axios'
import React from 'react'


export default function Securedeletequery() {

    function deleteQuery() {
        axios.post('http://localhost:4000/delete').then((res) => { 
            document.querySelector(".delete").innerHTML = "deleted"
        })
    }

  return (
    <div className='flex items-center justify-center flex-col gap-5'>
        <button className=' bg-blue-950 p-1 rounded-lg mt-3 text-white font-semibold' onClick={deleteQuery}>delete</button>
            <div className="delete flex items-center justify-center">

            </div>
    </div>
  )
}
