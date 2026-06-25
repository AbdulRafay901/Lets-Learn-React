import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const Gallery = () => {
     
    const [data, setdata] = useState([])

    const [page, setpage] = useState(1)

    console.log(page)

    const fetchdata = async () => {

        const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`);

        const data = await res.data

        setdata(data)

    }

  return (
    <div className='bg-black w-full py-10'>
         <button className='bg-slate-700 text-yellow-50 px-7 py-2 font-medium'
         onClick={() => {
            fetchdata()
         }}
         >Fetch Data
         </button>
         <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
               {data.map((elem,idx) => (
                   <div className="" key={idx}>
                         <img src={elem.download_url} className='w-full h-56' ></img>
                         <p className='text-white'>{elem.author}</p>
                   </div>
               ))}
               <div className="col-span-4 flex justify-center gap-2">
                     <button className='bg-yellow-300 px-7 py-1' onClick={() => {
                          if(page > 1){
                            setpage(page - 1)

                            fetchdata()
                          }
                     }}>Prev</button>
                     <button className='bg-yellow-300 px-7 py-1' onClick={() => {
                           setpage(page + 1)

                           fetchdata()
                     }}>Next</button>
                     
               </div>
         </div>
    </div>
  )
}

export default Gallery
