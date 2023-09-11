import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: --var(background1);

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }

  /* Add a media query for even smaller screens, e.g., smartphones in portrait mode */
  @media screen and (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Div1 = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Div2 = styled.div`
  display: flex;
  list-style: none;

  li {
    margin-right: 2rem;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;

    li {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
`;

export const Div3 = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 2rem;
  color: #f0f0f0;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    background: transparent;
    background: rgb(238, 174, 202);
    background: linear-gradient(105deg, rgba(238, 174, 202, 1) 0%, rgba(156, 91, 226, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-10px);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  /* Add a media query for smaller font size on smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const mainHeader = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  /* Add a media query for smaller font size on smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SocialIcons = styled.a`
  margin-right: 1rem;
  color: #f0f0f0;
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    background: transparent;
    background: rgb(238, 174, 202);
    background: linear-gradient(105deg, rgba(238, 174, 202, 1) 0%, rgba(156, 91, 226, 1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  /* Add a media query for smaller font size on smaller screens */
  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
