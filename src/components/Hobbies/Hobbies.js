import React from 'react';

import { Section, SectionTitle, SectionText, SectionMagic } from '../../styles/GlobalComponents';

const Hobbies = () => (
  <Section>
    <SectionTitle>Hobbies and Side Hustles</SectionTitle>
    <SectionText>
    Beyond my development work, I'm a dedicated gamer and technical writer. 
    I occasionally stream Valorant and Fortnite on <SectionMagic>Twitch</SectionMagic>, showcasing my gaming skills. 
    As a tech writer on <a href='https://anubhav1206.hashnode.dev'></a> Hashnode, I'm a trusted source for web development and tech insights. 
    I explain complex concepts clearly and have received positive feedback. Whether coding or gaming, 
    I tackle both with enthusiasm, dedication, and problem-solving skills. I aim to keep contributing 
    to the tech and gaming community through my content and live streams, fostering knowledge-sharing. 
    Check out my <SectionMagic>Hashnode</SectionMagic> posts and drop by my Twitch channel to watch some gameplay. 😉
    </SectionText>
  </Section>
);

export default Hobbies;
