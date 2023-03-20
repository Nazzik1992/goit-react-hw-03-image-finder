import style from 'components/Styles.module.css';
import { Component } from 'react';

export default class Modal extends Component {
  stats = {};

  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
    document.querySelector('ul').style = 'overflow: hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
    document.querySelector('ul').style = 'overflow: visible';
  }
  handleEsc = e => {
    if (e.key === 'Escape') {
      this.props.closeModal();
    }
  };
  handeleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  stopScroll() {
    window.scrollTo(0, 0);
  }
  render() {
    const { modalImgId } = this.props;
    const [img] = modalImgId;
    return (
      <div
        key={img.id}
        className={style.Overlay}
        onClick={this.handeleBackDropClick}
      >
        <div className={style.Modal}>
          <img
            src={img.largeImageURL}
            alt={img.tags}
            width="600"
            height="800"
          />
        </div>
      </div>
    );
  }
}