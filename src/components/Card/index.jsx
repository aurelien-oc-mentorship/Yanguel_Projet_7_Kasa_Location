import styles from './Card.module.css'
function Card(props) {
  const { id, image, title } = props
  return (
    <a
      href={`http://localhost:3000/fiche_logement/${id}`}
      className="photoLogement"
    >
      <article
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), 
                            url(${image})`,
        }}
        className={styles.card}
      >
        <p className="titleCard">{title}</p>
      </article>

      {/* AUTRE POSSIBILITE */}
      {/*<section className={styles.card}>
        <img
          src={`${image}`}
          alt="Cover du logement"
          className="photoCover"
  ></img>*/}
      {/* <p className="titleCard">{title}</p>
      </section>
        */}
    </a>
  )
}
export default Card
