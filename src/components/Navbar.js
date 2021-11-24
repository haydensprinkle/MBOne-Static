import * as React from "react";
import { Link } from "gatsby";
import { darkCard, linkStyle } from "../styles/global.module.css";
import Icon from "../images/Icon_Alternative.png";

const navStyle = {
  backgroundColor: "#222222",
  position: "sticky",
  top: "0px",
  display: "flex",
  flexDirection: "row-reverse",
  borderRadius: "0",
  zIndex: "10",
};
const ulStyle = {
  marginRight: "10px",
};
const liStyle = {
  display: "inline",
  margin: "0 10px",
};
const navBarLogo = {
  width: "100px",
  position: "absolute",
  left: "5px",
  top: "5px",
};


export const NavBar = () => {
  return (
    <nav style={navStyle} className={darkCard}>
      <Link to="/">
        <img alt="multiplied by one logo"src={Icon} style={navBarLogo} />
      </Link>
      <ul style={ulStyle}>
        {/* Will add Login / Sign Up at a later date
        <li style={liStyle}>Login / Sign Up</li>
        */}
        {/* Will add Reviews at a later date
        <li style={liStyle}>Reviews</li> 
        */}
        <li style={liStyle}>
          <Link className={linkStyle} to="/faq">
            FAQ
          </Link>
        </li>
        <li style={liStyle}>
          <Link className={linkStyle} to="/blog">
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};
