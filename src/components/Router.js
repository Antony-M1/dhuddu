import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Colorify from './Colorify';
import Facebook from './Facebook';
import ShareWave from './ShareWave';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/" element={<App />} />
          <Route path="/colorify" element={<Colorify />} />
          <Route path="/sharewave" element={<ShareWave />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router