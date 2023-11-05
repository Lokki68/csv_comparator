import styled from "styled-components";

const Footer = () => {
  return (
      <FooterComponent className='fixed bottom-0 left-0 w-full flex justify-center items-center p-4 bg-gray-800 text-white' >
        <h2>&copy; Lokki Development</h2>
      </FooterComponent >
  );
};

export default Footer;

const FooterComponent = styled.footer `
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  background-color: #1f2937;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding:  .25rem 5px;
  
  h2 {
    font-size: .6rem;
    text-transform: uppercase;
  }
`