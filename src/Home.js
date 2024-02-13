import React from 'react';
import HeroSection from './component/HeroSection';
import Services from './component/Services';
import Trusted from './component/Trusted';
import FeatureProducts from './component/FeatureProducts';

const Home = () => {
  const data={
    name:"D🔺Mart",
  };
  return (
    <>
    <HeroSection myData={data}/>
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    </>
  )
};

export default Home
