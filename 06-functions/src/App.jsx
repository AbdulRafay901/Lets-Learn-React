import React from 'react'

// Acha Ye he Functions isme dekha gaya he jaab hamhe Kesi button Click kuch print
// Krna ho ya jis chez par click howa he iuski delete chaiye hoto is tareeke se 
// Se use hota he isme element ke ander bhi function ban skhte he jese necche banaya he

const Check = (val) => {
  console.log(val)
}

const App = () => {
  return (
    <div className=''>
         <div className="">
               <button onClick={(elem) => {
                  Check(elem.target)
               }}>CLICK</button>
         </div>

         <div className='w-100 bg-black text-white h-100' onMouseMove={(elem) => {
             console.log(elem.clientY)
         }}>MOVE</div>

         

         <div className='' onMouseEnter={(elem) => {
                console.log(elem)
         }}>
               <div className="w-full h-screen bg-blue-500"></div>
               <div className="w-full h-screen bg-pink-500"></div>
         </div>
    </div>
  )
}

export default App
