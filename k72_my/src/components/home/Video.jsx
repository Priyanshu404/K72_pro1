import React from "react";

const Video = () => {
  return(
  <div className="h-full w-full">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        src="/video.m4v"
        onError={(e) => console.error("Video failed to load:", e)}
      />
    </div>
  );
};
export default Video;