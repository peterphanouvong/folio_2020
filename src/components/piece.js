import React from "react"

const Piece = ({ title, tagline, link }) => {
  return (
    <div className="piece">
      <h2>
        <a target="_blank" href={link}>
          {title} ↗
        </a>
      </h2>
      <p>{tagline}</p>
    </div>
  )
}

export default Piece
