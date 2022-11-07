import { useParams } from 'react-router-dom'
import data from './../../data/data.json'
import Error from '../Error'
function Logement() {
  let { id } = useParams()
  const logement = data.find((elt) => elt.id === id)
  console.log(logement)
  return logement ? (
    <section>
      <div>
        <h1> {logement.title} </h1>
      </div>
    </section>
  ) : (
    <Error />
  )
}

export default Logement
