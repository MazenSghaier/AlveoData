import React, { Fragment } from "react"
import Header from "../components/Header/Header";

import Map, {NavigationControl, Marker} from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import OurPlat from "../components/About_Page/Our_Plat/OutPlat";
import OurStorySection from "../components/About_Page/Our-Story/OurStory";
import Features from "../components/About_Page/Feature-section/Features";
import Content_display from "../components/Content_Page/Content_display";

import Company from "../components/Company-section/Company";
import FrequentlyAskedQuestions from "../components/About_Page/Questions/Question";

import Footer from "../components/Footer/Footer";


const AboutPage = () => {
  return (
    <Fragment>
      <Header />
      {/*<div style={{ display: "flex", flexDirection: "column", marginTop: "8rem", paddingTop: "0px" }}>*/}
      <div className="flex flex-col mt-32 pt-0">
      <div className="about__img text-center relative mb-2">
          <h2 className="text-3xl ont-semibold">Who we are</h2>
        </div>
        <OurPlat/>
        <OurStorySection/>
        <Features/>
        <Company/>
        <FrequentlyAskedQuestions/>
        <Map mapLib={maplibregl as any} 
        initialViewState={{
          longitude: 10.840769988181869,
          latitude: 35.76446007514994,
          zoom: 16
        }}
        style={{
          width: "98%",
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
      <Footer/>
      </div>
    </Fragment>
  );
};

export default AboutPage;