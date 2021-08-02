import React from "react";

const Button = (props) => {
  return (
    <button {...props} className={`button`}>
      {props.children}
    </button>
  );
};

const CloseAll = ({ closeAboutWindows }) => {
  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Button>Surprise</Button>
      <div style={{ paddingLeft: "1rem" }}></div>
      <Button onClick={closeAboutWindows}>
        <span className="h-underline">C</span>lose all...
      </Button>
    </div>
  );
};

export default CloseAll;
