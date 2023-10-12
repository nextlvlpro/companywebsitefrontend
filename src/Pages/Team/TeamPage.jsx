import React from 'react'

export default function TeamPage() {
    const teamMember = [
        { name: 'Bhanu', designation: 'VBA Service Executive', image: 'https://images.unsplash.com/photo-1696610358567-0a75265c73b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.' },

    ]

    return (
        <div className='mt-5 p-2 flex flex-col sm:flex-row '>

            <div className="w-full max-w-sm  border  rounded-lg shadow bg-gray-800 border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>

                <div className="flex flex-col items-center pb-10">
                    {teamMember.map((items) => (
                        <div className='flex flex-col items-center justify-center' key={items.name}>
                            <img className="w-24 h-24 mb-3 border-4 border-white rounded-full shadow-lg" src={items.image} alt="Bonnie image" />
                            <h5 className="mb-1 text-xl font-medium text-white">{items.name}</h5>

                            <span className="text-sm text-gray-500 dark:text-gray-400">{items.designation}</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center  border  rounded-lg  focus:ring-4 focus:outline-none bg-gray-200 text-black  border-gray-600 hover:bg-gray-400 hover:border-gray-700 focus:ring-gray-700">
                                    {items.quote}
                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>

        </div>
    )
}
