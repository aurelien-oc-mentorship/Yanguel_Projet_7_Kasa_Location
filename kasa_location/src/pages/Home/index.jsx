import { useEffect } from 'react'
import data from './../../data/data.json'
import Card from '../../components/Card'

function Home() {
  useEffect(() => {
    console.log(data)
  })
  return (
    <div className="App">
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
