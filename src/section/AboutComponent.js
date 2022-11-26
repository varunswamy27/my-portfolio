import React from "react";
import styles from "../style/section/about.component.module.scss";
import TabComponent from "./TabComponent";

const AboutComponent = () => {
  return (
    <div id='About' className='main_section section_spacing_bottom'>
      <div className={styles.about_head}>
        <p className={styles.head}>Get To Know</p>
        <p className={styles.title}>About Me</p>
      </div>
      <div className="Container">
        <div className={styles.about_wrap}>
          <div className={styles.left_info}>
            <div className={styles.bg_img_under}>
              <div className={styles.bg_img_upper}></div>
            </div>
          </div>
          <div className={styles.right_info}>
            <TabComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
