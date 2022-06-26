import styled from 'styled-components'
import React from 'react'

import header from './header.jpeg'

export const Header = () => {
const Title = styled.h1`
  font-size: 1.5em;
  font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
  text-align: right;
  color: white;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  padding-right: 6em;
  background-image: url(${header});
  background-repeat: no-repeat;
  background-size: 100%;
`;

const Img = styled.image`
    align: left; 
`

// Use Title and Wrapper like any other React component – except they're styled!
return(
  <Wrapper>
    <Img></Img>
    <Title>
      Avni
    </Title>
  </Wrapper>
);
}
