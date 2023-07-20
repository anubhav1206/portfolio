import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {  
    --purple: rgb(123, 31, 162);
    --violet: rgb(103, 58, 183);
    --pink: rgb(244, 143, 177);

    --red: #F31559;
    --magenta: #FF52A2;
    --orange: #FFB07F;

    --green: #1A5D1A;
    --yellow: #F1C93B;
    --blue: #78C1F3;
  }
  
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    
    to {
      background-position: -200% center;
    }
  }
  
  @keyframes scale {
    from, to {
      transform: scale(0);
    }
    
    50% {
      transform: scale(1);
    }
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(180deg);
    }
  }
  
  body {
    background-color: rgb(10, 10, 10);
    display: grid;
    height: 100vh;
    margin: 0px;
    place-items: center;
  }
  
  h1 {
    color: white;
    font-family: "Rubik", sans-serif;
    font-size: clamp(2em, 2vw, 4em);
    font-weight: 400;
    margin: 0px;
    padding: 20px;
    text-align: center;
  }
  
  h1 > .magic {
    display: inline-block;
    position: relative;
  }
  
  h1 > .magic > .magic-star {
    --size: clamp(20px, 1.5vw, 30px);
    
    animation: scale 700ms ease forwards;
    display: block;
    height: var(--size);
    left: var(--star-left);
    position: absolute;
    top: var(--star-top);
    width: var(--size);
  }
  

  h1 > .magic > .magic-text {
    animation: background-pan 3s linear infinite;
    background: linear-gradient(
      to right,
      var(--purple),
      var(--violet),
      var(--pink),
      var(--purple)
    );
    background-size: 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    white-space: nowrap;
  }
  


  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }

`;

export default GlobalStyles;