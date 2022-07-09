import React from 'react';
import { Header, Footer } from '../components';

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
