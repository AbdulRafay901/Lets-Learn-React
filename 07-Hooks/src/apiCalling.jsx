import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const apiCalling = () => {

    const [first, setfirst] = useState([])

    const getData = async () => {
        const data = await axios("https://jsonplaceholder.typicode.com/todos/")

        setfirst(data.data)
        
    }
    getData()

    

  return (
       <div className="">
             {first.map((elem,idx) => (
                 <div className=""  key={idx}>
                      <p>{elem.title}</p>
                 </div>
             ))}
       </div>
  )
}

export default apiCalling