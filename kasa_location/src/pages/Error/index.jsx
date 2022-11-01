import LogoError from '../../assets/logoError.png'
import '../../styles/errorPage.css'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <div className="containerError">
      <img
        src={LogoError}
        className="logoError"
        alt="Erreur 404, la page n'existe pas."
      />
      <h1 className="textError">
        Oups! La page que vous demandez n'existe pas.
      </h1>
      <p className="linktext">
        <Link to="/">Retourner sur la page d'acceuil</Link>
      </p>
    </div>
  )
}

export default Error
