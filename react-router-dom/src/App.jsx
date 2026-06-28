import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/component/Navbar'
import Home  from './assets/pages/Home'
import About from './assets/pages/About'
import NotFound from './assets/pages/NotFound'

// Nested Routing page ------------------------ Start

import Products from './assets/pages/NestedRouting/Products'
import Mens from './assets/pages/NestedRouting/Mens'
import Women from './assets/pages/NestedRouting/Women'

// Nested Routing page ------------------------ End
import './App.css';


const App = () => {
  return (
    <div id="App">
    <Navbar/>
    <Routes>

           <Route path='/' element={<Home />}></Route>
           <Route path='/About' element={<About />}></Route>
           <Route path='*' element={<NotFound />}></Route>
           <Route path="/products" element={<Products />}>
                  <Route path='men' element={<Mens />}></Route>
                  <Route path='women' element={<Women />}></Route>
           </Route>
    </Routes>
    </div>
  )
}

export default App
