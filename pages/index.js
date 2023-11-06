import React from "react";
// INTERNAL IMPORT


import Style from "../styles/index.module.css";
import {
 
    AudioLive,
} from "../components/componentsindex";
 // Correction ici : chemin correct pour AudioLive

const Home = () => {
  
    return (
        <div className={Style.homePage}>
            <AudioLive />
        </div>
    );
};

export default Home;


