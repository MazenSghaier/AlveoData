import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "reactstrap";
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
      <Container>
        <Row className="bg-gray p-4">
          <Col className="course__top">
            <div className="course__top__left">
              <h2>Our Popular Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                consequatur libero quod voluptatibus ullam quia quas, vitae
                voluptatem recusandae reprehenderit!
              </p>
            </div>
            <div className="text-end hover:text-cyan-400">
              <button className="hover:text-cyan-400" style={{backgroundColor: "#fff", color: "#35bbe3", borderRadius: "2rem", padding: "0.8rem 2rem",}}>See All</button>
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
      </Container>
    </section>
  );
};

export default Courses;