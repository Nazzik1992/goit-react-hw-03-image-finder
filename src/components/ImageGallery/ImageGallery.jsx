import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import style from 'components/Styles.module.css';
export default function ImageGallery({ state, showModal }) {
  return (
    <>
      <ul className={style.ImageGallery}>
        {state.images.map(e => {
          return <ImageGalleryItem key={e.id} showModal={showModal} e={e} />;
        })}
      </ul>
    </>
  );
}
