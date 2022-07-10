import React from 'react';
import { Layout } from '../layouts';
import { Hero, Technologies, Projects, ScrollToTop } from '../components';

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Technologies />
        <Projects />
      </Layout>
      <ScrollToTop />
    </>
  );
};

export default Home;
