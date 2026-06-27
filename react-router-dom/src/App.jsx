import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/component/Navbar'
import Home  from './assets/pages/Home'
import About from './assets/pages/About'
import './App.css';


const App = () => {
  return (
    <div id="App">
    <Navbar/>
    <Routes>
           
           <Route path='/' element={<Home />}></Route>
           <Route path='/About' element={<About />}></Route>
    </Routes>
    </div>
  )
}

export default App
