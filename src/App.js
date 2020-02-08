import React, { useEffect, Fragment } from "react";
import AOS from "aos";

import Home from "./components/Home";
import Details from "./components/Details";
import Rsvp from "./components/Rsvp";

import "aos/dist/aos.css";
import "./assets/styles/main.scss";
import { localizations } from "./shared/Common";

const defaultLanguage = "ro";
const languages = ["ro", "fr"];

const App = () => {
  useEffect(() => {
    AOS.init({ once: true });
  });

  const pathTokens = window.location.pathname.split("/");
  const language = (pathTokens && pathTokens.length > 1 && languages.find(x => x === pathTokens[1])) || defaultLanguage;
  const localization = localizations[language];

  return (
    <Fragment>
      <main>
        <Home localization={localization} />
        <Details localization={localization} />
        <Rsvp localization={localization} />
      </main>
    </Fragment>
  );
};

export default App;
