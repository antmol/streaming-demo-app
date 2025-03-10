import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Movie {
  title: string;
  description: string;
  releaseYear: number;
  images: {
    'Poster Art': {
      url: string;
      width: number;
      height: number;
    };
  };
  programType: string;
}

interface MoviesState {
  movies: Movie[];
  series: Movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MoviesState = {
  movies: [],
  series: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get('https://api.npoint.io/546fd85e8651aa8e648a');
  return response.data.entries;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.filter((movie: Movie) => movie.programType === 'movie');
        state.series = action.payload.filter((movie: Movie) => movie.programType === 'series');
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch movies';
      });
  },
});

export default moviesSlice.reducer;