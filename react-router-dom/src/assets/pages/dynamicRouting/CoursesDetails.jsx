import React from 'react'
import { useParams } from 'react-router-dom'

export const CoursesDetails = () => {


    const param = useParams()

    

  return (
     <div className='Home'>
          <h1> Courses No {param.id}</h1>
    </div>
  )
}
