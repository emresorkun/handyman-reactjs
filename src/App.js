import React from "react";
import "./App.css";

import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Comments from "./pages/Comments";
import ContactForm from "./pages/ContactForm";
import Home from "./pages/Home";
import SingleWork from "./pages/SingleWork";
import Works from "./pages/Works";
import PageNotFound from "./pages/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/comments" component={Comments} />
        <Route exact path="/contact-form" component={ContactForm} />
        <Route exact path="/works" component={Works} />
        <Route exact path="/single-work/:id" component={SingleWork} />
        <Route exact path="/*" component={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
