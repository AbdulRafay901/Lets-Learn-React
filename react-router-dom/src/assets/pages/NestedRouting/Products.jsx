import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div className='Home'>

         <div className="childLinks">
               <Link to={'/products/men'} className='customlink'>Mens</Link>
               <Link to={'/products/women'} className='customlink'>Women</Link>
         </div>
         <Outlet />
          
          <h1>Product Page</h1>
    </div>
  )
}

export default Products
