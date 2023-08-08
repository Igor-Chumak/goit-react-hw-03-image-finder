// import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  id,
  imageURL,
  largeImageURL,
  showLargeImage,
}) => {
  const handleShowLargeImage = () => {
    showLargeImage(largeImageURL);
  };

  return (
    <li className={css.ImageGalleryItem} onClick={handleShowLargeImage}>
      <img
        src={imageURL}
        alt={`icon with id: ${id}`}
        className={css.ImageGalleryItem_image}
      />
    </li>
  );
};
