import { Link } from "gatsby";
import PropTypes, { InferProps } from "prop-types";
import React from "react";

export interface HeaderProps {
  className: string;
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ className, siteTitle }) => (
  <header className={className} style={{ background: `rebeccapurple` }}>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
