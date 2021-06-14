import { createRef, useEffect, useState } from "react";
import YouTube, { Options } from "react-youtube";

const StreamPreview = () => {
  const [videoheight, setVideoHeight] = useState(300)
  const youtubeRef = createRef<HTMLDivElement>()

  const streams = [
    { videoId: "gfCTcyOEExU" },
    { videoId: "gfCTcyOEExU" },
    { videoId: "gfCTcyOEExU" },
    { videoId: "gfCTcyOEExU" },
  ];

  useEffect(() => {
    setVideoHeight(youtubeRef.current?.offsetHeight ?? 0);
  }, [youtubeRef])



  const playerOpts: Options = {
    width: '100%',
    height: videoheight-10+'',
    playerVars: {autoplay: 1, mute: 1, controls: 0, showinfo: 0, modestbranding:1}
  };

  return (
    <div className="d-flex flex-wrap h-100">
      {streams && streams.map((stream,i) => 
        <div key={i} ref={youtubeRef} className="canvas-wrapper-grid">
          <YouTube videoId={stream.videoId} opts={playerOpts}></YouTube>
        </div>  
      )}
    </div>
  )
}

export default  StreamPreview