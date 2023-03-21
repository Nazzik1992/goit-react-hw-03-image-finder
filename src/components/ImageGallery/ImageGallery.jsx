import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from 'components/Styles.module.css';

export const ImageGallery = ({ images }) => (
  <ul className={style.ImageGallery}>
    {images.map(({ id, webformatURL, largeImageURL, tags }) => (
      <ImageGalleryItem
        key={id}
        webformatURL={webformatURL}
        largeImageURL={largeImageURL}
        tags={tags} />
    ))}
  </ul>
);

