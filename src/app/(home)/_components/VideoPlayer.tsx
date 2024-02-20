import React from "react";

interface VideoPlayerProps {
  videoEnd: Function;
}

const VideoPlayer = ({ videoEnd }: VideoPlayerProps) => {
  return (
    <div className="absolute h-screen w-screen top-0 overflow-hidden z-10">
      <video
        onEnded={() => videoEnd()}
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ objectFit: "cover" }}
      >
        <source src="/vide_second_timer.mp4" type="video/mp4" />
        Desculpe, seu navegador não suporta vídeos HTML5.
      </video>
    </div>
  );
};

export default VideoPlayer;
