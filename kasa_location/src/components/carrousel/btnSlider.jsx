import React from 'react'
import '../../styles/carrousel.css'
import leftArrow from '../../assets/vectorleft.png'
import rightArrow from '../../assets/vectorright.png'

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <div
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <img
        className="arrow"
        src={direction === 'next' ? rightArrow : leftArrow}
        alt="arrow"
      ></img>
    </div>
  )
}
