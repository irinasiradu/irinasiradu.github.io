import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

// import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import Rsvp from "./components/Rsvp";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });

    let navElement = $("nav");

    $(function () {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
    $(window).on("scroll", function () {
      $(window).scrollTop() > navElement.innerHeight()
        ? navElement.addClass("sticky")
        : navElement.removeClass("sticky");
    });
  });

  return (
    <Fragment>
      <main>
        <Home />
        <Details />
        <Rsvp />
      </main>
    </Fragment>
  );
};

export default App;
