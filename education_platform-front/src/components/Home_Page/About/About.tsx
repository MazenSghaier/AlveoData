import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Lottie from 'react-lottie';
import animationData from '../../../lotties/lottieflow-attention-05-26C6DA-easey.json';
import aboutImg from "../../../assests/images/about-us.png";
import "./about.css";
import CountUp from "react-countup";


const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement | null>(null); // Specify the type of the ref
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const elementTop = imageRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // Adjust this threshold to control when the animation triggers
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
    <section className="flex justify-center items-center -mt-9">
      <Container>
        <Row className="gap-4">
          {/* Column 1 */}
          <Col lg="4" md="12" className="flex flex-col items-center justify-center">
            <div className="about__img text-center relative mb-2" ref={imageRef}>
              <div className={`w-3/4 mx-auto relative pb-2 ${shouldAnimate ? "animate-pop-up" : ""}`}>
                <img src={aboutImg} alt="" className="w-full rounded-lg" />
                <div className="lottie-animation-container-left">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                    }}
                    height={150}
                    width={150}
                    style={{ color: '#26C6DA' }}
                  />
                </div>
                <div className="lottie-animation-container-right">
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animationData,
                    }}
                    height={150}
                    width={150}
                    style={{ color: '#26C6DA' }}
                  />
                </div>
            </div>
          </div>
          </Col>

          {/* Column 2 */}
          <Col lg="8" md="12" className="flex items-center">
            <div className="about__content text-center pl-10">
              
              <p className="text-base font-serif text-green-900 pb-2 pt-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

               {/* Counters */}
               <div className="about__counter mt-6 flex justify-center">
                {/* All Counters in One Row */}
                <div className="flex gap-5 items-center">
                  <div className="single__counter">
                    <span className="counter text-2xl font-semibold text-green-900">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title text-base text-green-900">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter text-2xl font-semibold text-green-900">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title text-base text-green-900">Patient Around World</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter text-2xl font-semibold text-green-900">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>
                    <p className="counter__title text-base text-green-900">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter text-2xl font-semibold text-green-900">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title text-base text-green-900">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
