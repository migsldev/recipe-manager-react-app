import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Search from '../components/Search';

export const Welcome = () => {
  return (
    <Container>
      <Search />
      <ChefImage src="/images/chef.svg" alt="Chef Image" />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const ChefImage = styled.img`
  margin-top: 0.2rem; // Space between the button and the image
  width: 400px; // Set appropriate size
  height: auto;
`;
