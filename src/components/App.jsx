import  {Searchbar} from 'components/Searchbar/Searchbar';
import React, { Component } from 'react';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {imagesArr }  from './Api/API';
import { Button } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import style from 'components/Styles.module.css';

export default class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    totalHits: 0,
    isLoading: false,
    showBtn: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page, images } = this.state;

    if (search !== prevState.search || page !== prevState.page) {
      this.setState({ isLoading: true });
      imagesArr(search, page).then(response => {
        if (!response.hits.length) {
          alert(`This request ${search} is not found`);
          return;
        }
        this.setState({
          images: [...images, ...response.hits],
          showBtn: this.state.page < Math.ceil(response.totalHits / 12),
          isLoading: false,
        });
      });
    }
  }

  handleSearch = text => {
    this.setState({
      search: text,
      images: [],
      page: 1,
      totalHits: 0,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading, showBtn } = this.state;
    const { handleSearch, handleLoadMore } = this;

    return (
      <>
      <div className={style.App}>
        <Searchbar onSubmit={handleSearch} />
        {isLoading && <Loader />}
        {images && <ImageGallery images={images} />}
        {showBtn && <Button onLoadMore={handleLoadMore} />}
        </div>
      </>
    );
  }
}
