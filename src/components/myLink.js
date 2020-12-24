import React from "react"
import { Link } from "gatsby"

const MyLink = ({ setCurrentPage, title, to, active }) => {
  return (
    <div>
      {active ? (
        <Link onClick={() => setCurrentPage(title)} to={to}>
          *{title}*
        </Link>
      ) : (
        <Link onClick={() => setCurrentPage(title)} to={to}>
          {title}
        </Link>
      )}
    </div>
  )
}

export default MyLink
