import React, { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import Search from "./components/Search";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./theme/theme";
import { ThemeProvider } from "styled-components";
////////////////////////////////import////////////////////////////////////////// 


const MOVIE_API_URL = "https://www.omdbapi.com/?s=woman&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const Appengin = () => {

   ////////////////////////////////////////////////////////////////////
// const [save , setSave]=useState([]);
const addMovieFromWatchlist = (movie) => {
  dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie });
  
};

  ////////////////////////////////dark&&light//////////////////////////////////////////
  const [theme, setTheme] = useState("light");
  const savelocaltheme = () => {
    localStorage.setItem("theme", JSON.stringify(theme));
  };
  const getlocalstoragetheme = () => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", JSON.stringify([]));
    } else {
      let themelocal = JSON.parse(localStorage.getItem("theme"));
      setTheme(themelocal);
    }
  };

  useEffect(() => {
    getlocalstoragetheme();
  }, []);
  useEffect(() => {
    savelocaltheme();
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }
  ////////////////////////////////dark&&light//////////////////////////////////////////
  ////////////////////////////////dispatch//////////////////////////////////////////
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then((response) => response.json())
      .then((jsonResponse) => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };
////////////////////////////////disrpatch//////////////////////////////////////////
  const { movies, errorMessage, loading } = state;
  const MoviesCount = movies.length;
 
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="App">
        <Header text="Movie - Search" toggleTheme={toggleTheme} movies={movies}  />
        <Search search={search} />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <p className="App-intro ">Find your favorite movies in this app</p>
          <p style={{ paddingLeft: "20px" }}>
            Search Result :{" "}
            <span
              className={`badge ${
                MoviesCount === 0 ? "badge-danger" : "badge-primary"
              }`}
            >
              {MoviesCount}
            </span>
          </p>
        </div>

        <div className="movies">
          {loading && !errorMessage ? (
            <span>loading... </span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <Movie key={`${index}-${movie.Title}`} movie={movie}  addMovieFromWatchlist={addMovieFromWatchlist} />
            ))
          )}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Appengin;
