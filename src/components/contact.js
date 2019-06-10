import React from "react";
import Section from "./section";

const Contact = props => (
  <Section heading="Contact">
    {props.phoneNumber} - email: {props.email}
  </Section>
);

export default Contact;
