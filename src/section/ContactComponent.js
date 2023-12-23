import React from "react";
import styles from "../style/section/contact.component.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const ContactComponent = () => {
  console.log("Works");
  return (
    <div id="Contact" className="main_section section_spacing">
      <div className={`${styles.contact_head} fadeInUp`}>
        <p className={styles.head}>Get In Touch</p>
        <p className={styles.title}>Contact Me</p>
      </div>
      <div className={`Container`}>
        <div className={styles.contact_wrap}>
          <div className={styles.contact_left}>
            <div className={`${styles.contact_media} fadeInUp`}>
              <AiOutlineMail className={styles.icon} />
              <p className={styles.social}>Email</p>
              <p className={styles.account}>varunswamy27@gmail.com</p>
              <p className={styles.send}>
                <a
                  href="mailto:varunswamy27@gmail.com"
                  style={{ textDecoration: "none", color: "#4cadf3" }}
                >
                  Send a Message
                </a>
              </p>
            </div>
            <div className={`${styles.contact_media} fadeInUp`}>
              <AiFillLinkedin className={styles.icon} />
              <p className={styles.social}>LinkedIn</p>
              <p className={styles.account}>varunswamy27@gmail.com</p>
              <p className={styles.send}>
                <a
                  href="https://www.linkedin.com/login"
                  target={"blank"}
                  style={{ textDecoration: "none", color: "#4cadf3" }}
                >
                  Send a Message
                </a>
              </p>
            </div>
            <div className={`${styles.contact_media} fadeInUp`}>
              <BsWhatsapp className={styles.icon} />
              <p className={styles.social}>WhatsApp</p>
              <p className={styles.account}>+91 8097531709</p>
              <p className={styles.send}>
                <a
                  href="tel:8097531709"
                  target={"blank"}
                  style={{ textDecoration: "none", color: "#4cadf3" }}
                >
                  Send a Message
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contact_right}>
            <form name="Contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact" />
              <input
                className={`${styles.contact_input} fadeInUp`}
                type="text"
                placeholder="Your Full Name"
              />
              <input
                className={`${styles.contact_input} fadeInUp`}
                type="text"
                placeholder="Your Email"
              />
              <textarea
                className={`${styles.contact_input} fadeInUp`}
                name=""
                id=""
                rows="8"
                placeholder="Your Message"
              ></textarea>
              <br />
              <button
                type="submit"
                className={`${styles.contact_btn} fadeInUp`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
