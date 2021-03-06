import React from 'react';
import { Layout } from '../layouts';
import { Timeline } from '../components';

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            about me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            consectetur beatae laboriosam dolor a nostrum possimus rem atque
            magnam inventore. Nam facilis blanditiis ipsam accusamus quo magnam
            assumenda, ullam quaerat.
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            work experience
          </h1>
          <Timeline
            position="Staff IT"
            company="Universitas Siliwangi"
            location="Tasikmalaya"
            type="Intership"
            duration="May 2018 - Jul 2018"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            education
          </h1>
          <Timeline
            position="Rekayasa Perangkat Lunak"
            company="SMK Negeri 1 Kawali"
            location="Ciamis"
            type="Full Time"
            duration="Jul 2016 - May 2019"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
