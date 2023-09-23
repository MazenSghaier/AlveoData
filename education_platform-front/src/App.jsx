import React , {useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Visitors_pages/home";
import AboutPage from './Visitors_pages/about_page';
import CoursesPage from './Visitors_pages/courses_page';
import SignIn from './Visitors_components/Signup/SignIn';
import LogIn from './Visitors_components/Signup/LogIn';
import SupportAdmin from './Visitors_components/Chat-bot/SupportAdmin';
import StudentHome from './Students_pages/Home';
import Profile from './Students_pages/Profile';
import Settings from './Students_pages/Settings';
import Courses from './Students_pages/Courses';
import Course from './Students_pages/Course';
import FreeCourse from './Visitors_components/Home_Page/Free-course-section/FreeCourse'; 


function App() {

 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<AboutPage/>} />
    <Route path="/content" element={<CoursesPage/>} />
    <Route path="/SignIn" element={<SignIn/>} />
    <Route path="/LogIn" element={<LogIn/>} />
    <Route path="/support" element={<SupportAdmin/>} />
    <Route path='/Students' element={<StudentHome/>} ></Route>
    <Route path='/profile' element={<Profile/>} ></Route>
    <Route path='/courses' element={<Courses/>} ></Route>
    <Route path='/settings' element={<Settings/>} ></Route>
    <Route path="/course/:id" element={<Course />} />
    <Route path="/"  element={<FreeCourse/>} />
   </Routes>
  </Router>
 );
}

export default App;