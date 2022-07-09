import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const index = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: '-100%',
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        h12.current,
        {
          x: '-100%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        h13.current,
        {
          x: '-100%',
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        myimageref.current,
        {
          x: '200%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-light-primary dark:text-dark-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋 <br /> My Name is <br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          muhammad alif
        </h1>
        <h3
          ref={h13}
          className="w-full text-2xl text-light-primary dark:text-dark-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          fullstack web developer
        </h3>
      </div>
      <div className="mt-5 md:mt-0 w-48">
        <img
          src="https://avatars.githubusercontent.com/u/39686865?s=400&u=fc2b6fb61457a7a234a221ca52cbefa4387c554d&v=4"
          alt="Altrawan"
          ref={myimageref}
          className="w-1/2 md:ml-auto w-100 border-8 border-light-primary dark:border-dark-primary rounded-full bg-slate-500"
        />
      </div>
    </main>
  );
};

export default index;
