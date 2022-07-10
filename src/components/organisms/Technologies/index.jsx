import React from 'react';
import {
  html,
  css,
  javascript,
  react,
  nextjs,
  redux,
  bootstrap,
  tailwind,
  sass,
  gsap,
  socketio,
  vuejs,
  nodejs,
  express,
  redis,
  php,
  laravel,
  codeigniter,
} from '../../../assets';

export const Technologies = () => {
  return (
    <main className="container section mx-auto max-width pt-10 pb-20 mt-28">
      <section>
        <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize text-center">
          my tech stack
        </h1>
        <p className="text-xl text-dark-content md:text-1xl xl:text-2xl py-2 text-center">
          Technologies I&apos;ve been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img src={html} title="HTML" alt="HTML" />
        <img src={css} title="CSS" alt="CSS" />
        <img src={javascript} title="JavaScript" alt="Javascript" />
        <img src={react} title="React" alt="React" />
        <img src={nextjs} title="Next.js" alt="Next.js" />
        <img src={redux} title="Redux" alt="Redux" />
        <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
        <img src={tailwind} title="Tailwind CSS" alt="Tailwind CSS" />
        <img src={sass} title="SASS" alt="SASS" />
        <img src={gsap} title="GSAP" alt="GSAP" />
        <img src={socketio} title="Socket.io" alt="Socket.io" />
        <img src={vuejs} title="Vue.js" alt="Vue.js" />
        <img src={nodejs} title="Node.js" alt="Node.js" />
        <img src={express} title="Express.js" alt="Express.js" />
        <img src={redis} title="Redis" alt="Redis" />
        <img src={php} title="PHP" alt="PHP" />
        <img src={laravel} title="Laravel" alt="Laravel" />
        <img src={codeigniter} title="Codeigniter" alt="Codeigniter" />
      </section>
    </main>
  );
};
