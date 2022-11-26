import React from "react";
import AboutComponent from "../section/AboutComponent";
import ContactComponent from "../section/ContactComponent";
import ExperienceComponent from "../section/ExperienceComponent";
import FooterComponent from "../section/FooterComponent";
import IntroComponent from "../section/IntroComponent";
import MarqueeComponent from "../section/MarqueeComponent";
import NavbarComponent from "../section/NavbarComponent";
import PortfolioComponent from "../section/PortfolioComponent";
import ServicesComponent from "../section/ServicesComponent";
import TestimonialComponent from "../section/TestimonialComponent";

const HomeComponent = () => {
  return (
    <>
      <NavbarComponent />
      <IntroComponent />
      <AboutComponent />
      <ExperienceComponent />
      <MarqueeComponent />
      <ServicesComponent />
      <PortfolioComponent />
      <TestimonialComponent />
      <ContactComponent />
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
