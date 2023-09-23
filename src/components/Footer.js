import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const FooterContentHighlighter = styled.span`
  color: red;
  font-weight: bold;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Arm<FooterContentHighlighter>Tech</FooterContentHighlighter></p>
    </FooterContainer>
  );
};

export default Footer;
