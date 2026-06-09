// Hooks 

// Use State ------------- Start

// state ko manager krne liye 

// AcHa react me use state ka kaam kya hota he kesi state ko change krna means
// Jese Abhi value he
// Let a = 1;
// Thk hena ab hamne karna he change jese ke
// a = 2;
// Ab ye kya howa state change howa or yehi kaam karta he react js me useState 

// Use State ------------- End

// use Effect ------------ Start

// Side effects handle krne ke liye (jaise API call, DOM manipulation, event listerner)

// Acha Ab use Effect Kya krta he Ye krta  he alag se kaam jese jo kaam kara horaha he
// Iusko hone deta he khud alag se kuch kaam krta he  jese Api ko call krna side me
// Mltb example Truck Chal raha he Aik jaga par ab hamhe iudher chalani he 
// cycle to Ab ham use krenge use Effect ye kya  karega ye truck 
// Ko chalne dega khud truck ke side me se chalega 

// use Effect ------------ End

// use Ref ---------------- Start

// mutable values hold karne ke liye jo re-render trigger na karein, ya DOM Access krne
// ke liye 

// Acha Ab Use Ref kya kaam krta he Ab hamhe Kuch change krna he website me se
// To ham khud nhi krte hen hame reactjs ko bolte he wo krta he or hamhe krke de deta he
// Jese hamhe kuch change krna he rafay likha he aik waha krna he Hafsa To ab ham khud
// Nhi krenge balke react ko bolenge wo krke dega 

// use Ref ---------------- End

// use Context ------------ Start

// global State ko consume krne ke liye without prop drilling

// Acha Ab use Context ka kaam kya hota he Jaab hamhe Koi chez puri website ya phr
// Ziyda jaga use krni ho mtlb Aik chez ka access kafi files ko dena he jese Aik button
// He ab wo har file ko dena he to Isko ham globally rakhenge mtlb is button ko 
// aik jaga rkh denge phr har koi use krskhta he iske liye use hota he use Context

// use Context ------------ End

// use Reducer ----------- Start

// Complex State management ke liye (Redux jaisa chota version)

// Acha use Reducer ka  kya kaam hota he Complex Logic Handle krna jese
// User login he ya nhi har page par check hoga  iske liye use  hoga useReducer


// use Reducer ----------- End

//  use Memo & useCallback ------- Start

// use Memo & useCallback - optimization ke liye  jo re-render trigger na karein,
// ya DOM Access karne ke liye

//  use Memo & useCallback ------- End

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
    <App />
  
)
