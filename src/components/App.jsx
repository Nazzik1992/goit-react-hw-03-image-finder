import Searchbar from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import * as API from './Api/API';
import style from 'components/Styles.module.css';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

export class App extends Component {
  state = {
    search: ' ',
    images: [],
    btn: false,
    totalHits: 0,
    loading: false,
    modal: false,
    modalImgId: [],
  };

  page = 1;
  resetCounter() {
    this.page = 1;
  }
  inciseCounter() {
    this.page += 1;
  }
  toggleLoading() {
    this.setState(prevStats => {
      return { loading: !prevStats.loading };
    });
  }
  makeSearch = async values => {
    const Arr = await API.imagesArr(values);
    this.addFirstSearchToState(Arr, values);
    this.resetCounter();
    window.scrollTo(0, 0);
  };

  addFirstSearchToState(Arr, values) {
    this.setState({
      images: Arr.hits,
      search: values,
      totalHits: Arr.totalHits,
      btn: true,
    });
  }
  addNextSearchToState(Arr) {
    this.setState(prevStats => ({
      images: [...prevStats.images, ...Arr.hits],
      totalHits: Arr.totalHits,
    }));
  }
  nextSearch = async () => {
    this.toggleLoading();
    this.inciseCounter();
    const Arr = await API.NextSearch(this.state, this.page);
    this.toggleLoading();
    this.btnCheck();
    this.addNextSearchToState(Arr);
  };

  btnCheck() {
    if (this.state.totalHits <= 12 * this.page) {
      this.setState({ btn: false });
    }
  }
  showModal = id => {
    const modalImgId = this.state.images.filter(e => Number(id) === e.id);
    this.setState({ modal: true, modalImgId });
  };
  CloseModal = () => {
    this.setState({ modal: false });
  };
  render() {
    const { images, loading, btn, modal, modalImgId, search } = this.state;

    return (
      <>
        <div className={style.App}>
          <Searchbar onSubmit={this.makeSearch} search={search} />
          {images.length > 0 ? (
            <ImageGallery
              state={this.state}
              showModal={this.showModal}
            ></ImageGallery>
          ) : null}
          {btn ? <Button loading={loading} onClick={this.nextSearch} /> : null}
          {modal ? (
            <Modal
              modalImgId={modalImgId}
              modal={modal}
              closeModal={this.CloseModal}
            />
          ) : null}
        </div>
      </>
    );
  }
}