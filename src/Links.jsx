import React from 'react';
import styled from 'styled-components';

function SocialImg({ src, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <SocImg src={src} alt="Social Media Icon" />
    </a>
  );
}

const SocImg = styled.img`
cursor: pointer;
&&:hover{
    opacity: 0.7;
}
`

export default SocialImg;