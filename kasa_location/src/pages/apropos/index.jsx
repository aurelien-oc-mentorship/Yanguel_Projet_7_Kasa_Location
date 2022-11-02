import React from 'react'
import imgApropos from '../../assets/imageApropos.png'
import '../../styles/aproposPage.css'

function Apropos() {
  return (
    <section>
      <div className="bannerApropos">
        <img src={imgApropos} className="imgBanner" alt="Un paysage" />
      </div>
    </section>
  )
}

export default Apropos
