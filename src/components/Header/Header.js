import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import "./Header.css";

const FakeLink = styled.h4``;

const Navbar = ({ showAboutWindows }) => {
  const pathname = window.location.pathname;

  const homeClassName = `navbar__link ${
    pathname === "/" ? "navbar__link--active" : ""
  }`;

  const contactClassName = `navbar__link ${
    pathname === "/contact" ? "navbar__link--active" : ""
  }`;

  return (
    <ul className="navbar">
      <li>
        <Link className={homeClassName} to="/">
          Home
        </Link>
      </li>
      <li>
        <FakeLink className="navbar__link" onClick={showAboutWindows}>
          About
        </FakeLink>
      </li>
      <li>
        <Link className={contactClassName} to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
};

const Header = ({ showAboutWindows }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__banner-text">
          Peter is a creative web developer based in Sydney - let's make
          something!
        </h1>
        <div className="header__navbar-wrapper">
          <Navbar showAboutWindows={showAboutWindows} />
        </div>
      </div>
    </header>
  );
};

export { Header };
