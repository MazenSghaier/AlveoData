import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import {  Row, Col } from "reactstrap";
import courseImg1 from "../../../assests/images/web-design.png";
import courseImg2 from "../../../assests/images/graphics-design.png";
import courseImg3 from "../../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },
  {
    id: "02", // Make sure this id is unique
    title: "Professional Graphics Design, PhotoShop, Adobe XD, Figma",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },
  {
    id: "03", // Make sure this id is unique
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  const nav = useNavigate();
  const coursesRef = useRef(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (coursesRef.current) {
        const elementTop = coursesRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Adjust this threshold to control when the animation triggers
        if (elementTop - windowHeight + 300 < 0) {
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
    <section className="courses__container " ref={coursesRef}>
      
        <Row className="bg-gray p-4">
          <Col className="course__top">
            <div className="course__top__left">
              <h2 className="italic  lg:text-2xl font-semibold text-black">Our Popular Courses</h2>
              <p className="non-italic lg:text-base font-meduim text-black">
              At our educational platform, we offer a diverse range of courses to satisfy your thirst for knowledge. 
              From scientific explorations to practical skills like web development and data science, our courses cater to all interests. 
              Join us to embark on a learning journey that unlocks your potential.
              </p>
            </div>
          </Col>
        </Row>
        <div className="course__row">
        {coursesData.map((item) => (
          <CourseCard
            key={item.id}
            item={item}
            shouldAnimate={shouldAnimate} 
          />
          ))}
        </div>
    </section>
  );
};

export default Courses;