import React from 'react'
import { useState } from 'react';


const NoteBook = () => {

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")

    const [notes, setnotes] = useState([])


function withoutReload(e){
    e.preventDefault();

    const copyNotes = [...notes]

    copyNotes.push({Name,Email})

    setnotes(copyNotes)



}


  return (
    <div className='bg-black text-white h-96 p-5'>
        <form action="" className='flex gap-5' onSubmit={(e) => {
            withoutReload(e)
        }}>
               <input 
                      type="text"
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Enter Your Name'
                      className='bg-black p-2 border-solid border h-10'>
               </input>

               <input 
                      type="text"
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Your Email'
                      className='bg-black p-2 border-solid border h-10'>
               </input>

               <button 
                   type='submit'
                   className='border-3 border-white border-solid border w-36 h-10'
               >Submit
               </button>
        </form>


      <div className='mt-10 my-10'>
          {notes.map((elem, idx) => (
            <div key={idx} >
                 <p>Name: {elem.Name}</p>
                 <p>Email: {elem.Email}</p>
                 <button type="button" onClick={(idx) =>{
                     const copyNotes = [...notes]

                     copyNotes.splice(idx,1)

                     setnotes(copyNotes)
                 }}>Delete</button>
                 <hr />
            </div>
          ))}
      </div>
        
    </div>
    
    

    
  )

}

export default NoteBook