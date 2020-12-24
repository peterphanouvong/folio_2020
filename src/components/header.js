import React from "react"
import { Link } from "gatsby"
import Navbar from "./navbar"

const Header = ({ showAboutWindows }) => (
  <header className="header">
    <div className="header-inner">
      <h1>
        Peter is a creative software developer based in Sydney — just a kid who
        likes to code.
      </h1>
      <Navbar showAboutWindows={showAboutWindows} />
    </div>
    {/* <div className="call-to-action">
      <h5>
        <Link to="/contact">Available for freelance work -{">"}</Link>
      </h5>
    </div> */}
  </header>
)

export default Header
