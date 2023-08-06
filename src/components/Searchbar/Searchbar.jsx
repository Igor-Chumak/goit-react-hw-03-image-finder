import { Component } from 'react';
import PropTypes from 'prop-types';
import {} from 'components';

export class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
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
      <form className="form" onSubmit={this.handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handleChangeInput}
        />
      </form>
    );
  }
}
