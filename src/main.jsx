import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes/AppRouter'
import './index.scss';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppRouter/>
  </BrowserRouter>
)
