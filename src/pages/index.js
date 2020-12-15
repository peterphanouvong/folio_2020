import React from "react"
import { Link } from "gatsby"
import "./index.scss"

import Image from "../components/image"
import SEO from "../components/seo"
import Piece from "../components/piece"

const IndexPage = () => (
  <>
    <SEO title="Folio" />
    <div className="index">
      <h4>Selected work</h4>
      <div className="selected-work">
        <Piece
          title="Westside Volleyball Club"
          tagline="Web design & development"
          link="https://www.westsidevolleyballclub.com/"
        />
        <Piece
          title="BITSA"
          tagline="Web design & development"
          link="https://bitsa.org.au/home"
        />
        <Piece
          title="Smart Brain"
          tagline="Web design & development"
          link="https://smart-brain-phanouvong.herokuapp.com/"
        />
      </div>
    </div>
  </>
)

export default IndexPage
