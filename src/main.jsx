import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routers/Router'
import AuthProviders from './Providers/AuthProviders'


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:w-[80%] mx-auto'>
    <React.StrictMode>
      <AuthProviders>
        <RouterProvider router={router} />
      </AuthProviders>
    </React.StrictMode>,
  </div>
)

