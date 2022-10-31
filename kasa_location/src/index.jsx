// Importe les différents outils de React
import React from 'react'
import ReactDOM from 'react-dom/client'

// Importe les différentes pages
import Home from './pages/Home'

// Importe les fichiers CSS
import './styles/headerHome.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

function json() {
  fetch(
    'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json'
  )
    .then((response) => response.json())
    .then((response) => alert(JSON.stringify(response)))
    .catch((error) => alert("Erreur : le JSON n'a pas pu etre récuperé"))
}
console.log(json)

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
