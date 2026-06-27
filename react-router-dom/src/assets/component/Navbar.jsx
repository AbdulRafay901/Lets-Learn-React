import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
          <p>Navbar</p>
          <div className='link'>
                <Link to={'/'} className='customlink'>Home</Link>
                <Link to={'/About'} className='customlink'>About</Link>
                <Link href='' className='customlink'>Portfolio</Link>
                <Link href='' className='customlink'>Blog</Link>
                <Link href='' className='customlink'>Contact</Link>
          </div>
    </div>
  )
}

export default Navbar
