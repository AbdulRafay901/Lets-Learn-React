import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './assets/component/Navbar'
import Home  from './assets/pages/Home'
import About from './assets/pages/About'
import NotFound from './assets/pages/NotFound'
import { Courses } from './assets/pages/dynamicRouting/Courses'
import { CoursesDetails } from './assets/pages/dynamicRouting/CoursesDetails'
import { useState } from 'react'


// Nested Routing page ------------------------ Start

import Products from './assets/pages/NestedRouting/Products'
import Mens from './assets/pages/NestedRouting/Mens'
import Women from './assets/pages/NestedRouting/Women'

// Nested Routing page ------------------------ End
import './App.css';


const App = () => {


  // Bouns Tip ------------------ Start

  // Acha  YE Bouns tip he child se PArent me data bhejne ki jese hamne navbar se App me behja he theme change krne
// ke liye

  const [Theme, setTheme] = useState("Dark");

  console.log(Theme)


  return (
    
    <div id="App">
    <Navbar Theme={Theme} setTheme={setTheme}/>

    {/* Bouns Tip ------------------ End */}
    <Routes>

           <Route path='/' element={<Home />}></Route>
           <Route path='/About' element={<About />}></Route>
           <Route path='*' element={<NotFound />}></Route>

           {/* Nested Routing ------------  Start */}
               <Route path="/products" element={<Products />}>
                      <Route path='men' element={<Mens />}></Route>
                      <Route path='women' element={<Women />}></Route>
               </Route>
            {/* Nested Routing ------------  End */}

            {/* Dynamic Routing ----------- Start */}
                <Route path="/courses" element={<Courses/>} />
                <Route path="/courses/:id" element={<CoursesDetails/>} />
           {/* Dynamic Routing ----------- End */}
    </Routes>
    </div>
  )
}

export default App
