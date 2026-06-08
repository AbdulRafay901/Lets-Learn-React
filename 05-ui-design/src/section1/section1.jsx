import React from 'react'
import Navbar from './navbar'
import { RightContent } from './rightContent'

const Section1 = () => {
  return (
    <div className='py-5 h-225 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url('./public/home-banner.jpg')" }}>
          <Navbar />
          <RightContent />
    </div>
  )
}

export default Section1