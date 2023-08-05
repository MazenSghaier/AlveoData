import React from "react";
import { Container, Grid, Typography, Box  } from "@mui/material";
import { RiVimeoLine, RiPinterestLine, RiDribbbleLine, RiAppleFill, RiFinderFill, RiGoogleFill } from "react-icons/ri";

const Company: React.FC = () => {
  return (
    <section>
      <Container>
      <Box border="1px solid #26C6DA" p={2} borderRadius={4}  padding={4}>
        <Grid container spacing={2}> {/* Adjust spacing to reduce space */}
            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h5" component="h3" className="flex items-center space-x-1">
                <RiVimeoLine style={{ color: "#26C6DA" }}  />
                Vimeo
              </Typography>
            </Grid>

            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h5" component="h3" className="flex items-center space-x-1">
                <RiPinterestLine style={{ color: "#26C6DA" }}  />
                Pinterest
              </Typography>
            </Grid>

            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h5" component="h3" className="flex items-center space-x-1">
                <RiDribbbleLine style={{ color: "#26C6DA" }}/>
                Dribbble
              </Typography>
            </Grid>

            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h5" component="h3" className="flex items-center space-x-1">
                <RiAppleFill style={{ color: "#26C6DA" }}/>
                Apple
              </Typography>
            </Grid>

            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h5" component="h3" className="flex items-center space-x-1">
                <RiFinderFill style={{ color: "#26C6DA" }}/>
                Finder
              </Typography>
            </Grid>

            <Grid item lg={2} md={3} sm={4} xs={6}>
              <Typography variant="h6" component="h3" className="flex items-center space-x-1">
                <RiGoogleFill style={{ color: "#26C6DA" }}/>
                Google
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Company;
