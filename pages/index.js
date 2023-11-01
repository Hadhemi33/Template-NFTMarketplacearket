import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { 
  HeroSection, 
  Service, 
  BigNFTSlider, 
  Subscribe,
  Title,
  Category,
  Filter,
  AudioLive,
} from "../components/componentIndex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
      <Title 
        heading="Featured NFT" 
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <Title 
        heading="Browse by category" 
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;