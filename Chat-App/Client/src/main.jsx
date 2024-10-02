import { createRoot } from 'react-dom/client'
import './index.css'
import router from "./App.jsx"
import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
