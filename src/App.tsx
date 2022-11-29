import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [query, setQuery] = useState('');
  // const insensitiveQuery = query.toLowerCase().trim();
  // const visibleMovies = [...moviesFromServer].filter(
  //   movie => {
  //     if (movie.title.toLowerCase().includes(insensitiveQuery)
  //       || movie.description.toLowerCase().includes(insensitiveQuery)) {
  //       return movie;
  //     }

  //     return null;
  //   },
  // );
  const copmairingItems = (
    item1: string,
  ) => item1.toLowerCase().trim().includes(query.toLowerCase());

  const visibleMovies = moviesFromServer.filter(
    movie => copmairingItems(movie.title)
    || copmairingItems(movie.description),
  );

  // const visibleMovies = moviesFromServer.filter(
  //   movie => movie.title.toLowerCase().includes(insensitiveQuery)
  //   || movie.description.toLowerCase().includes(insensitiveQuery),
  // );

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
