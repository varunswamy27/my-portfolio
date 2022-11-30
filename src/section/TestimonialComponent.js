import React from "react";
import styles from "../style/section/testimonial.component.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

const TestimonialComponent = () => {
  const slider = useRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="Testimonials" className="main_section section_spacing">
      <div className={`${styles.Test_head} fadeInUp`}>
        <p className={styles.head}>Review From Clients</p>
        <p className={styles.title}>Testimonials</p>
      </div>
      <div className="Container">
        <Slider className="fadeInUp" ref={slider} {...settings}>
          <div className={styles.test_box}>
            <div className={styles.test_main}>
              <div className={styles.test_img}></div>
              <p className={styles.test_name}>Tina Foey</p>
              <p className={styles.test_desp}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
          <div className={styles.test_box}>
            <div className={styles.test_main}>
              <div className={styles.test_img}></div>
              <p className={styles.test_name}>Tina Foey2</p>
              <p className={styles.test_desp}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
          <div className={styles.test_box}>
            <div className={styles.test_main}>
              <div className={styles.test_img}></div>
              <p className={styles.test_name}>Tina Foey3</p>
              <p className={styles.test_desp}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
          <div className={styles.test_box}>
            <div className={styles.test_main}>
              <div className={styles.test_img}></div>
              <p className={styles.test_name}>Tina Foey4</p>
              <p className={styles.test_desp}>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before final copy is available.
              </p>
            </div>
          </div>
        </Slider>
        <div className={`${styles.arrow_wrap} fadeInUp`}>
          <div
            className={styles.test_btn}
            onClick={() => slider?.current?.slickPrev()}
          >
            <FcPrevious className={styles.icon} />
          </div>
          <div
            className={styles.test_btn}
            onClick={() => slider?.current?.slickNext()}
          >
            <FcNext className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
