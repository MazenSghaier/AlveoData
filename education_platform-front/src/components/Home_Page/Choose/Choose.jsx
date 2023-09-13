import React, { useRef, useEffect, useState } from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import ReactPlayer from "react-player";
import chooseImg from "../../../assests/images/why-choose-us.png";
import "./Choose.css"; // Add your CSS file for animations

const Choose = () =>{
  const imageRef = useRef(null); // Specify the type of the ref
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const elementTop = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop - windowHeight + 100 < 0) {
          imageRef.current.classList.add("animate-your-animation-class");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section>
      <Container>
        <Grid container spacing={2}>
          {/* Column 1 */}
          <Grid item lg={6} md={6}>
            <div className="choose__content" ref={imageRef}>
              <h2 className="animated-title italic  lg:text-4xl font-semibold p-6 text-sky-500" >
                Why Choose Us
              </h2>
              <Typography variant="body1" className="non-italic lg:text-base font-medium text-black">
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
          <Grid item lg={6} md={6} >
            <div className="choose__img relative">
              {shouldAnimate ? (
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

              {!shouldAnimate && (
                <div className="play__icon 
                    absolute top-1/2 left-1/2 
                    transform -translate-x-1/2 
                    -translate-y-1/2
                    bg-white rounded-full 
                    w-12 h-12 flex items-center 
                    justify-center cursor-pointer"
                >
                  <IconButton
                    onClick={() => setShouldAnimate(!shouldAnimate)}
                  >
                    <PlayCircleOutline style={{ color: "#35bbe3" }} fontSize="large" />
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

export default Choose;
