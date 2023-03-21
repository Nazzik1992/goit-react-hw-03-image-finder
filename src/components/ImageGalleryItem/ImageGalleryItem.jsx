import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import style from 'components/Styles.module.css';


export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;
    const { isModalOpen } = this.state;
    const { toggleModal } = this;

    return (
      <li className={style.ImageGalleryItem}>
        <img 
        className={style.ImageGalleryItemImage}
          src={webformatURL}
          alt={tags}
          width="430"
          height="210"
          loading="lazy"
          onClick={toggleModal}
        />

        {isModalOpen && (
          <Modal
            modalImg={largeImageURL}
            tags={tags}
            closeModal={toggleModal}
          />
        )}
      </li>
    );
  }
}



