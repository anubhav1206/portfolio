import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Section,
  SectionText,
  SectionMain,
  SectionMagic,
} from '../../styles/GlobalComponents';
import { LeftSection, HeroImage } from './HeroStyles';

const Hero = (props) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Reduce the initial delay to 0.5 seconds before showing content
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Section
      row
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px', // Add padding around the content
      }}
    >
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="animation-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} // Reduce the duration to 0.5 seconds
            style={{ marginRight: '20px' }} // Add margin to separate text and image
          >
            <LeftSection>
              <SectionMain main center>
                Welcome To <br />
                My Portfolio Website
              </SectionMain>
              <SectionText>
                Hey, I'm Anubhav. I'm a full stack{' '}
                <SectionMagic>developer</SectionMagic>.
              </SectionText>
            </LeftSection>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="animation-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }} // Reduce the duration to 0.5 seconds
          >
            <HeroImage
              src="/images/picture.jpg"
              alt="Compressed Image"
              className="hero-image"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Hero;
