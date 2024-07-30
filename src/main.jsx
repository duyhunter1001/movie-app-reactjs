import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import { MovieDetailPage } from './pages/MovieDetailPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage /> 
  },
  {
    path: '/movie/:id',
    element: <MovieDetailPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
