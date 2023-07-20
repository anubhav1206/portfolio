import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import {ImTwitch} from 'react-icons/im';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons} from './HeaderStyles';
import { SectionMagic } from '../../styles/GlobalComponents';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <SectionMagic>Portfolio</SectionMagic>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="https://www.twitch.tv/crashedfps" target='_blank'>
          <NavLink>Twitch <ImTwitch size="1.5rem" /></NavLink>
        </Link>
      </li>         
    </Div2>
      <Div3>
        <SocialIcons href="https://www.github.com/anubhav1206">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/anubhav-adhikari-a3565b176/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://twitter.com/crasheddfps">
          <AiOutlineTwitter size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
