import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Contact = () => {

  const {isAuthenticated, user} = useAuth0();
  
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Contact page</h2>

      <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.702487379937!2d78.96786817513075!3d21.08454168057873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4959495b0eb9f%3A0xa8bb03909e166a9f!2sDMart%20Hingna%20Nagpur!5e0!3m2!1sen!2sin!4v1688759090453!5m2!1sen!2sin" 
      width="100%" 
      height="400" 
      title="map"
      style={{border:0}}
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">Map</iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xnqkqpvw" method="POST" className="contact-inputs">
          <input type="text" placeholder="username" name="username" value={isAuthenticated ? user.name : ""} required autoComplete="off"/>

          <input type="email" name="Email" placeholder="Email" autoComplete="off" value={isAuthenticated ? user.email : ""} required/>

            <textarea name="Message"  cols="30" rows="10" required autoComplete="off" 
            placeholder="Enter your message"></textarea>

            <input type="submit" value="Send"/>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
