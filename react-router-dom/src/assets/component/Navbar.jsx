import React from 'react'
import { Link } from 'react-router-dom'


// Acha  YE Bouns tip he child se PArent me data bhejne ki jese hamne navbar se App me behja he theme change krne
// ke liye 




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
