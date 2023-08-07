import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ imagesList }) => {
  // const { imagesList } = this.props;
  console.log('imagesList :>> ', imagesList);
  return (
    <ul className={css.ImageGallery}>
      {imagesList.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imagesList: PropTypes.arrayOf(PropTypes.object),
};
