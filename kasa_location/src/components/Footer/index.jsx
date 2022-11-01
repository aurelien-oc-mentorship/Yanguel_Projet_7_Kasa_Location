import logoKasaWhite from '../../assets/logoWhite.png'
import '../../styles/footer.css'
function Footer() {
  return (
    <footer>
      <div className="imgEtText">
        <img
          src={logoKasaWhite}
          className="logoKasaWhite"
          alt="logo Kasa Location"
        />
        <p className="rightReserved"> © 2020 Kasa. All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer
