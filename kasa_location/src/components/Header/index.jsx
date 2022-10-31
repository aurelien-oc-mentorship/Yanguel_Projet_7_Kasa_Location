import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
  ;<header className="App-header">
    <img src={Logo} className="App-logo" alt="logo" />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/apropos">A Propos</Link>
    </nav>
  </header>
}
export default Header
