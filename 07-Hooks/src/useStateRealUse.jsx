import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'


// Acha ye he HE Use State Jaab hamhe koi kaam Alag se krna ho 
// Jese aik truck chal raha he ab hamhe bike bhi chalani he yejo bike hena yehe useState
// Jaab truck chal jayega Phr ye bike chalegi means useState 
// Ab neche Hamne use state use kara he Aik par chalega phr hamari marzi he isko ham 
// Kabhi bhi chalaye jese neche hamne kaha he Mouse Enter par or Mouse Leave par use state chale
// TO wo chal raha he [first] krden to bss jaab jaab first state change hoga taab chalega bss 

const useStateRealUse = () => {
    
    const [first, setfirst] = useState(0)

    const [second, setsecond] = useState(100)

    useEffect(function(){
        console.log("Use Effect is Running.....")
    }, [first,second])

  return (
    <div className='bg-gray-500 w-full mt-20 p-10'>
          <h1 className='text-2xl font-bold'>Use Effect</h1>

          <div className="mt-10 font-bold text-6xl">{first}</div>
          <div className="mt-10 font-bold text-6xl">{second}</div>
          <button className='bg-gray-200 w-20' 
          onMouseEnter={() => {
             setfirst(first + 1)
          }}
          onMouseLeave={() => {
              setsecond(second - 1)
          }}>Plus</button>

    </div>
  )
}

export default useStateRealUse
