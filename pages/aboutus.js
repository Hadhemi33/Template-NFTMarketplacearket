import React from "react";
import Image from "next/image";

import Style from "../styles/aboutus.module.css";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    { name: "Niamh O'Shea", position: "Co-founder and Chief Executive" ,
// images.founder1
},
    { name: "Danien Jame", position: "Co-founder and Chief Executive" },
    { name: "Orla Dwyer", position: "Co-founder , Chairman" },
    { name: "Dara Frazier", position: "Co-founder Chief Strategy Officer" },
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
            <Image src={images.hero2} alt="aboutus_hero" />
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
          <div className={Style.aboutus_box_founder_box}></div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
