import React from "react"
import { Link } from "gatsby"

const MyLink = ({ setCurrentPage, title, to, active }) => {
  return (
    <div onClick={() => setCurrentPage(title)}>
      {active ? <Link to={to}>*{title}*</Link> : <Link to={to}>{title}</Link>}
    </div>
  )
}

export default MyLink
