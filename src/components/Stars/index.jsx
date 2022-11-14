import React from 'react'
import Star from '../../assets/Star.png'
import StarEmpty from '../../assets/StarEmpty.png'

function Rate({ logement }) {
  const arrayRating = [1, 2, 3, 4, 5]
  return (
    <div className="stars">
      {arrayRating.map((ratingElem) =>
        logement >= ratingElem ? (
          <img src={Star} key={ratingElem.toString()} alt="étoile rempli" />
        ) : (
          <img src={StarEmpty} key={ratingElem.toString()} alt="étoile vide" />
        )
      )}
    </div>
  )
}

export default Rate
