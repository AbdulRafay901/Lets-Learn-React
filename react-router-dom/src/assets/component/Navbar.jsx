import React from 'react'
import { Link } from 'react-router-dom'




const Navbar = (props) => {

  function changeTheme(){
      props.setTheme('Light')
  }

  


  return (
    <div className="navbar">
          <p>{props.Theme}</p>
          
          <div className='link'>
                <Link to={'/'} className='customlink'>Home</Link>
                <Link to={'/About'} className='customlink'>About</Link>
                <Link to={'/products'} className='customlink'>Products</Link>
                <Link href='' className='customlink'>Portfolio</Link>
                <Link href='' className='customlink'>Blog</Link>
                <Link href='' className='customlink'>Contact</Link>
          </div>
          <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
