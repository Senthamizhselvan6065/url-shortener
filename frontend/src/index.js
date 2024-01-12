import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApi from './helper/ContextApi';
import {Toaster} from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ContextApi>
      <Toaster position='top-center' reverseOrder='false'></Toaster>
        <App />
    </ContextApi>
  </>
);