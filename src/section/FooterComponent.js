import React from "react";
import styles from "../style/section/footer.component.module.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const FooterComponent = () => {
  const [activeNav, setActiveNav] = useState("#Home");
  return (
    <div className={styles.Main_footer}>
      <div className={styles.footer_head}>
        <p className={styles.title}>VARUN SWAMY</p>
      </div>
      <div className={styles.container}>
        <div className={styles.navigation_box}>
          <p>
            <a
              href="#Home"
              onClick={() => setActiveNav("#Home")}
              className={
                activeNav === "#Home" ? `active_footer` : `${styles.nav_links}`
              }
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#About"
              onClick={() => setActiveNav("#About")}
              className={
                activeNav === "#About" ? `active_footer` : `${styles.nav_links}`
              }
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#Services"
              onClick={() => setActiveNav("#Services")}
              className={
                activeNav === "#Services" ? `active_footer` : `${styles.nav_links}`
              }
            >
              Services
            </a>
          </p>
          <p>
            <a
              href="#Testimonials"
              onClick={() => setActiveNav("#Testimonials")}
              className={
                activeNav === "#Testimonials" ? `active_footer` : `${styles.nav_links}`
              }
            >
              Testimonials
            </a>
          </p>
          <p>
            <a
              href="#Contact"
              onClick={() => setActiveNav("#Contact")}
              className={
                activeNav === "#Contact"
                  ? `active_footer`
                  : `${styles.nav_links}`
              }
            >
              Contact
            </a>
          </p>
        </div>
        <div className={styles.social_box}>
          <a href="https://www.facebook.com/Varun.Swamy60/" target={'blank'}>
          <div className={styles.social_btn}>
            <FaFacebookF className={styles.icon} />
          </div>
          </a>
          <a href="https://www.instagram.com/swamyvarun/" target={'blank'}>
          <div className={styles.social_btn}>
            <FaInstagram className={styles.icon} />
          </div>
          </a>
          <a href="https://www.linkedin.com/in/varun-swamy-1ba303189" target={"blank"}>
          <div className={styles.social_btn}>
            <FaLinkedinIn className={styles.icon} />
          </div>
          </a>
        </div>
        <hr />
        <p className={styles.copywrite}>
          Copyright ©2022 All rights reserved | This template is made by Varun
          Swamy
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;
