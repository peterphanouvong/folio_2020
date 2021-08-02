import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import Draggable from "react-draggable";
import gsap from "gsap";

const Window = styled.div`
  background: #c3c3c3;
  border-bottom: 2px solid #021414;
  border-right: 2px solid #021414;
  border-top: 2px solid #f5f5f5;
  border-left: 2px solid #f5f5f5;
  padding: 2px;
  min-width: 300px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #081181;
  color: #fff;
  padding: 3px;
  margin-bottom: 2px;
`;

const XButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #021414;
  border-right: 1px solid #021414;
  border-top: 1px solid #f5f5f5;
  border-left: 1px solid #f5f5f5;
  background: #c3c3c3;
  color: #000;
`;

const WindowContent = styled.div``;

const AboutWindow = ({
  showing,
  content,
  title,
  closeWindow,
  id,
  bringToFront,
  windowNodes,
}) => {
  const [inFront, setInFront] = useState({});
  const [xButtonStyle, setXButtonStyle] = useState({});
  const [xIconStyle, setXIconStyle] = useState({ fontSize: "16px" });
  const [positionX, setPositionX] = useState(
    (Math.random() * (window.innerWidth - 500) - 100).toFixed()
  );
  const [positionY, setPositionY] = useState(
    (Math.random() * (window.innerHeight - 500)).toFixed()
  );

  const onStart = () => {
    setInFront(bringToFront());
  };

  const handleMouseDown = () => {
    setXButtonStyle({
      ...xButtonStyle,
      borderTop: "1px solid #021414",
      borderLeft: "1px solid #021414",
      borderBottom: "1px solid #f5f5f5",
      borderRight: "1px solid #f5f5f5",
      background: "#bbb",
    });
    setXIconStyle({
      fontSize: "16px",
      transform: `translate(1px, 1px)`,
    });
  };

  const handleMouseUp = () => {
    setXButtonStyle({});
    setXIconStyle({ fontSize: "16px" });

    updateLocation();
  };

  const updateLocation = () => {
    const data = windowNodes[id].getBoundingClientRect();
    setPositionX(data.x);
    setPositionY(data.y);
  };

  const handleClose = () => {
    gsap.to(windowNodes[id], {
      duration: 0.2,
      scale: 0,
    });

    setTimeout(() => closeWindow(id), 600);
  };

  return (
    showing && (
      <Draggable onMouseDown={onStart} handle="strong">
        <Window
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            zIndex: inFront,
          }}
          ref={(e) => (windowNodes[id] = e)}
        >
          <strong>
            <TopBar>
              <span className="window-title">{title}</span>
              <XButton
                style={xButtonStyle}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onClick={handleClose}
              >
                <CloseIcon style={xIconStyle} />
              </XButton>
            </TopBar>
          </strong>
          <WindowContent onMouseDown={onStart}>{content}</WindowContent>
        </Window>
      </Draggable>
    )
  );
};

export { AboutWindow };
