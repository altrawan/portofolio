import React, { useRef, useLayoutEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll';

export const ScrollToTop = () => {
  const ref = useRef(null);
  const scrollY = useScrollPosition(60);

  useLayoutEffect(() => {
    if (scrollY > 150) {
      ref.current.style.display = 'flex';
    } else {
      ref.current.style.display = 'none';
    }
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div
      ref={ref}
      onClick={scrollToTop}
      className="fixed w-12 h-12 box-border m-0 p-0 right-4 bottom-4 text-2xl text-light-mode dark:text-dark-mode bg-dark-primary dark:bg-light-primary cursor-pointer hidden justify-center items-center rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >
      &#x2191;
    </div>
  );
};
