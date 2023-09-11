import React, { useEffect, useState } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { motion } from 'framer-motion';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // If the user has scrolled at least 1px, set isVisible to true after 1 second.
        setTimeout(() => {
          setIsVisible(true);
        }, 1000);
        window.removeEventListener('scroll', handleScroll); // Remove the scroll listener once triggered.
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup: remove the scroll listener on unmount.
    };
  }, []);

  return (
    <Section nopadding id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <GridContainer>
        {projects.map((p, i, id) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.source}>Code</ExternalLinks>
              {p.id === 1 ? (
                <ExternalLinks href={p.visit}>Install</ExternalLinks>
              ) : (
                <ExternalLinks href={p.visit}>Visit</ExternalLinks>
              )}
            </UtilityList>

          </BlogCard>
        );
      })}
        </GridContainer>
      </motion.div>
    </Section>
  );
};

export default Projects;
