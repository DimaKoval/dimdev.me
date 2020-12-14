/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "../../components/header";
import "../base.scss";
import "./index.scss";
import { Sidebar } from "./sibebar/sidebar";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<MainLayoutProps> = ({ children }) => {
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
    <div className="layout">
      <main className="content-area">{children}</main>
      <Sidebar className="sidebar-area" />

      <footer className="footer-area">
        Copyright © {new Date().getFullYear()}, Built with love
      </footer>
    </div>
  );
};

export default Layout;
