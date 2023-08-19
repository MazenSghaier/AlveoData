import React, { Fragment } from "react"
import Header from "../components/Header/Header";
import Map, {NavigationControl, Marker} from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import HeroSection from "../components/Home_Page/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import About from "../components/Home_Page/About/About";
import Courses from "../components/Home_Page/Courses-section/Courses";
import Choose from "../components/Home_Page/Choose/Choose";
import Features from "../components/About_Page/Feature-section/Features";
import FreeCourse from "../components/Home_Page/Free-course-section/FreeCourse";

import Testimonials from "../components/Home_Page/Testimonial/Testimonials";

import Newsletter from "../components/About_Page/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";


const Home = () => {
  return (
    <Fragment>
      <Header />
        <HeroSection />
        <div className="about__img text-center relative mb-2">
          <h2 className="text-3xl ont-semibold">Who we are</h2>
        </div>
        <About/>
        <Courses/>
    </Fragment>
  );
};

export default Home;