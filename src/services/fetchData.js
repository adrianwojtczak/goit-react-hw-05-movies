import axios from 'axios';

const API_KEY = 'dd28573eee75132a5c1e09d16e28974f';

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
