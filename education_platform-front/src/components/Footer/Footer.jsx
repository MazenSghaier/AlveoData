import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import {  Typography } from "@mui/material";
import { RiPantoneLine } from "react-icons/ri";

import "./footer.css";

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
    url: "/courses",
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
    <footer className="footer">
      <Container>
        <Row className="row-cols-lg-4">
          <Col lg="3" md="6" className="mb-4">
          <Typography variant="h5" className="flex items-center gap-1">
              <RiPantoneLine className="text-xl" style={{ animation: "slideFromBottom 1s ease-out" }} />
              <span className="animate__animated animate__slideInRight">Learners.</span>
            </Typography>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Explore</h6>
            <ListGroup className="link__list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Information</h6>
            <ListGroup className="link__list">
              {footerInfoLinks.map((item, index) => (
                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6" className="mb-4">
            <h6 className="fw-bold">Get in Touch</h6>
            <p>Address: Sylhet, Bangladesh</p>
            <p>Phone: +88 0123456789</p>
            <p>Email: example@gmail.com</p>
          </Col>
        </Row>

        
        <div className="follows">
              <p className="mb-0">Follow us on social media</p>
              <span>
                <a href="facebook.com">
                  <i className="ri-facebook-line"></i>
                </a>
              </span>
              <span>
                <a href="facebook.com">
                  <i className="ri-instagram-line"></i>
                </a>
              </span>
              <span>
                <a href="facebook.com">
                  <i className="ri-linkedin-line"></i>
                </a>
              </span>
              <span>
                <a href="facebook.com">
                  <i className="ri-twitter-line"></i>
                </a>
              </span>
            </div>
            
      </Container>
    </footer>
  );
};

export default Footer;
