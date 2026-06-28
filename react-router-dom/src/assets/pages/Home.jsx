import React from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='Home'>
          <button className='AboutPageNavigate' onClick={() => {
             navigate('/About')
          }}>About Page</button>
          <h1>Home Page</h1>
    </div>
  )
}

export default Home
