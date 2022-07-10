import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from '../components';

export const Layout = ({ children }) => {
  return (
    <div className="bg-light-mode dark:bg-dark-mode">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.func,
};

Layout.defaultProps = {
  children: PropTypes.func,
};
