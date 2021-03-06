import React from "react";
import Image from "next/image";
import styles from "./WebTopSection.module.css";
import heroImage from "../../../assets/images/hero-image.jpg";
import ImgLazyLoad from "../img-lazy-load/ImgLazyLoad";
// import ImgLazyLoad from "../img-lazy-load/ImgLazyLoad";

function WebTopSection() {
  return (
    <>
      <section
        className={`${styles.hero_section} mt-[60px] flex flex-col justify-end items-center relative     sm:h-[350px] sm:mt-[80px] md:h-[480px] lg:h-[630px]`}
      >
        <div className={`${styles.bg_img_div} absolute w-[100%] top-[-30px] bottom-0`}>
          <span className="image_container">
            <ImgLazyLoad src={heroImage} alt={"Hero image"} classes={""} />
          </span>
        </div>
        <div className="text-center pb-[60px] z-[0]">
          <h2 className="fahkwang-light text-[#fff] text-[26px] leading-[1.1] tracking-[.2em] uppercase pb-[5px]">
            HELLO SUMMER
          </h2>
          <button
            className={`${styles.orange_anim_btn} relative work-regular text-[#fff] text-[13px] leading-[1.1] tracking-[.2em] uppercase px-[4px] py-[8px]`}
          >
            shop now
          </button>
        </div>
      </section>
    </>
  );
}

export default WebTopSection;
