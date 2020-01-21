import React, { useEffect, Fragment } from "react";
import AOS from "aos";
import $ from "jquery";

// import Header from "./components/Header";
import Home from "./components/Home";
import Schedule from "./components/About";
import ContactBox from "./components/ContactBox";

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
      {/* <Header /> */}
      <main>
        <Home />
        <Schedule />
        <ContactBox />
      </main>
    </Fragment>
  );
};

export default App;
