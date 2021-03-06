import React, { useState, useEffect } from "react"
import MyLink from "./myLink"

const Navbar = ({ showAboutWindows }) => {
  const [currentPage, setCurrentPage] = useState("HOME")
  // useEffect(() => {
  //   const checkPath = () => {
  //     const path = typeof window !== "undefined" ? window.location.path : ""
  //     if (path === "/contact") {
  //       setCurrentPage("CONTACT")
  //     }
  //   }
  //   checkPath()
  // }, [window])
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
