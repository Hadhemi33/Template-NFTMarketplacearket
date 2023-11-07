import React from "react";
// INTERNAL IMPORT


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
  Collection,
  AudioLive,
  NFTCard,
  Slider,
  Brand,
} from "../components/componentIndex";

const Home = () => {
  
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Slider />


      
      <Title
        heading="Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive />
     
      <Title 
        heading="New Collection" 
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />  
      <Collection />
      <Title 
        heading="Featured NFT" 
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories"
      />
      <Category />
      <Subscribe />
      <Brand/>


    </div>
  );
};

export default Home;


