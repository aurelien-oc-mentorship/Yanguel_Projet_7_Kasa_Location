import { useParams } from 'react-router-dom'
import data from './../../data/data.json'
import Error from '../Error'
import '../../styles/normalize.css'
import '../../styles/logement.css'
import Accordion from '../../components/accordion'
import '../../styles/accordion.css'
;<script
  src="https://kit.fontawesome.com/e4ab2d9fc1.js"
  crossorigin="anonymous"
></script>
function Logement() {
  // Je récupere l'id dans l'URL
  let { id } = useParams()
  // Cette variable me permet de chercher un élement lié à l'id utilisé dans le format json.
  const logement = data.find((elt) => elt.id === id)

  //
  let images = [logement.pictures]

  let etape = 0
  let precedent = document.querySelector('#precedent')
  let suivant = document.querySelector('#suivant')
  let nbr_image = images.length
  function enleverActiveImages() {
    for (let i = 0; i < nbr_image; i++) {
      images[i].classList.remove('active')
    }
  }
  function auClick(suivant) {
    etape++
    enleverActiveImages()
    images[etape].classList.add('active')
  }
  //

  return logement ? (
    <section>
      <div className="bannerLogement">
        <img
          src={logement.pictures[1]}
          alt={`Logement ${logement.title}`}
          className="picturesLogement active"
        ></img>
        <img
          src={logement.pictures[2]}
          alt={`Logement ${logement.title}`}
          className="picturesLogement"
        ></img>
        <img
          src={logement.pictures[3]}
          alt={`Logement ${logement.title}`}
          className="picturesLogement"
        ></img>
        <div id="precedent" className="vector" onClick={() => auClick()}>
          <i class="fa-sharp fa-solid fa-chevron-left"></i>
        </div>
        <div id="suivant" className="vector">
          <i class="fa-sharp fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="titleAndHost">
        <div className="titleAndLocation">
          <h1> {logement.title} </h1>
          <p>{logement.location}</p>
          <ul className="tags">
            {/* Création d'un li pour chaque tags */}
            {logement.tags.map((li, element) => (
              <li key={element + id} className="liTags">
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="divHost">
          {' '}
          {logement.host.name}{' '}
          <img
            src={logement.host.picture}
            alt="Portrait de l'hote"
            className="portraitHote"
          ></img>
        </div>
      </div>
      <div className="centerAccordions">
        <div className="accordions accordionsLogement">
          <div className="accordionDescription">
            <Accordion title="Description" content={logement.description} />
          </div>
          <div className="accordionEquipement">
            <Accordion
              title="Equipement"
              content={
                <ul className="equipementAccordion">
                  {/* Création d'un li pour chaque "equipments"*/}
                  {logement.equipments.map((li, element) => (
                    <li key={element + id}>{li}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <Error />
  )
}

export default Logement
