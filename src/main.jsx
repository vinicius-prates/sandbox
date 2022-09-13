import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { MyRoutes } from './Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MyRoutes/>
  </BrowserRouter>
)
