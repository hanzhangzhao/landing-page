import React from "react";
import ReactPlayer from "react-player";
// import "../responsive-player.css";

const ResponsivePlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        className="react-player"
        width="100%"
        height="100%"
        controls={true}
        // config={{
        //   youtube: {
        //     playerVars: { showinfo: 1 }
        //   },
        //   facebook: {
        //     appId: "12345"
        //   }
        // }}
      />
    </div>
  );
};

export default ResponsivePlayer;
