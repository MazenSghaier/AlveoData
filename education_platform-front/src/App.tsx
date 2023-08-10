import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home";
import SignIn from './components/Signup/SignIn';
import LogIn from './components/Signup/LogIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/logIn" element={<LogIn/>} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  );
}

export default App
