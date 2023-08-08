import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imagesList, showLargeImage }) => {
  return (
    <ul className={css.ImageGallery}>
      {imagesList.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          imageURL={webformatURL}
          largeImageURL={largeImageURL}
          showLargeImage={showLargeImage}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.object),
};
