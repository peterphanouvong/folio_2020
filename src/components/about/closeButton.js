import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8rem;
  right: 25rem;
  background: white;
  border: 2px solid black;
  padding: 0.7rem 1.4rem;
  -webkit-box-shadow: 7px 7px 0px 0px #000000;
  box-shadow: 7px 7px 0px 0px #000000;
  cursor: pointer;

  &:active {
    outline: none;
  }
`;

const CloseButton = ({ closeAboutWindows }) => {
  return (
    <Button onClick={closeAboutWindows}>
      CLOSE ALL <CloseIcon fontSize="small" />
    </Button>
  );
};

export default CloseButton;
