import React from 'react'
import { useState } from 'react'

const useStateprac = () => {

    const [first, setfirst] = useState(10)

  return (
    <div className='flex gap-10'>
          This is a {first}
          <button className='bg-blue-500 text-white w-20 h-10 ' onClick={() => {
              setfirst(first+1)
          }}> Change</button>
    </div>
  )
}

export default useStateprac
