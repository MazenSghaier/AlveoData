import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home";
import AboutPage from './pages/about_page';
import CoursesPage from './pages/courses_page';
import SignIn from './components/Signup/SignIn';
import LogIn from './components/Signup/LogIn';
import SupportAdmin from './components/Chat-bot/SupportAdmin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/support" element={<SupportAdmin/>} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App
