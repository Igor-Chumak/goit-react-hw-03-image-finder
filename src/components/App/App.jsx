import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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

const INIT_STATE = {
  images: [],
  searchValue: '',
  page: 1,
  showLargeImage: '',
  showLoadMore: false,
  showLoader: false,
  showModal: false,
};

export class App extends Component {
  state = { ...INIT_STATE };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    //
    // console.log('did update :>> ');
    // console.log('prevState.page :>> ', prevState.page, 'page :>> ', page);
    // console.log(
    //   'prevState.searchValue :>> ',
    //   prevState.searchValue,
    //   'searchValue :>> ',
    //   searchValue
    // );
    //
    if (prevState.page !== page || prevState.searchValue !== searchValue) {
      if (searchValue) {
        try {
          this.setState({ showLoader: true });
          //
          console.error('query :>> ', searchValue, 'page:>> ', page);
          //
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
          // console.log('finally :>> ');
          this.setState({ showLoader: false });
        }
      }
    }
  }

  onSubmit = dataForm => {
    // console.log('dataForm in:>> ', dataForm);
    // if (!dataForm) {
    //   console.log('image should be reset', dataForm);
    //   this.setState({ ...INIT_STATE });
    //   return;
    // }
    if (dataForm === this.state.searchValue) {
      // console.log('repeat request: ', dataForm);
      return;
    }
    // console.log('dataForm Out:>> ', dataForm);
    this.setState({
      images: [],
      searchValue: dataForm,
      page: 1,
      toShowLargeImage: '',
      showLoadMore: false,
      showLoader: false,
      showModal: false,
    });
  };

  handleLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <main>
          <ImageGallery imagesList={this.state.images} />
          {this.state.showLoadMore && <Button click={this.handleLoadMore} />}
          {this.state.showLoader && <Loader />}
          {this.state.showModal && <Modal />}
        </main>
      </>
    );
  }
}
