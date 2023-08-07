// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, webformatURL, largeImageURL }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img src={webformatURL} alt="" className={css.ImageGalleryItem_image} />
    </li>
  );
};
