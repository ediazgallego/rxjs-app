import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import FirstPerson from './components/FirstPerson';
import React from 'react';
import SecondPerson from './components/SecondPerson';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} >
              <Route index path='/' element={<FirstPerson />} />
              <Route index path='first-person' element={<FirstPerson />} />
              <Route path="second-person" element={<SecondPerson />} />
            </Route>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
