import axios from 'axios';
// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
// 4867f71c2cc3334fef3a71f8c4706576

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTranding = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=
4867f71c2cc3334fef3a71f8c4706576`);
  return results;
};

// /movie/${id}?api_key=

export const getMovie = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=
4867f71c2cc3334fef3a71f8c4706576`);
  return data;
};

export const getSearchMovie = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=4867f71c2cc3334fef3a71f8c4706576&query=${query}
`);
  return results;
};
