import * as React from "react";
import { graphql } from "gatsby";
import SliceZone from "../components/SliceZone";

const vhTitle = {
  display: "flex",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
};
const vhTitleChild = {
  width: "50%",
};

export const VideoHighlight = (slice) => {
  const sliceData = slice.slice;
  console.log("slice: ", sliceData);
  return (
    <section className={"videoHighlight"}>
      <div style={vhTitle}>
        <h3 style={vhTitleChild}>{sliceData.primary.title.text}</h3>
        <p style={vhTitleChild}>{sliceData.primary.description.text}</p>
      </div>
      <iframe
        width="80%"
        height="315"
        src={sliceData.items[0].video_src.url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </section>
  );
};
