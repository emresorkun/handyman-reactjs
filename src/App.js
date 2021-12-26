import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Comments from "./pages/Comments";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import SingleWork from "./pages/SingleWork";
import Works from "./pages/Works";
import PageNotFound from "./pages/PageNotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <div className="container-routes">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route exact path="/bookings" element={<Booking />} />
            <Route exact path="/comments" element={<Comments />} />
            <Route exact path="/contact-form" element={<ContactForm />} />
            <Route exact path="/works" element={<Works />} />
            <Route exact path="/works/:id" element={<SingleWork />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
