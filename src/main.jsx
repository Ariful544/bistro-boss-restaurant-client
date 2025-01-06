import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={routes} />
        <ToastContainer position="top-center" closeOnClick={true} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
