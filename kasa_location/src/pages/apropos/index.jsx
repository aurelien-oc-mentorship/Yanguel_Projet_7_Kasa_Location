import React from 'react'
import imgApropos from '../../assets/imageApropos.png'
import '../../styles/aproposPage.css'
import useCollapse from 'react-collapsed'
import Accordion from '../../components/accordion'
import '../../styles/accordion.css'
// import Vectordown from '../../assets/Vectordown.png'
function Apropos() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <section className="containerApropos">
      <div className="bannerApropos">
        <img src={imgApropos} className="imgBanner" alt="Un paysage" />
      </div>
      <div className="App">
        <div className="accordions">
          <Accordion title="titre1" content="contenu1" />
          <Accordion title="titre2" content="contenu2" />
          <Accordion title="titre3" content="contenu3" />
          <Accordion title="titre4" content="contenu4" />
        </div>
      </div>
      <div className="collapsible">
        <div className="header" {...getToggleProps({})}>
          {isExpanded ? 'Fiabilité' : 'Fiabilité'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br />
            <br />
            Click again to hide...
          </div>
        </div>
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Respect' : 'Respect'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </div>
        </div>
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Service' : 'Service'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br />
            <br />
            Click again to hide...
          </div>
        </div>
        <div className="header" {...getToggleProps()}>
          {isExpanded ? 'Responsabilité' : 'Responsabilité'}
        </div>
        <div {...getCollapseProps()}>
          <div className="content">
            Now you can see the hidden content. <br />
            <br />
            Click again to hide...
          </div>
        </div>
      </div>
      {/*<div className="listeApropos">
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
  </div> */}
    </section>
  )
}

export default Apropos
