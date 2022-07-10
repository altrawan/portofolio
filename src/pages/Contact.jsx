import React from 'react';
import { Layout } from '../layouts';

const Contact = () => {
  return (
    <Layout>
      <main className="container mx-auto section max-width section">
        <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-primary dark:text-light-primary font-semibold md:font-bold">
          For any questions please drop a mail
        </h1>
        <h3 className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6">
          <a href="mailto:altrawan@gmail.com">altrawan@gmail.com</a>
        </h3>
      </main>
    </Layout>
  );
};

export default Contact;
