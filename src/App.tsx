import React from 'react';

import { BigBtn } from "./components/big-btn/bigBtn";
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<BigBtn />} />
      <Route path="*" element={<div style={{ color: 'white' }} >404</div>} />
    </Routes>
  );
}