import { useEffect } from 'react'
import data from './../../data/data.json'
import Card from '../../components/Card'
import imgHome from '../../assets/imageHome.png'
import '../../styles/homePage.css'

function Home() {
  useEffect(() => {
    console.log(data)
  })
  return (
    <div className="App">
      <section className="bannerImg">
        <img src={imgHome} className="imgHome" alt="Un paysage" />
        <h1 className="textImg">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="cards">
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
