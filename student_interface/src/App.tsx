import React, { Profiler } from 'react';
import {Routes,Route, BrowserRouter} from "react-router-dom"
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Courses from './pages/Courses';
import Course from './pages/Course';


function App() {
  const theme = createTheme();
  return (
    <div >
       <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/profile' element={<Profile/>} ></Route>
            <Route path='/courses' element={<Courses/>} ></Route>
            <Route path='/settings' element={<Settings/>} ></Route>
            <Route path="/course/:id" element={ <Course/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
