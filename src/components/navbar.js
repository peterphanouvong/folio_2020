import React, { useState, useEffect } from "react"
import MyLink from "./myLink"

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState("HOME")
  useEffect(() => {
    if (window.location.pathname === "/contact") {
      setCurrentPage("CONTACT")
    }
  }, [window.location.pathname])
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
          <h4>
            <MyLink
              setCurrentPage={setCurrentPage}
              title="ABOUT"
              to="/about"
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
