import React, { StrictMode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import * as styles from './styles.scss';

if (!window.MFE) window.MFE = {};

const root = document.createElement('div');

window.MFE.B = {
  root,
  render: () =>
    render(
      <StrictMode>
        <p className={styles.text}>Micro Frontend B</p>
      </StrictMode>,
      root
    ),
  unmount: () => unmountComponentAtNode(root),
};
