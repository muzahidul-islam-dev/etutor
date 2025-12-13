import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import routes from './routes/routes.jsx'
import AuthContext from './context/AuthContext.jsx'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_API_URL
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <RouterProvider router={routes}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
