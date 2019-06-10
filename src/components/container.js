import React from "react";

import Header from "./header";
import About from "./about";
import Skills from "./skillsContainer";
import Contact from "./contact";
import GitHub from "./GitHub/GitHub";

const Container = props => (
  <div className="container">
    <Header text="My Portfolio" />
    <About />
    <Skills />
    <GitHub myCommits={props.myCommits} />
    <Contact phoneNumber="+23423049203" email="test@mail.com" />
  </div>
);

export default Container;
