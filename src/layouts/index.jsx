/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';
import { useDarkMode } from '../hooks/useDarkMode';

export const Layout = ({ children }) => {
  useDarkMode();
  return (
    <div className="bg-light-mode dark:bg-dark-mode transition duration-500">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.array,
};

Layout.defaultProps = {
  children: PropTypes.array,
};
