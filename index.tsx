import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './homePage';
import NavBar from './navBar';
import Footer from './footer';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <div className="container">
        <NavBar
          brandName="MHVillage"
          contactPage="Contact"
          searchPage="Search"
        />
        <Home />
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>
);
