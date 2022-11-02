import React from 'react'
import imgApropos from '../../assets/imageApropos.png'
import '../../styles/aproposPage.css'
import Vectordown from '../../assets/Vectordown.png'
function Apropos() {
  return (
    <section className="containerApropos">
      <div className="bannerApropos">
        <img src={imgApropos} className="imgBanner" alt="Un paysage" />
      </div>

      <div className="listeApropos">
        <div className="fiabilite">
          <p className="textFiabilite"> Fiabilité </p>
          <img
            src={Vectordown}
            className="Vectordown"
            alt="fleche vers le bas"
          ></img>
        </div>
        <div className="respect">
          <p className="textRespect">Respect </p>
          <img
            src={Vectordown}
            className="Vectordown"
            alt="fleche vers le bas"
          ></img>
        </div>
        <div className="service">
          <p className="textService"> Service </p>
          <img
            src={Vectordown}
            className="Vectordown"
            alt="fleche vers le bas"
          ></img>
        </div>
        <div className="responsabilite">
          <p className="textResponsabilite"> Responsabilité </p>
          <img
            src={Vectordown}
            className="Vectordown"
            alt="fleche vers le bas"
          ></img>
        </div>
      </div>
    </section>
  )
}

export default Apropos
