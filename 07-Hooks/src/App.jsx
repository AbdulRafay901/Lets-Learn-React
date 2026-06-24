import React from 'react'
import UseState from './useState'
import StopTimer from './stopTimer'
import AdvanceUseState from './advanceUseState'
import FormHandling  from './formHandling'
import NoteBook from './NoteBook'
import Localstorage from './localstorage'
import ApiCalling  from './apiCalling'
import UseStateRealUse from './useStateRealUse'
import Gallery from './Gallery'

const App = () => {
  return (
    <div className="">
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
         <Localstorage />
         <ApiCalling />
         <UseStateRealUse />
         <Gallery />
    </div>
  )
}

export default App
