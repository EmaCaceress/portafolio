import React from "react";
import './Back.css';

import Projects from '../Projects/Projects.js';
import Certificates from '../Certificates/Certificates.js';
import Contact from '../Contact/Contact.js';

const Back = () => {

  return (
    <section className="back">
        <Projects/>
        <Certificates/>
        <Contact/>
    </section>
  );
};

export default Back;
