import React, { useActionState } from 'react'
import { useState } from 'react'

// Advance Use State me hamne dekha he Ke Use state ke zariye se 
// Obj OR array ko kese update krte hen 

const advanceUseState = () => {



const [obj, setobj] = useState({user:"Rafay", age:18})  

function objUpdate(){
   const newObj = {...obj}; 
   newObj.user = "Update Name"
   setobj(newObj)
}

const [Arr, setArr] = useState(["Rafay","Hasnain"])

function ArrUpdate(){
    const newArr = [...Arr];
    newArr.push("Push")

    setArr(newArr)
}

const [Batches, setBatches] = useState({username:"AbdulRafay901", password:"WebDeveloper"})

const batchesUpdate = () => {
    setBatches(prev => ({...prev,username:"Change"}))
}



  return (
    <div>
          <h1 className='text-center text-4xl font-bold'>Advance Use State</h1>
          <br></br>
          <p className='text-center text-3xl'>Object</p>
          <br></br>
          <p className='text-center font-bold'>{obj.user} {obj.age}</p>
          <br></br>
          <button className='flex justify-self-center items-center bg-blue-800 text-white w-20 h-10 justify-center' onClick={objUpdate}>Update</button>

          <br></br>
          <br></br>

          <p className='text-center text-3xl'>Array</p>
          <br></br>
          <p className='text-center font-bold'>{Arr[0]} {Arr[1]} {Arr[2]}</p>
          <br></br>
          <button className='flex justify-self-center items-center bg-blue-800 text-white w-20 h-10 justify-center' onClick={ArrUpdate}>Update</button>


          <br></br>
          <br></br>

          {/* Batches Update in react --------------- Start */}

           <p className='text-center text-3xl'>Batches</p>
          <br></br>
          <p className='text-center font-bold'>{Batches.username}  {Batches.password}</p>
          <br></br>
          <button className='flex justify-self-center items-center bg-blue-800 text-white w-20 h-10 justify-center' onClick={batchesUpdate}>Update</button>

          {/* Batches Update in react --------------- End */}
    </div>
  )
}

export default advanceUseState
