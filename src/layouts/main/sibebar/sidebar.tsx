import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./sidebar.scss";

// @ts-ignore
import signature from "../../../images/Signature.svg";

export interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <nav className={className}>
      <div className="header--nav">
        <div className="logo">
          <img src={signature} alt="Dima Koval's signature" />
        </div>
        <h1>Dmytro Koval</h1>
        <span>Software Engineer</span>
      </div>
      <ul className="nav-items">
        <li className="nav-container disabled">
          <a className="nav-text">ITnizier</a>
        </li>
        <li className="nav-container disabled">
          <a className="nav-text">Portfolio</a>
        </li>
        <li className="nav-container disabled">
          <a className="nav-text">CV</a>
        </li>
        <li className="nav-container">
          <a className="nav-text">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
