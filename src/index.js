import React, { StrictMode } from 'react';
import { render as renderReactDom } from 'react-dom';
import './styles.scss';

export const root = document.createElement('div');

export const render = () =>
  renderReactDom(
    <StrictMode>
      <p>Micro Frontend B</p>
    </StrictMode>,
    root
  );
