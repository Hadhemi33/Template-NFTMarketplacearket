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
  NFTCard,
<<<<<<< HEAD
  Collection
=======
>>>>>>> feb9428a8c88d42529c1c8b7e1b32da0cc845f56
} from "../components/componentIndex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
<<<<<<< HEAD
      <Title 
        heading="New Collection" 
        paragraph="Discover the most outstanding NFTs in all topics of life"
      />  
      <Collection />
      <Title 
        heading="Featured NFT" 
=======
      <Title
        heading="Featured NFT"
>>>>>>> feb9428a8c88d42529c1c8b7e1b32da0cc845f56
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
    </div>
  );
};

export default Home;
