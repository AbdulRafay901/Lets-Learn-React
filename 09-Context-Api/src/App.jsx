import React from 'react'
import { useContext } from 'react'
import { theme } from './ContextApi'

const App = () => {

  const data = useContext(theme);
  
  return (
    <div>{data}</div>
  )
}

export default App
