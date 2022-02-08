// SliceZone.js file

import * as React from "react";
import { VideoHighlight } from "../slices/VideoHighlight";

const SliceZone = ({ sliceZone }) => {
  console.log("here is SliceZone's prop", sliceZone);
  const sliceComponents = {
    video_highlights: VideoHighlight,
  };

  const SliceZoneContent = () => {
    return sliceZone.map((slice, index) => {
      const SliceComponent = sliceComponents[slice.slice_type];
      if (SliceComponent) {
        return <SliceComponent slice={slice} key={`slice-${index}`} />;
      }
      return null;
    });
  };
  return (
    <main className="container">
      <SliceZoneContent />
    </main>
  );
};

export default SliceZone;
