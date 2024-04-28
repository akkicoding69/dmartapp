import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from "../styles/Button"

const HeroSection = ({myData}) => {
  console.log(myData);
  const {name}=myData;
  return <Wrapper>
      <div className='container'>
        <div className='grid grid-two-column'>
            <div className='hero-section-data'>
                <p className='intro-data'>Welcome to</p>
                <h1>{name}</h1>
                <p>Digital Mart is a ecommerce website specializing in selling various types of electronics. 
                As technology advances, more and more ecommerce website are popping up with the latest gadgets to offer their customers.
                 From smartphones and laptops to audio equipment and smart home devices, 
                 Digital Mart cater to consumers seeking the latest technological innovations and solutions. 
                 Digital Mart provide a convenient platform for customers to explore, compare, 
                 and purchase electronic products, online. Whether you’re looking for cutting-edge gadgets or
                  reliable everyday devices,
                  Digital Mart are the go-to destination for tech enthusiasts!
                </p>
                <NavLink>
                    <Button>Shop now</Button>
                </NavLink>
            </div>
            <div className='hero-section-image'>
                <figure>
                    <img src="images/hero2.png" 
                    alt="hero-section" 
                    className='img-style'
                    />
                </figure>
            </div>
        </div>
      </div>
    </Wrapper>;
};

const Wrapper = styled.section`
  padding: 12rem 0;

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .hero-section-data {
    p {
      margin: 2rem 0;
    }

    h1 {
      text-transform: capitalize;
      font-weight: bold;
    }

    .intro-data {
      margin-bottom: 0;
    }
  }

  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;

    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
  .img-style {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }

    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }
  }
`;

export default HeroSection;
