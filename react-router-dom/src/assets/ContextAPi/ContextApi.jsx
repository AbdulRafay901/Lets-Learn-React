import React from 'react'
import { useContext } from 'react'

// Acha ye Context Api isliye use hoti he  Aik data ko Bhot sari jaga use Krskhte he 
// Mtlb data ko Global rkh kar kahin bhi use krskhte hen 
// isko Kehte he Data KO utilization krna

// 1: Context || Context Create Karo
// 2: provider || Provide karo data
// 3: use context || use karo data

 const ContextApi = (props) => {
  return (
    <div>
          {props.Children}
    </div>
  )
}


export default ContextApi