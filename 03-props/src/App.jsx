import React from 'react'
import { Carts } from './Carts'

// Acha Ab props Kya hota he React me 
// props me kya hota he jaab bhi hamhe aik cheezi bhot sari banani he jese Carts
// carts ka design same hoga leken iunki ander ki value change hogi to 
// iske liye use hota he  props aik cart banao iusko jitni bar call karna he karo
// or iuske ander ki value aese <Carts Name="John Bark" /> change krdo 

const App = () => {
  return (
    <div className='Carts'>
          <Carts Name="John Bark" img="https://sp.yimg.com/ib/th/id/OIP.cSgjmqsQ5KmBQQF9qO-8zQHaFq?pid=Api&w=148&h=148&c=7&dpr=2&rs=1"/>
          <Carts Name="Rock Star" img="https://thf.bing.com/th?q=Person+Stock+Image&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"/>
          <Carts Name="Geong Seong" img="https://thf.bing.com/th?q=Person+in+a+Suit&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&dpr=1.3&pid=InlineBlock&rm=3&mkt=en-WW&cc=PK&setlang=en&adlt=moderate&t=1&mw=247"/>
    </div>
  )
}

export default App