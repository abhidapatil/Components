
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Alerts from './Alerts';
import Accordion from './Accordion';
import Toggle from './Toggle';
import Badge from './Badge';
import Button from './Button';
import Pill from './Pill';
import Breadcrub from './Breadcrub';
import ButtonG from './ButtonG';
import Nesting from './Nesting';


import Nav from './Nav';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Alerts />
    <Accordion />
    <Toggle />
    <Badge />
    <Button />
    <Pill />
    <Breadcrub />
    <ButtonG />
    <Nesting />
  
  
    <Nav />
    
  
  </StrictMode>
);
