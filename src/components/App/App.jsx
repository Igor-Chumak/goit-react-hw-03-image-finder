import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, darkTheme, lightTheme, theme } from 'styles';
import { Vortex } from 'react-loader-spinner';

import { Header, Section, CreateThemeSwitcher, Searchbar } from 'components';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    page: 1,
    toShowLargeImage: '',
    showModal: false,
    showLoader: false,
    showLoadMore: false,
    modeTheme: 'light',
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
      <ThemeProvider
        theme={{
          ...theme,
          ...(this.state.modeTheme === 'light' ? lightTheme : darkTheme),
        }}
      >
        <GlobalStyles />
        <Header>
          <Searchbar onSubmit={this.onSubmit} />
          <CreateThemeSwitcher
            handleToggleTheme={this.handleToggleTheme}
            modeTheme={this.state.modeTheme === 'light' ? false : true}
          />
        </Header>
        <main>
          <Section>
            <ImageGallery />
            {/* {this.state.notification && (
              <Notification message={this.state.notification}>
                <OkButton type="button" onClick={this.handleOkButton}>
                  OK
                </OkButton>
              </Notification>
            )} */}
          </Section>
          {/* <Section title="Contacts">
            <Filter handleChangeInputFilter={this.handleChangeInputFilter} />
            <ContactList
              contactsToList={this.createContactsToList()}
              deleteContactsFromList={this.deleteContactsFromList}
            />
          </Section> */}
        </main>
      </ThemeProvider>
    );
  }
}
