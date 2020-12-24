import React, { useState, useEffect } from "react"
import Bloop from "../bloop"
import AboutMe from "./aboutMe"
import AboutWindow from "./aboutWindow"
import CloseButton from "./closeButton"
import MyAlarm from "./myAlarm"
import PicOfMe from "./picOfMe"
import gsap from "gsap"

const AboutWindows = ({ closeAboutWindows }) => {
  const [windowContents, setWindowContents] = useState([
    { title: "alarm.mov", content: <MyAlarm />, showing: true },
    { title: "me.jpg", content: <PicOfMe />, showing: true },
    { title: "bloop.jpg", content: <Bloop />, showing: true },
    { title: "README.md", content: <AboutMe />, showing: true },
  ])
  const [counter, setCounter] = useState(1)

  const bringToFront = () => {
    setCounter(counter + 1)
    return counter
  }

  const closeWindow = index => {
    const newWindowContents = windowContents.map((window, i) => {
      if (i === parseInt(index)) {
        return {
          ...window,
          showing: false,
        }
      }
      return window
    })
    setWindowContents(newWindowContents)
  }

  const windowNodes = []

  const closeWindowsGSAP = () => {
    gsap.to(windowNodes, {
      duration: 0.2,
      stagger: 0.1,
      scale: 0,
    })
    setTimeout(() => closeAboutWindows(), 500)
  }

  useEffect(() => {
    gsap.from(windowNodes, {
      duration: 0.6,
      stagger: 0.15,
      y: 500,
      transform: "scale(0,0)",
    })
  }, [])

  return (
    <div>
      <CloseButton closeAboutWindows={closeWindowsGSAP} />
      {windowContents.map((windowContent, i) => {
        return (
          <AboutWindow
            showing={windowContent.showing}
            key={i}
            id={i}
            title={windowContent.title}
            content={windowContent.content}
            closeWindow={closeWindow}
            bringToFront={bringToFront}
            windowNodes={windowNodes}
          />
        )
      })}
    </div>
  )
}

export default AboutWindows
