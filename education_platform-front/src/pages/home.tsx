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

import SupportEngine from "../components/Chat-bot/SupportEngine";

const Home = () => {
  return (
    <Fragment>
    <Header />
      <HeroSection />
      <div className="about__img text-center relative mb-2">
        <h2 className="italic  lg:text-4xl font-semibold text-sky-500">Who we are</h2>
      </div>
      <About/>
      <Courses/>
      <Choose/>
      <CompanySection />
      <FreeCourse/>
      <Testimonials/>
      <div style={{ display: 'flex', justifyContent:'center', alignContent:'center'}}>
        <Map mapLib={maplibregl as any} 
          initialViewState={{
            longitude: 10.840769988181869,
            latitude: 35.76446007514994,
            zoom: 16
          }}
          style={{
            width: "90%",
            height: "calc(70vh - 77px)",
            borderRadius: "10px", 
            margin: "0 20px",    
            border: "1px solid #ccc", 
            overflow: "hidden"    
          }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=PSGwt6g5kB7O4biuGevk"
        >
        <NavigationControl position="top-left" />
        <Marker longitude={10.840769988181869} latitude={35.76446007514994} color="#35bbe3"/>
      </Map>    
    </div>    
    <Footer/>
    <SupportEngine />
  </Fragment>
);
};
export default Home;