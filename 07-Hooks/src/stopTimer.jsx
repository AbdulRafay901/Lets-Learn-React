import React from 'react'
import { useState } from 'react'

const stopTimer = () => {
  const [counter, setcounter] = useState(0)
  return (
    <div className="flex flex-col items-center p-10 bg-blue-800 gap-10">
          <h1 className='text-5xl text-white'>Stop Timer</h1>
          <div className="text-6xl text-teal-50">{counter}</div>
          <div className="flex gap-10">
                <button className='bg-white w-32 h-8' onClick={() => {
                  setcounter(counter + 1)
                }}>Increase</button>
                <button className='bg-white w-32 h-8' onClick={() => {
                  if(counter > 0){
                     setcounter(counter - 1)
                  }
                }}>Decrease</button>
          </div>

    </div>
  )
}

export default stopTimer
