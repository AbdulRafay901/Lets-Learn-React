import React from 'react'
import axios from 'axios'


const Gallery = () => {

    const fetchdata = async () => {
        const res = await axios.get('https://fakestoreapi.com/products');

        console.log(res)
    }

  return (
    <div className='bg-black w-full h-screen p-5'>
         <button className='bg-slate-700 text-yellow-50 px-7 py-2 font-medium'
         onClick={() => {
            fetchdata()
         }}
         >Fetch Data
         </button>
    </div>
  )
}

export default Gallery
