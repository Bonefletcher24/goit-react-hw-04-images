// src/components/ImageGalleryItem/ImageGalleryItem.jsx
import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, onClick }) => (
  <li className={css.ImageGalleryItem} onClick={() => onClick(image.largeImageURL)}>
    <img src={image.webformatURL} alt="" className={css.ImageGalleryItemImage} />
  </li>
);
