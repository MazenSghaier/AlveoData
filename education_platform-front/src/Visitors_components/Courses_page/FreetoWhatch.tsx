import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Container, Grid, IconButton } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import ReactPlayer from "react-player";
import "../About_Page/Our_Plat/OutPlat.css"


interface FreetoWatchProps {
  item: {
    imageUrl: string;
    label: string;
    button: string;
  };
}

const FreetoWatch: React.FC<FreetoWatchProps> =(props) => {
  
  const { item } = props;

  const [showVideo, setShowVideo] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);

  useEffect(() => {
    // Trigger the image animation when the component mounts
    setAnimateImage(true);
  }, []);

  return (
    <section className="video-section">
      <Container>
        <Grid container justifyContent="center">
          {/* Column */}
          <div className="text-center relative mb-2">
            <h2 className="italic mb:4 lg:text-3xl font-semibold text-sky-500">{item.label}</h2>
          </div>
          <Grid item xs={12}>
            <div className={`video-container relative ${animateImage ? "animate-image" : ""}`}>
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=v2X51AVgl3o"
                  controls
                  width="100%"
                  height="500px"
                />
              ) : (
                <div className="image-container">
                  <div className="centered-image">
                    <img
                      src={item.imageUrl}
                      alt=""
                      className="rounded-3xl"
                      style={{ width: "800px", height: "500px" }} 
                    />
                  </div>
                  <div className="play-icon-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <IconButton
                      onClick={() => setShowVideo(true)}
                      className="btn btn-white btn-animate"
                    >
                      <PlayCircleOutline fontSize="large" />
                    </IconButton>
                  </div>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FreetoWatch;
