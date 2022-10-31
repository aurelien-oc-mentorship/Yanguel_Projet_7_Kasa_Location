import { useEffect } from 'react'
import data from './../../data/data.json'

function Home() {
  useEffect(() => {
    console.log(data)
  })
  return (
    <div className="App">
      <header className="App-header">
        {
          //<img src={logo} className="App-logo" alt="logo" />
        }
        <p>ICI C'est la page d'acceuil </p>
      </header>
    </div>
  )
}

export default Home
