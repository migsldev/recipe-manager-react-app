import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Wrapper>
      {children}
      <BackToTopButton onClick={scrollToTop}>Back to Top</BackToTopButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Layout;
