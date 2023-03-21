import style from 'components/Styles.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }


  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    };

  }

  handleBackdropClick = e => {
    if(e.currenTarget !== e.target) {
      
      this.props.closeModal();
  };
  }
 

  render() {
    const { tags, modalImg } = this.props;

    return createPortal(
      <div
      className={style.Overlay}
      onClick={this.handleBackdropClick}
    >
      <div className={style.Modal}>
        <img
          src={modalImg}
          alt={tags}
          width="600"
          height="800"
        />
      </div>
    </div>,
      modalRoot
    );
  }
}







