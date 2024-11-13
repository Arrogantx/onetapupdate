import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <ParallaxProvider>
            <App />
          </ParallaxProvider>
        </BrowserRouter>
      </HelmetProvider>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}