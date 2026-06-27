

// Basic Setup ----------------------------- Start

// Browser Route ---------------- Start

// Browser Route Client Side Routing hoti he 

//   / 
//  /about

// Browser Route ---------------- End

// Basic Setup ----------------------------- End

// Nested Route 

// dynamic Route

// usenavigate

// 404 page




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
