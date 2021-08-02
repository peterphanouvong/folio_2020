import React from "react";

import "./index.css";
import SEO from "../components/seo";
import { Piece } from "../components/Piece/Piece";
// import { Playbox } from "../components/PlayBox/Playbox";

const IndexPage = () => (
  <>
    <SEO title="Folio" />
    <span className="label">selected work</span>
    <hr />
    <div className="home">
      <div className="left flex-1">
        <div className="home__selected-work">
          <Piece
            title="AGENCY (Mel River Clone)"
            tagline="web development"
            link="https://amazing-torvalds-1e6281.netlify.app/"
          />
          <Piece
            title="BITSA"
            tagline="web design &amp; development"
            link="https://bitsa.org.au/home"
          />
          <Piece
            title="YZCPhotography"
            tagline="web design &amp; development"
            link="https://hzc-proto.herokuapp.com/"
          />
        </div>
      </div>
      <div className="right flex-1">{/* <Playbox /> */}</div>
    </div>
  </>
);

export default IndexPage;
