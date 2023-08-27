import React, { Profiler } from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css';
import Sidenav from './component/Sidenav';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Courses from './pages/Courses';
import Course from './pages/Course';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/profile' element={<Profile/>} ></Route>
          <Route path='/courses' element={<Courses/>} ></Route>
          <Route path='/settings' element={<Settings/>} ></Route>
          <Route path="/course/:id" element={ <Course/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
