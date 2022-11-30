import React from "react";
import styles from "../style/section/services.component.module.scss";
import { BsCheck2 } from "react-icons/bs";

const ServicesComponent = () => {
  return (
    <div id="Services" className="main_section section_spacing">
      <div className={`${styles.exp_head} fadeInUp`}>
        <p className={styles.head}>What I Offer</p>
        <p className={styles.title}>Services</p>
      </div>
      <div className="Container">
        <div className={styles.service_wrap}>
          <div className={`${styles.service_box} fadeInUp`}>
            <div className={styles.service_title}>
              <p className={styles.title2}>Web Development</p>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.service_box} fadeInUp`}>
            <div className={styles.service_title}>
              <p className={styles.title2}>SEO</p>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles.service_box} fadeInUp`}>
            <div className={styles.service_title}>
              <p className={styles.title2}>Mobile Development</p>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
            <div className={styles.inside_wrap}>
              <div className={styles.tick}>
                <BsCheck2 style={{ marginTop: "0px" }} />
              </div>
              <div className={styles.info_service}>
                <p>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
