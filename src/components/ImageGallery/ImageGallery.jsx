// import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

export const ImageGallery = () => {
  return (
    <ul className={css.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
};
