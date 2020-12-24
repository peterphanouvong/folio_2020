import React from "react"
import styled from "styled-components"

const Window = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: grey;
`

const Popup = ({ closeAboutWindows }) => {
  return (
    <Window>
      <button onClick={closeAboutWindows}>Close</button>
    </Window>
  )
}

export default Popup
