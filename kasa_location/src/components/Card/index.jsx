import styles from './Card.module.css'

function Card(props) {
  const { id, image, title } = props
  const bgImg = {
    backgroundImage: `url(${image})`,
  }
  return (
    <a href={`#${id}`}>
      <article style={bgImg} className={styles.card}>
        <p className="titleCard">{title}</p>
      </article>
    </a>
  )
}
export default Card
