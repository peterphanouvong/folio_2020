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
      <p style={{ textTransform: "uppercase", fontWeight: 100 }}>
        Selected work
      </p>
      <div className="selected-work">
        <Piece
          title="AGENCY (Mel River Clone)"
          tagline="Web development"
          link="https://amazing-torvalds-1e6281.netlify.app/"
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
