import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Vortex } from 'react-loader-spinner';

import { Button, ImageGallery, Searchbar } from 'components';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    toShowLargeImage: '',
    showModal: false,
    showLoader: false,
    showLoadMore: false,
  };

  handleToggleTheme = () => {
    this.setState(prevState => {
      return {
        modeTheme: prevState.modeTheme === 'light' ? 'dark' : 'light',
      };
    });
  };

  onSubmit = dataForm => {
    // this.formatDataState(dataForm);
    // if (!dataForm.name) {
    //   // console.log('dataForm', dataForm);
    //   return;
    // }
    // const searchResult = this.searchContact(dataForm);
    // if (!searchResult) {
    //   this.setState(prevState => ({
    //     contacts: [...prevState.contacts, { id: nanoid(), ...dataForm }],
    //   }));
    //   return true;
    // } else {
    //   this.setState({
    //     notification: `${searchResult.name} : ${searchResult.number} is already in contacts`,
    //   });
    //   return false;
    // }
  };

  // handleOkButton = () => {
  //   this.setState({
  //     notification: '',
  //   });
  // };

  // handleChangeInputFilter = e => {
  //   const inputFilter = document.getElementById('filter');
  //   const { value } = e.target;
  //   let valueNormalize = value.toLowerCase();
  //   inputFilter.value = valueNormalize;
  //   this.setState({
  //     filter: valueNormalize,
  //   });
  // };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <main>
          <ImageGallery />
          <Button />
        </main>
      </>
    );
  }
}
