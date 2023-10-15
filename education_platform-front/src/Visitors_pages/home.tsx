import React, { Fragment } from "react"
import Header from "../Visitors_components/Header/Header";
import Map, {NavigationControl, Marker} from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import HeroSection from "../Visitors_components/Home_Page/Hero-Section/HeroSection";
import CompanySection from "../Visitors_components/Company-section/Company";

import About from "../Visitors_components/Home_Page/About/About";
import Courses from "../Visitors_components/Home_Page/Courses-section/Courses";
import Choose from "../Visitors_components/Home_Page/Choose/Choose";
import FreeCourse from "../Visitors_components/Home_Page/Free-course-section/FreeCourse";

import Testimonials from "../Visitors_components/Home_Page/Testimonial/Testimonials";

import Footer from "../Visitors_components/Footer/Footer";

import SupportEngine from "../Visitors_components/Chat-bot/SupportEngine";

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
 
  </Fragment>
);
};
export default Home;