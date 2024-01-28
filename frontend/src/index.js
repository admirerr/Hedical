import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import {  faCalendar} from "@fortawesome/free-solid-svg-icons";
// import { faCalendar } from '@fortawesome/free-duotone-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Add the icons to the library
library.add(faPhone);
library.add(faCirclePlus);
library.add(faClock);
library.add(faCalendar);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
