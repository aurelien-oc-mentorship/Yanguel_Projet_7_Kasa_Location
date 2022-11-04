import React from 'react'
import '../../styles/accordion.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Accordion({ title, content }) {
  const [active, setActive] = useState(false)
  const handleToggle = (e) => {
    setActive(!active)
  }
  return (
    <div className={`accordion ${active && 'active'}`}>
      <div className="accordionTitle" onClick={handleToggle}>
        {title}
        <span className="accordionIcon">
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-chevron-down" />
        </span>
      </div>
      <div className="accordionContent">{content}</div>
    </div>
  )
}
export default Accordion
