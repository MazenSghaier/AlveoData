import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {  Typography } from "@mui/material";
import { RiPantoneLine } from "react-icons/ri";

import youTube from '../../assests/Social_media/youtube.png';
import twitter from '../../assests/Social_media/twitter.png';
import facebook from '../../assests/Social_media/facebook.png';
import linkedin from '../../assests/Social_media/linkedin.png';
import instagram from '../../assests/Social_media/instagram.png';

const footerQuickLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About US",
    url: "/about",
  },
  {
    display: "Courses",
    url: "/content",
  },
  {
    display: "Blog",
    url: "#",
  },
];

const footerInfoLinks = [
  {
    display: "Privacy Policy",
    url: "#",
  },
  {
    display: "Membership",
    url: "#",
  },
  {
    display: "Purchases Guide",
    url: "#",
  },
  {
    display: "Terms of Service",
    url: "#",
  },
];

const Footer = () => {
  return (
    <footer className="footer" style={{ display:'flex', alignContent:'center', justifyContent:'center'}}>
      <Container>
      <Row className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 p-3"> 
          <Col lg="3" md="6" className="mb-4">
            <Typography variant="h5" className="flex items-center ">
              <RiPantoneLine className="text-xl animate-slideFromBottom" />
              <span className="animate__animated animate__slideInRight">Learners.</span>
            </Typography>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="font-medium text-cyan-400">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a className="hover:text-cyan-400" href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="font-medium text-cyan-400">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a className="hover:text-cyan-400 " href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="font-medium text-cyan-400">Get in Touch</h6>
            <p className="">Address: Sylhet, Bangladesh</p>
            <p>Phone: +88 0123456789</p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>

         
        <Row className="justify-center items-center mt-4">
          <Col lg="12" md="12" className="mb-4 text-center">
            <div className="flex flex-col space-y-4 mx-auto">
              <h6 className="font-medium text-sm">Follow us on Social Media</h6>
              <div className="flex justify-center space-x-4">
                <a href="/">
                  <img alt="" src={facebook} className="w-15 h-15" />
                </a>
                <a href="/">
                  <img alt="" src={youTube} className="w-15 h-15" />
                </a>
                <a href="/">
                  <img alt="" src={twitter} className="w-15 h-15" />
                </a>
                <a href="/">
                  <img alt="" src={linkedin} className="w-15 h-15" />
                </a>
                <a href="/">
                  <img alt="" src={instagram} className="w-15 h-15" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
