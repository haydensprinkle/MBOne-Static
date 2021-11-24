import * as React from "react";
import { NavBar } from "../components/Navbar";
import { BlogSubscribeBlock } from "../components/BlogSubscribeBlock";
import {
  darkCardPage,
  lightCard,
  pageStyles,
  linkStyle,
} from "../styles/global.module.css";
import { graphql, useStaticQuery, Link } from "gatsby";

const blogWrapper = {
  width: "85vw",
  maxWidth: 976,
  margin: "0 auto",
  borderRadius: "0px 0px inherit inherit",
  textAlign: "center",
  padding: "20px",
  justifyItems: "center",
};
const blogPostSection = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  margin: "auto",
  width: "85%",
  paddingBottom: "12px",
};
const blogPostCard = {
  width: "40%",
  height: 150,
  marginTop: 12,
};

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allPrismicBlogPost {
        nodes {
          uid
          data {
            blog_post_title {
              text
            }
            blog_post_description {
              text
            }
          }
        }
      }
    }
  `);
  console.log(data);
  const blogPosts = data.allPrismicBlogPost.nodes;
  return (
    <main className={pageStyles}>
      <NavBar />
      <div className={darkCardPage} style={blogWrapper}>
        <h2>The Multiplied By One Blog</h2>
        <h4>
          This Blog is where you will find updates to features, as well as
          tutorials on how the app functions
        </h4>
        <div style={blogPostSection}>
          {blogPosts.map((data, index) => (
            <div
              className={lightCard}
              style={blogPostCard}
              key={"blogPostCard" + index}
            >
              <Link className={linkStyle} to={`/blog/${data.uid}`}>
                <h4>{data.data.blog_post_title.text}</h4>
                <p>{data.data.blog_post_description.text}</p>
              </Link>
            </div>
          ))}
        </div>
        {/*<BlogSubscribeBlock />*/}
      </div>
    </main>
  );
};

export default Blog;
