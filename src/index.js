import React, { StrictMode } from 'react';
import { render as renderReactDom } from 'react-dom';
import './styles.scss';

if (!window.MFE) window.MFE = {};

const root = document.createElement('div');

window.MFE.B = {
  root,
  render: () =>
    renderReactDom(
      <StrictMode>
        <p>Micro Frontend B</p>
      </StrictMode>,
      root
    ),
};
