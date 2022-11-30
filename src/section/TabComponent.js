import React from "react";
import styles from "../style/section/about.component.module.scss";
import { useState } from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { MdGroups } from "react-icons/md";
import { GoFileSubmodule } from "react-icons/go";

const TabComponent = () => {
  const [toggleState, setToggleState] = useState(1);

  return (
    <>
      <div className={`${styles.tab_panel} fadeInUp`}>
        <div
          className={toggleState === 1 ? styles.tab_btn_active : styles.tab_btn}
          onClick={() => {
            setToggleState(1);
          }}
        >
          <MdOutlineAutoGraph className={styles.tab_icon} />
          <p className={styles.tab_title}>Experience</p>
          <p className={styles.tab_desp}>3+ Years Working</p>
        </div>
        <div
          className={toggleState === 2 ? styles.tab_btn_active : styles.tab_btn}
          onClick={() => {
            setToggleState(2);
          }}
        >
          <MdGroups className={styles.tab_icon} />
          <p className={styles.tab_title}>Clients</p>
          <p className={styles.tab_desp}>100+ Worldwide</p>
        </div>
        <div
          className={toggleState === 3 ? styles.tab_btn_active : styles.tab_btn}
          onClick={() => {
            setToggleState(3);
          }}
        >
          <GoFileSubmodule className={styles.tab_icon} />
          <p className={styles.tab_title}>Projects</p>
          <p className={styles.tab_desp}>80+ Completed</p>
        </div>
      </div>
      <div
        className={
          toggleState === 1 ? `${styles.tab_active_info} fadeInUp` : styles.tab_none_info
        }
      >
        <p className={styles.tab_full_desp}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before final copy is available
        </p>
        <a href="tel:8097531709" target={"blank"} className={styles.link_style}>
          <button className={styles.btn_intro}>Let's Talk</button>
        </a>
      </div>
      <div
        className={
          toggleState === 2 ? `${styles.tab_active_info} fadeInUp` : styles.tab_none_info
        }
      >
        <p className={styles.tab_full_desp}>
          In publishing and graphic design, Lorem ipsum text commonly used to
          demonstrate the visual form of a document or a typeface without
          relying on meaningful content. Lorem ipsum may be used as a
          placeholder before final copy is available
        </p>
        <button className={styles.btn_intro}>Let's Talk</button>
      </div>
      <div
        className={
          toggleState === 3 ? `${styles.tab_active_info} fadeInUp` : styles.tab_none_info
        }
      >
        <p className={styles.tab_full_desp}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem copy is
          available
        </p>
        <button className={styles.btn_intro}>Let's Talk</button>
      </div>
    </>
  );
};

export default TabComponent;
