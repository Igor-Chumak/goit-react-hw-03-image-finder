import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Vortex } from 'react-loader-spinner';

import { ImageGallery, Searchbar } from 'components';

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

  // formatDataState = dataForm => {
  //   Object.keys(dataForm).map(i => (dataForm[i] = dataForm[i].trim()));
  // };

  // searchContact = ({ name }) => {
  //   const { contacts } = this.state;
  //   return contacts.find(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
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

  // createContactsToList = () => {
  //   return this.state.contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(this.state.filter)
  //   );
  // };

  // deleteContactsFromList = idItem => {
  //   return this.setState(prevValue => ({
  //     contacts: prevValue.contacts.filter(item => item.id !== idItem),
  //   }));
  // };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <main>
          <ImageGallery />
        </main>
      </>
    );
  }
}
