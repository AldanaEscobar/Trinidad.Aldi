import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from '../components/homePage'
import VidaNomade from '../components/vidaNomade'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
  <div className="app-container">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/vidanomade" element={<VidaNomade/>} />
    </Routes>
    </div>
  </Router>
</React.StrictMode>

)
