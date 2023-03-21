
import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '33372794-081d1fa879bae651f1e0d4c06',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const imagesArr = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;

  return data;
};




