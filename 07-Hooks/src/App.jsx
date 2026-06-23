import React from 'react'
import UseState from './useState'
import StopTimer from './stopTimer'
import AdvanceUseState from './advanceUseState'
import FormHandling  from './formHandling'
import NoteBook from './NoteBook'

const App = () => {
  return (
    <div className="p-10">
         <UseState />
         <br></br>
         <br></br>
         <StopTimer />
         <br></br>
         <br></br>
         <AdvanceUseState />
         <br></br>
         <FormHandling />
         <br></br>
         <br></br>
         <br></br>
         <NoteBook /> 
    </div>
  )
}

export default App
