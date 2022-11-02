import '../../styles/errorPage.css'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className="containerError">
      <h1 className="error">404</h1>
      <h2 className="textError">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <p className="linktext">
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </p>
    </div>
  )
}

export default Error
