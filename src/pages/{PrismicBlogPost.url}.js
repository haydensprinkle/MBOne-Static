import * as React from "react";
import { graphql } from "gatsby";
import { NavBar } from "../components/Navbar";
import { BlogSubscribeBlock } from "../components/BlogSubscribeBlock";
import { pageStyles, darkCardPage } from "../styles/global.module.css";

const PageTemplate = ({ data }) => {
  if (!data) return null;
  return (
    <main className={pageStyles}>
      <NavBar />
      <div className={darkCardPage}>
        <h2>{data.prismicBlogPost.data.blog_post_title.text}</h2>
        <p>{data.prismicBlogPost.data.blog_post_body.text}</p>
        {/*<BlogSubscribeBlock />*/}
      </div>
    </main>
  );
};

export const query = graphql`
  query PageQuery($id: String) {
    prismicBlogPost(id: { eq: $id }) {
      data {
        blog_post_body {
          text
        }
        blog_post_title {
          text
        }
      }
    }
  }
`;

export default PageTemplate;
