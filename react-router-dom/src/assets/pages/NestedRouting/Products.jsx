import React from 'react'
import { Link, Outlet } from 'react-router-dom'


// Acha Ye he Nested Route Mltb Aik page jese parent page ke ander childs page ke link hote he 
// jese Products page me Category page ke liye alag alag page banege jese men women 
// To isliye nested routing iusko kehte he jisme Parent page me child page ke links ho 

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
