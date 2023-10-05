import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import images from "../img";
// import { Brand } from "../components/componentsindex";

const aboutus = () => {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      images: images.user1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      images: images.user1,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder , Chairman",
      images: images.user1,
    },
    {
      name: "Dara Frazier",
      position: "Co-founder Chief Strategy Officer",
      images: images.user1,
    },
  ];
  const factsArray = [
    {
      title: "10 million",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamvoluptatum",
    },
    {
      title: "100,000",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamvoluptatum",
    },
    {
      title: "220+",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamvoluptatum",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate quae, quia, quod voluptas quibusdam
              voluptatem voluptatibus quos asperiores fugit? Quisquam
              voluptatum, voluptate quae, quia, quod voluptas quibusdam
              voluptatem voluptatibus quos asperiores fugit?
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero} alt="aboutus_hero" />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Founder</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate quae, quia, quod voluptas quibusdam voluptatem
            voluptatibus quos asperiores fugit?
          </p>
        </div>
        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => {
              return (
                <div className={Style.aboutus_box_founder_box_img}>
                  <Image
                    className={Style.aboutus_box_founder_box_img_img}
                    src={el.images}
                    alt={el.name}
                    width={500}
                    height={500}
                  />

                  <h3>{el.name}</h3>
                  <p>{el.position}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={Style.aboutus_box_title}>
          <h2>Fast Facts</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate quae, quia,
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => {
              return (
                <div className={Style.aboutus_box_facts_box_info}>
                  <h3>{el.title}</h3>
                  <p>{el.info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Brand/> */}
    </div>
  );
};

export default aboutus;
