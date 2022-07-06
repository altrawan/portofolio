import React from 'react';
import { Navbar } from '../components';

export default function layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
