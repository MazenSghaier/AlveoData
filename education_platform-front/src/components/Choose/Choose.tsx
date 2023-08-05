import React, { useState } from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import ReactPlayer from "react-player";
import chooseImg from "../../assests/images/why-choose-us.png";

const ChooseUs: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section>
      <Container>
        <Grid container spacing={2}>
          {/* Column 1 */}
          <Grid item lg={6} md={6}>
            <div className="choose__content">
              <Typography variant="h2">Why Choose Us</Typography>
              <Typography variant="body1">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </Typography>
            </div>
          </Grid>

          {/* Column 2 */}
          <Grid item lg={6} md={6}>
            <div className="choose__img relative">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=qFp27TR4Yew"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img
                  src={chooseImg}
                  alt=""
                  className="w-full rounded-lg object-cover"
                />
              )}

              {!showVideo && (
                <div className="play__icon absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                  <IconButton
                    onClick={() => setShowVideo(!showVideo)}
                    style={{ color: "#17bf9e" }}
                  >
                    <PlayCircleOutline fontSize="large" />
                  </IconButton>
                </div>
              )}
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ChooseUs;
