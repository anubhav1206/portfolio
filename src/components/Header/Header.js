import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { ImTwitch } from 'react-icons/im';
import { motion } from 'framer-motion'; // Import Framer Motion

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  mainHeader,
} from './HeaderStyles';
import { SectionMagic } from '../../styles/GlobalComponents';

const Header = () => (
  // Wrap the entire component with motion.div and apply animation
  <motion.div
    initial={{ opacity: 0, y: -20 }} // Initial state (hidden and slightly above)
    animate={{ opacity: 1, y: 0 }} // Animation state (visible and at its original position)
    transition={{ duration: 0.5 }} // Transition settings
  >
    <Container>
      <Div1>
        <Link href="/">
          <mainHeader>
            <a
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '32px',
                color: '#F0F0F0',
              }}
            >
              Portfolio
            </a>
          </mainHeader>
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
          <Link href="https://www.twitch.tv/crashedfps" target="_blank">
            <NavLink>
              Twitch <ImTwitch size="1.5rem" />
            </NavLink>
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
          <AiOutlineTwitter size="3rem" />
        </SocialIcons>
      </Div3>
    </Container>
  </motion.div>
);

export default Header;
