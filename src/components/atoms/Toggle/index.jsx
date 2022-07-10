import React from 'react';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import { useDarkMode } from '../../../hooks/useDarkMode';

export const Toggle = () => {
  const [colorTheme, setColorTheme] = useDarkMode();

  return (
    <div
      className="fixed right-4 bottom-2/4 h-12 w-12 box-border m-0 p-0 bg-dark-primary dark:bg-light-primary z-10 text-light-mode dark:text-dark-mode cursor-pointer text-base text-center rounded-full flex justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      onClick={() => setColorTheme(colorTheme)}
    >
      {colorTheme === 'light' ? <FaRegSun /> : <FaRegMoon />}
    </div>
  );
};
