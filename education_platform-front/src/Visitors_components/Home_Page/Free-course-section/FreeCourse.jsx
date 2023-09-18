import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import FreeCourseCard from "./FreeCourseCard";
import courseImg01 from "../../../assests/images/web-development.png";
import courseImg02 from "../../../assests/images/kids-learning.png";
import courseImg03 from "../../../assests/images/seo.png";
import courseImg04 from "../../../assests/images/ui-ux.png";
import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  const coursesRef = useRef([]); // Initialize the ref as an empty array
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (coursesRef.current) {
        const elementTop = coursesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop - windowHeight + 100 < 0) {
          setShouldAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="free-course" ref={coursesRef}>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="italic  lg:text-2xl font-semibold">Our Free Courses</h2>
          </Col>
        </Row>

        <Row className="card-row">
          {freeCourseData.map((item, index) => (
            <Col
              lg="6"
              md="6"
              sm="6"
              className={`mb-4 single__free__course d-flex ${
                shouldAnimate ? "animate" : ""
              }`}
              key={index}
              
            >
              <FreeCourseCard key={index}
                item={item}
                shouldAnimate={shouldAnimate}
                ref={(el) => (coursesRef.current[index] = el)}
              />
            </Col>
          ))}
        </Row>
    </section>
  );
};

export default FreeCourse;