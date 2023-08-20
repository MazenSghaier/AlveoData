import React, { useState, useEffect } from "react";
import { Container, Grid, IconButton } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import ReactPlayer from "react-player";
import chooseImg from "../../../assests/images/graphics-design.png";
import "./OutPlat.css"

const OutPlat: React.FC = () => {
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
                      src={chooseImg}
                      alt=""
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="play-icon-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <IconButton
                      onClick={() => setShowVideo(true)}
                      style={{ color: "#35bbe3", backgroundColor: "rgba(255, 255, 255, 0.8)" }}
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

export default OutPlat;
