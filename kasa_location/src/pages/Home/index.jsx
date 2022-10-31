import { useEffect } from 'react'
import data from './../../data/data.json'
import Card from '../../components/Card'

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
      <section>
        {data.map((property, index) => {
          return (
            <Card
              key={index}
              id={property.id}
              image={property.cover}
              title={property.title}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Home
