import React, { Fragment } from "react"
import Header from "../components/Header/Header";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import About from "../components/About/About";
import Courses from "../components/Courses-section/Courses";
import Choose from "../components/Choose/Choose";
import Features from "../components/Feature-section/Features";
import FreeCourse from "../components/Free-course-section/FreeCourse";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div style={{ display: "flex", flexDirection: "column", marginTop: "", paddingTop: "0px" }}>
        <HeroSection />
        <div className="about__img text-center relative mb-2">
          <h2 className="text-3xl ont-semibold">Who we are</h2>
        </div>
        <About/>
        <Courses/>
        <Choose/>
        <CompanySection />
        <FreeCourse/>
        <Testimonials/>
        <div className="my-padding">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12949.779627818107!2d10.849470708813994!3d35.764446084350695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130212d6df016097%3A0x528cc1e524eece77!2z2KfZhNmF2YDYudmH2K8g2KfZhNi52KfZhNmKINmE2YTYpdi52YTYp9mF2YrYqSDZiNin2YTYsdmK2KfYttmK2KfYqiDYqNin2YTZhdmG2LPYqtmK2LE!5e0!3m2!1sar!2stn!4v1674598499312!5m2!1sar!2stn"width="100%" height="350" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
        <Footer/>
      </div>
    </Fragment>
  );
};

export default Home;