import React from "react";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import html from "../images/html-5.png";
import css from "../images/css-3.png";
import bootstrap from "../images/bootstrap.png";
import react from "../images/react.png";
import javascript from "../images/javascript.png";
import mongodb from "../images/mongodb.png";
import express from "../images/express.png";
import node from "../images/nodejs.png";
import styles from "../style/section/marque.component.module.scss";

const MarqueeComponent = () => {

  const [widthViewport, setWidthViewport] = useState(window.innerWidth);


  return (
    <div className={`${styles.marque_main} main_section section_spacing`}>
    <Marquee className={styles.marque_main} gradientColor={[32, 30, 57]} gradientWidth={widthViewport < 570 ? 100 : 300} speed={100}>
      <picture>
      <img src={html} className={styles.img_marque} alt="HTML5" />
      </picture>
      <picture>
      <img src={css} className={styles.img_marque} alt="CSS3" />
      </picture>
      <picture>
      <img src={bootstrap} className={styles.img_marque} alt="BootStrap" />
      </picture>
      <picture>
      <img src={react} className={styles.img_marque} alt="React-JS"/>
      </picture>
      <picture>
      <img src={javascript} className={styles.img_marque} alt="JavaScript" />
      </picture>
      <picture>
      <img src={mongodb} className={styles.img_marque} alt="MongoDB" />
      </picture>
      <picture>
      <img src={express} className={styles.img_marque} alt="Express-JS" />
      </picture>
      <picture>
      <img src={node} className={styles.img_marque} alt="Noe-JS" />
      </picture>
    </Marquee>
    </div>
  );
};

export default MarqueeComponent;
