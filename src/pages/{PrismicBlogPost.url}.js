import * as React from "react";
import { graphql } from "gatsby";
import { NavBar } from "../components/Navbar";
import { BlogSubscribeBlock } from "../components/BlogSubscribeBlock";
import { pageStyles, darkCardPage } from "../styles/global.module.css";
import SliceZone from "../components/SliceZone";

const PageTemplate = ({ data }) => {
  if (!data) return null;
  return (
    <main className={pageStyles}>
      <NavBar />
      <div className={darkCardPage}>
        <h2>{data.prismicBlogPost.data.blog_post_title.text}</h2>
        <p>{data.prismicBlogPost.data.blog_post_body.text}</p>
        <SliceZone sliceZone={data.prismicBlogPost.data.body} />
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
        body {
          ... on PrismicBlogPostDataBodyVideoHighlights {
            items {
              video_src {
                url
              }
              video_title {
                text
              }
            }
            primary {
              description {
                text
              }
              eyebrow_headline {
                text
              }
              title {
                text
              }
            }
            slice_type
          }
        }
      }
    }
  }
`;

export default PageTemplate;
