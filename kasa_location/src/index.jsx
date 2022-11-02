// Importe les différents outils de React
import React from 'react'
import ReactDOM from 'react-dom/client'
// Importe React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Importe les différentes pages
import Home from './pages/Home'
import Error from './pages/Error'
import Apropos from './pages/apropos/index'

import Header from './components/Header/index'
import Footer from './components/Footer'
// Importe les fichiers CSS
import './styles/normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Apropos">
          <Apropos />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>
)
