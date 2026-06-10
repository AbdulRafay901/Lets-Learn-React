import React from 'react'
import UseState from './useState'
import StopTimer from './stopTimer'
import AdvanceUseState from './advanceUseState'
import FormHandling  from './formHandling'

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
        
    </div>
  )
}

export default App
