import React from 'react';
import { Section, SectionText, SectionTextOne, SectionTitle, SectionMain, SectionMagic} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionMain  main center>
          Welcome To <br />
          My Portfolio Website
        </SectionMain>
            <SectionText>  
              I am  <SectionMagic>
                    Anubhav Adhikari
            </SectionMagic>, a frontend developer capable of building visually appealing and resposnsive websites that serve a purpose.
            I am also an open source contributor having contributed to 60+ projects.  
            </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;