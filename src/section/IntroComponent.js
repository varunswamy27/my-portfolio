import React from "react";
import styles from "../style/section/intro.component.module.scss";
import Typewriter from "typewriter-effect";
import CV from '../assest/varunswamy-cv.pdf'

const IntroComponent = () => {
  return (
    <div id="Home" className={`${styles.Main_intro} main_section section_spacing`}>
      <div className='Container section_spacing'>
        <div className={styles.intro_wrap}>
          <div className={styles.left_info}>
            <p className={styles.intro_text}>HI I'M</p>
            <div className={styles.name_text}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString("VARUN SWAMY").pauseFor(2000).start();
                }}
              />
            </div>
            <p className={styles.mern_text}>FULLSTACK DEVELOPER</p>
            <div className={styles.button_wrap}>
              <a href={CV} download><button className={styles.btn_intro}>Download CV</button></a>
              <button className={styles.btn_intro}>Let's Talk</button>
            </div>
          </div>
          <div className={styles.right_info}>
            <div className={styles.image_wrap}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroComponent;
