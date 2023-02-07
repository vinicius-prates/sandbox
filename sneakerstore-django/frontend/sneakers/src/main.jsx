import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
    
)
