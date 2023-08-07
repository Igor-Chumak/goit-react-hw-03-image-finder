import PropTypes from 'prop-types';
import axios from 'axios';
const API_KEY = '37780751-c0706f5026557b01bc2eaa9ec';
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getDataQuery = async (searchData, page = 1) => {
  const dataAPI = await axios.get(`?q=${searchData}&page=${page}`);
  return dataAPI.data.hits;
};

getDataQuery.propType = {
  searchData: PropTypes.string.isRequired,
  page: PropTypes.string,
};

// export const getImages = async (query, page) => {
//   const { data } = await axios.get(`search?query=${query}&page=${page}`);

//   return data;
// };

// const BASE_URL = 'https://pixabay.com/api/';

// async function fetchData(searchValue, page) {
//   const searchParams = new URLSearchParams({
//     q: searchValue,
//     page: page,
//     key: API_KEY,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     per_page: 12,
//   });

//   const response = await axios.get(`${BASE_URL}?${searchParams}`);
//   return response.data.hits;
// }
