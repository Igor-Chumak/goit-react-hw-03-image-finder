import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    inputValue: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // const form = e.currentTarget;
    // if (this.state.name === '' || this.state.value === '') {
    //   return;
    // }
    // if (
    //   !this.props.onSubmit({
    //     name: this.state.name.trim(),
    //     number: this.state.number,
    //   })
    // ) {
    //   let valueTrim = e.currentTarget.name.value.trim();
    //   e.currentTarget.name.value = valueTrim;
    //   return;
    // }
    // form.reset();
    // this.resetState();
  };

  handleChangeInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.SearchFormButton_label}>Search</span>
          </button>
          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChangeInput}
          />
        </form>
      </header>
    );
  }
}
