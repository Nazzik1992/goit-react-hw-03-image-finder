import { Component } from 'react';
import style from 'components/Styles.module.css';

export class Searchbar extends Component {
  state = {
    query: '',
    page: 1,
  };

  handleSearch = elem => {
    this.setState({ query: elem.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    const { onSubmit } = this.props;

    if (query.trim() === '') {
      return alert('Please enter a search something');
    }
    onSubmit(query);
  };
  render() {
    const { handleSearch, handleSubmit } = this;
    const { query } = this.state;

    return (
      <header className={style.Searchbar}>
        <form onSubmit={handleSubmit} className={style.SearchForm}>
          <button type='submit' className={style.SearchFormButton}>
          <span className={style.SearchFormButtonLabel}></span>
          </button>
          <input
               value={query}
               onChange={handleSearch}
               type="text"
               autocomplete="off"
               className={style.SearchFormInput}
               placeholder="Search images and photos">
            
          </input>
        </form>
      </header>
    );
  }
}
