import React from 'react'
import '../../styles/accordion.css'
import { useState } from 'react'
;<script
  src="https://kit.fontawesome.com/e4ab2d9fc1.js"
  crossorigin="anonymous"
></script>
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
          <i className="fa-sharp fa-solid fa-chevron-down fa-lg "></i>
        </span>
      </div>
      <div className="accordionContent logementheight">{content}</div>
    </div>
  )
}
export default Accordion
