import Acomplishments from '../components/Acomplishments/Acomplishments';
import Hero from '../components/Hero/Hero';
import Hobbies from '../components/Hobbies/Hobbies';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    
    <Layout>
      <Section grid>
        <Hero />
        
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
      <Hobbies/>
    </Layout>
  );
};

export default Home;
