import React from 'react';
import { Header } from '../components';

export default function layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
