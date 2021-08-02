/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import { Header } from "./Header/Header";
import { AboutWindows } from "./AboutWindows/AboutWindows";

const Layout = ({ children }) => {
  const [windowsActive, setWindowsActive] = useState(false);

  const showAboutWindows = () => {
    setWindowsActive(true);
  };

  const closeAboutWindows = () => {
    setWindowsActive(false);
  };

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container" id={data.title}>
      <Header showAboutWindows={showAboutWindows} />
      <div>
        {windowsActive && (
          <AboutWindows closeAboutWindows={closeAboutWindows} />
        )}
        <main>{children}</main>
        <hr />
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
