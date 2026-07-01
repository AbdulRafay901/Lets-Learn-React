import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

// Acha Ye Context Api kya hota he Context Api isliye use krte hen jaab hamhe koi chez globaly 
// use krni ho Aik chez kafi jaga use krni ho taab use context bnta he 
// use context me wo chez rkho or iusko pure <App/> pure project me wrap krdo 

export const theme = createContext()



const ContextApi = (props) => {

    const [Change, setChange] = useState('light')

  return (
    <div>
        <theme.Provider value={Change}>
            <h1>{props.children}</h1>
        </theme.Provider>

        <button onClick={() => {
            setChange('Dark')
        }}>Theme</button>
    </div>
  )
}

export default ContextApi