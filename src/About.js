import HeroSection from './component/HeroSection'
import { useProductContext } from './context/productcontext';

const About = () => {

  const {myName}=useProductContext();
  const data={
    name:`Digital Mart E-commerce`,
  };
  return (
    <>
      {myName}
      <HeroSection myData={data}/>
    </>
  )
}

export default About
