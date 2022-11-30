import React from "react";
import styles from "../style/section/experience.component.module.scss";
import { MdVerified } from 'react-icons/md';



const ExperienceComponent = () => {
  return (
    <div className="main_section section_spacing">
      <div className={styles.exp_head}>
        <p className={styles.head}>Known Technologies</p>
        <p className={styles.title}>My Skills</p>
      </div>
      <div className='Container'>
      <div className={styles.exp_wrap}>
      <div className={`${styles.frontend_info} fadeInUp`}>
        <div className={styles.exp_title}>
          Frontend Development
        </div>
        <div className={styles.skill_wrap}>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
              <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>HTML5</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
            <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>CSS3</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
        </div>
        <div className={styles.skill_wrap}>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
              <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>JavaScript</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
            <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>React Js</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
        </div>
        <div className={styles.skill_wrap}>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
              <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>BootStrap</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
            <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>Next Js</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.backend_info} fadeInUp`}>
      <div className={styles.exp_title}>
          Backend Development
        </div>
        <div className={styles.skill_wrap}>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
              <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>Node JS</p>
              <p className={styles.skill_level}>Intermediate</p>
            </div>
          </div>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
            <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>MongoDB</p>
              <p className={styles.skill_level}>Intermediate</p>
            </div>
          </div>
        </div>
        <div className={styles.skill_wrap}>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
              <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>Express JS</p>
              <p className={styles.skill_level}>Intermediate</p>
            </div>
          </div>
          <div className={styles.skill_box}>
            <div className={styles.icon}>
            <MdVerified className={styles.verified}/>
            </div>
            <div className={styles.skill_info}>
              <p className={styles.skill_name}>GraphCMS</p>
              <p className={styles.skill_level}>Experienced</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
