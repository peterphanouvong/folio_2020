import React, { useState, useEffect, useHistory } from "react"
import MyLink from "./myLink"

const Navbar = ({ showAboutWindows }) => {
  const history = useHistory()
  const [currentPage, setCurrentPage] = useState("HOME")
  useEffect(() => {
    if (history.location.pathname === "/contact") {
      setCurrentPage("CONTACT")
    }
  }, [history.location.pathname])
  return (
    <>
      <ul>
        <li>
          <h4>
            <MyLink
              setCurrentPage={setCurrentPage}
              title="HOME"
              to="/"
              active={currentPage == "HOME"}
            />
          </h4>
        </li>
        <li>
          <h4 onClick={showAboutWindows}>
            <MyLink
              setCurrentPage={setCurrentPage}
              title="ABOUT"
              to={currentPage == "HOME" ? "/" : "/contact"}
              active={currentPage == "ABOUT"}
            />
          </h4>
        </li>
        <li>
          <h4>
            <MyLink
              setCurrentPage={setCurrentPage}
              title="CONTACT"
              to="/contact"
              active={currentPage == "CONTACT"}
            />
          </h4>
        </li>
      </ul>
    </>
  )
}

export default Navbar
