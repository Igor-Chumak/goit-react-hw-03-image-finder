import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { nanoid } from 'nanoid';
import {
  Button,
  ImageGallery,
  Loader,
  Modal,
  Searchbar,
  getDataQuery,
} from 'components';

Notify.init({
  width: '500px',
  fontSize: '25px',
  position: 'center-top',
  timeout: '2000',
  messageMaxLength: 150,
  distance: '20px',
  showOnlyTheLastOne: true,
  clickToClose: true,
  closeButton: true,
  opacity: 1,
  warning: {
    background: '#af3e86',
    textColor: '#fff',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: 'rgba(0, 0, 0, 0.466)',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
    fontAwesomeIconColor: 'rgba(0,0,0,1)',
    backOverlayColor: 'rgba(238,191,49,0.2)',
  },
});

export class App extends Component {
  state = {
    images: [],
    searchValue: 'css hghgh',
    page: 1,
    toShowLargeImage: '',
    showLoadMore: false,
    showLoader: false,
    showModal: false,
  };

  async componentDidMount() {
    const { searchValue, page } = this.state;

    // if (prevState.page !== page || prevState.searchValue !== searchValue) {
    try {
      this.setState({ showLoader: true });
      const dataSearchResults = await getDataQuery(searchValue, page);
      console.log('dataSearchResults :>> ', dataSearchResults);
      if (dataSearchResults.length === 0) {
        throw new Error('Sorry, no results found !');
      }
      this.setState({
        images: [...this.state.images, ...dataSearchResults],
        showLoadMore: dataSearchResults.length === 12,
      });
    } catch (error) {
      this.setState({ showLoadMore: false });
      Notify.warning(error.message);
    } finally {
      this.setState({ showLoader: false });
    }
  }
  // }

  async componentDidUpdate(prevState) {}

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
          {this.state.showLoadMore && <Button />}
          {this.state.showLoader && <Loader />}
          {this.state.showModal && <Modal />}
        </main>
      </>
    );
  }
}
