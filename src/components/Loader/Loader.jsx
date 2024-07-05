import React from 'react';
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.Loader}>
    <Circles height="80" width="80" color="blue" ariaLabel="loading" />
  </div>
);
