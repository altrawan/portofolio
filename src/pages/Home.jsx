import React from 'react';
import Layout from '../layouts';
import { Hero, Technologies, Projects } from '../components';

function Home() {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Projects />
    </Layout>
  );
}

export default Home;
