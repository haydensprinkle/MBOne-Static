import * as React from "react";
import {
  pageStyles,
  darkCard,
  linkStyle,
  titleOne,
} from "../styles/global.module.css";
import { NavBar } from "../components/Navbar";
import { Link } from "gatsby";

//page styles
const aboutText = {
  textAlign: "center",
  color: "white",
  padding: "12px",
  minWidth: 300,
  maxWidth: 500,
};
const preview = {
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  width: 500,
};
const hero = {
  gridColumn: "span 2",
  margin: "5% 15%",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
};
const homeWrapper = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexWrap: "wrap",
  color: "white",
};

const IndexPage = () => {
  return (
    <main className={pageStyles}>
      <NavBar />
      <title>Home Page</title>
      <div style={hero}>
        <div className={darkCard}>
          <h1>
            Multiplied By <span id={titleOne}>One</span>
          </h1>
          <h2>
            Assisting Communication in Dissociative Identity Disorder Systems
          </h2>
        </div>
      </div>
      <div style={homeWrapper}>
        <div style={aboutText}>
          <p>
            With our minds made of many minds, Multiplied By One is a place to
            get to know your system, connect, find solutions and inner
            understanding. This app is yours; customizable to each Headmate.
          </p>
          <p>
            The Dissociative Identity Disorder, or OSDD community finally has an
            app. Let’s make it “home.”
          </p>
          <strong>Free to use and without ads</strong>
          <p>Find Us On</p>
          <p>
            <Link
              className={linkStyle}
              to="https://www.facebook.com/MultipliedByOne"
            >
              Facebook
            </Link>
            {" - "}
            <Link
              className={linkStyle}
              to="https://twitter.com/HeadmateStation"
            >
              Twitter
            </Link>
            {" - "}
            <Link
              className={linkStyle}
              to="https://www.instagram.com/multipliedbyone/"
            >
              Instagram
            </Link>
            {" - "}
            <Link
              className={linkStyle}
              to="https://www.linkedin.com/company/multipliedbyone/"
            >
              LinkedIn
            </Link>
          </p>
          <p>
            Subscribe to the{" "}
            <Link className={linkStyle} to="/blog">
              Blog!
            </Link>
          </p>
          {/*<Link>Contact Us</Link>*/}
          {/* Share this page */}
          <p>@2021 MultipliedByOne "All Rights Reserved"</p>
        </div>
        <div style={preview}>
          <p>Preview Video</p>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/vkT9cAJbPeg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
