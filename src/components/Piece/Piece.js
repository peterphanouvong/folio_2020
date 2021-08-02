import React from "react";
import "./Piece.css";

const Piece = ({ title, tagline, link }) => {
  return (
    <div className="piece">
      <h2 className="piece__title">
        <a target="_blank" rel="noreferrer" href={link}>
          {title} ↗
        </a>
      </h2>
      <p className="piece__tagline">{tagline}</p>
    </div>
  );
};

export { Piece };
