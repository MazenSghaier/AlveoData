import React, { Fragment } from "react"
import Header from "../Visitors_components/Header/Header";
import Map, {NavigationControl, Marker} from 'react-map-gl';

import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import Content_display from "../Visitors_components/Content_Page/Content_display";

import FrequentlyAskedQuestions from "../Visitors_components/About_Page/Questions/Question";

import Footer from "../Visitors_components/Footer/Footer";
import SupportEngine from "../Visitors_components/Chat-bot/SupportEngine";


const CoursesPage = () => {
  return (
    <Fragment>
      <Header />
      {/*<div style={{ display: "flex", flexDirection: "column", marginTop: "8rem", paddingTop: "0px" }}>*/}
      <div className="flex flex-col mt-32 pt-0">
        
        <Content_display/>
        
        <Content_display/>
        
        <Content_display/>

        <FrequentlyAskedQuestions/>

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
      
      </div>
    </Fragment>
  );
};

export default CoursesPage;