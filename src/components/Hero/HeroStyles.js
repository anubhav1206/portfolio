import styled from 'styled-components';

export const HeroImage = styled.img`
  width: 502px; /* Set the width of the image */
  height: 258px; /* Set the height of the image */
  border-radius: 2%; /* Add border-radius for a circular image */
  cursor: pointer; /* Add cursor pointer for hover effect */
  transition: transform 0.2s ease-in-out; /* Add smooth transition for hover effect */

  @media (max-width: 768px) {
    /* Adjust the styles for smaller screens */
    width: 100%; /* Make the image width 100% for smaller screens */
    height: auto; /* Allow the height to adjust proportionally */
    margin-left: 0; /* Remove the left margin for smaller screens */
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center content */
  align-items: center; /* Center content horizontally */
  margin-top: 40px; /* Increase margin to create more space between sections */

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-top: 60px; /* Increase margin for smaller screens */
    margin: 0 auto;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;
