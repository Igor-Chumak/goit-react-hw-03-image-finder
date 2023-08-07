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
    images: [
      {
        id: 1853305,
        pageURL: 'https://pixabay.com/photos/coding-programming-css-1853305/',
        type: 'photo',
        tags: 'coding, programming, css',
        previewURL:
          'https://cdn.pixabay.com/photo/2016/11/23/14/45/coding-1853305_150.jpg',
        previewWidth: 150,
        previewHeight: 99,
        webformatURL:
          'https://pixabay.com/get/g6550eea2230d0e3a927361fcbb34422ebe819f69da1a246e3eb02aa0d816be8c18a80ba44a223d320813fd87c6ad078091ba13518e5f5a1945520f8e3a639d53_640.jpg',
        webformatWidth: 640,
        webformatHeight: 426,
        largeImageURL:
          'https://pixabay.com/get/g8728b3d72867da58ab514ef1ed9d67327d5df9b7a37df15e05d56a7fa09d3bf0d11f528c2173c7fec8714fc3292c9b9cecba99304240433776b76e9e9cc3cb70_1280.jpg',
        imageWidth: 5472,
        imageHeight: 3648,
        imageSize: 4082878,
        views: 219321,
        downloads: 130797,
        collections: 293,
        likes: 240,
        comments: 38,
        user_id: 2286921,
        user: 'Pexels',
        userImageURL:
          'https://cdn.pixabay.com/user/2016/03/26/22-06-36-459_250x250.jpg',
      },
    ],
    searchValue: 'css',
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
      // console.log('dataSearchResults :>> ', dataSearchResults);
      if (dataSearchResults.length === 0) {
        throw new Error('Sorry, no results found !');
      }
      // this.setState({
      //   images: [...this.state.images, ...dataSearchResults],
      //   showLoadMore: dataSearchResults.length === 12,
      // });
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
    if (!dataForm) {
      console.log('image should be reset', dataForm);
      return;
    }

    if (dataForm === this.props.searchValue) {
      return;
    }

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

  render() {
    return (
      <>
        <Searchbar onSubmit={this.onSubmit} />
        <main>
          <ImageGallery imagesList={this.state.images} />
          {this.state.showLoadMore && <Button />}
          {this.state.showLoader && <Loader />}
          {this.state.showModal && <Modal />}
        </main>
      </>
    );
  }
}
