import React from 'react'
import {Store} from 'lucide-react'


const Navbar = () => {
  return (
    <div className='px-15 flex justify-between items-center'>
            <h1 className='text-4xl forced-color-adjust-auto text-white font-sans'>Favison</h1>
            <div className='flex gap-11 text-white'>    
                  <a href=''>Home</a>
                  <a href=''>Features</a>
                  <a href=''>Price</a>
                  <a href=''>Pages</a>
                  <a href=''>Blog</a>
                  <a href=''>Contact</a>
            </div>
            <div className="flex justify-between items-center gap-10">
                  <Store className='text-white size-5' />
                  <button className='bg-white w-33 h-11 text-1xl font-sans rounded-1xl'>Sign Up
                    
                  </button>
            </div>
    </div>
  )
}

export default Navbar
