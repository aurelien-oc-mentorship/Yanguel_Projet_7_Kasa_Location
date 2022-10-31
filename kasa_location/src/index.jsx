// Importe les différents outils de React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importe les différentes pages
import Home from './pages/Home'
import Header from './components/Header'

// Importe les fichiers CSS
import './styles/headerHome.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
