import React from "react";
import styles from "../style/section/portfolio.component.module.scss";
import lusion from "../images/projects/lusion.jpg";
import sway from "../images/projects/sway-it-service.jpg";
import dashboard from "../images/projects/Dashboard.jpg";

const PortfolioComponent = () => {
  return (
    <div className="main_section section_spacing">
      <div className={`${styles.portfolio_head} fadeInUp`}>
        <p className={styles.head}>My Recent Work</p>
        <p className={styles.title}>Portfolio</p>
      </div>
      <div className="Container">
        <div className={styles.portfolio_wrap}>
          <div className={`${styles.portfolio_box} fadeInUp`}>
            <div className={styles.image_box}>
              <img className={`${styles.project_img} img_responsive`} src={lusion} alt="Lusion" />
              <div className={styles.overlap}>
                <p className={styles.overlap_info}>Made This Website using HTML5 CSS3</p>
              </div>
            </div>
            <p className={styles.portfolio_info}>Lusion</p>
            <div className={styles.button_wrap}>
              <a href="https://github.com/varunswamy27/Lusion" target="blank">
                <button className={styles.portfolio_btn}>Github</button>
              </a>
              <a href="https://varunswamy27.github.io/Lusion/" target="blank">
                <button className={styles.portfolio_btn}>Live Demo</button>
              </a>
            </div>
          </div>
          <div className={`${styles.portfolio_box} fadeInUp`}>
            <div className={styles.image_box}>
              <img
                className={`${styles.project_img} img_responsive`}
                src={sway}
                alt="Sway IT Service"
              />
              <div className={styles.overlap}>
              <p className={styles.overlap_info}>Made This Website using HTML5 CSS3</p>

              </div>
            </div>
            <p className={styles.portfolio_info}>Sway IT Service</p>
            <div className={styles.button_wrap}>
              <a
                href="https://github.com/varunswamy27/Sway-IT-Service"
                target="blank"
              >
                <button className={styles.portfolio_btn}>Github</button>
              </a>
              <a
                href="https://varunswamy27.github.io/Sway-IT-Service/"
                target="blank"
              >
                <button className={styles.portfolio_btn}>Live Demo</button>
              </a>
            </div>
          </div>
          <div className={`${styles.portfolio_box} fadeInUp`}>
            <div className={styles.image_box}>
              <img
                className={`${styles.project_img} img_responsive`}
                src={dashboard}
                alt="Sway IT Service"
              />
              <div className={styles.overlap}>
              <p className={styles.overlap_info}>Made This Website using HTML5 CSS3</p>

              </div>
            </div>
            <p className={styles.portfolio_info}>Dashboard</p>
            <div className={styles.button_wrap}>
              <a
                href="https://github.com/varunswamy27/Dashboard"
                target="blank"
              >
                <button className={styles.portfolio_btn}>Github</button>
              </a>
              <a
                href="https://varunswamy27.github.io/Dashboard/"
                target="blank"
              >
                <button className={styles.portfolio_btn}>Live Demo</button>
              </a>
            </div>
          </div>
          {/* <div className={styles.portfolio_box}>
            <div className={styles.image_box}></div>
            <p className={styles.portfolio_info}>Demo Project Info</p>
            <div className={styles.button_wrap}>
              <button className={styles.portfolio_btn}>Github</button>
              <button className={styles.portfolio_btn}>Live Demo</button>
            </div>
          </div>
          <div className={styles.portfolio_box}>
            <div className={styles.image_box}></div>
            <p className={styles.portfolio_info}>Demo Project Info</p>
            <div className={styles.button_wrap}>
              <button className={styles.portfolio_btn}>Github</button>
              <button className={styles.portfolio_btn}>Live Demo</button>
            </div>
          </div>
          <div className={styles.portfolio_box}>
            <div className={styles.image_box}></div>
            <p className={styles.portfolio_info}>Demo Project Info</p>
            <div className={styles.button_wrap}>
              <button className={styles.portfolio_btn}>Github</button>
              <button className={styles.portfolio_btn}>Live Demo</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponent;
