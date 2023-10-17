import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Colorify from './Colorify';
import Facebook from './Facebook';
import { Face } from '@mui/icons-material';

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/" element={<App />} />
          <Route path="/colorify" element={<Colorify />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router