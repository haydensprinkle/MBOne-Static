// SliceZone.js file

import * as React from "react";
import { VideoHighlight } from "../slices/VideoHighlight";

const SliceZone = ({ sliceZone }) => {
  const sliceComponents = {
    video_highlights: VideoHighlight,
  };

  const sliceZoneContent = sliceZone.map((slice, index) => {
    console.log(slice);
    const SliceComponent = sliceComponents[slice.slice_type];
    if (SliceComponent) {
      return <SliceComponent slice={slice} key={`slice-${index}`} />;
    }
    return null;
  });

  return <main className="container">hello</main>;
};

export default SliceZone;
