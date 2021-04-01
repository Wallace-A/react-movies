import React, { useEffect, useState } from "react";
import Row from "./Row";
import Nav from "./Nav";
import Banner from "./Banner";
import './App.css';

function App() {
  const API_KEY = `24450edec1c9dd57fb63c5afeb55d0f3`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${"star-wars"}`; 

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([])
  useEffect( () => {
    getMovies();
  },[]);

  const getMovies = async () => {
    const response = await fetch(SEARCH_URL);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };
  
  return (
    <div className="App">
      <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <Banner />
      <Row movieList={movies}/>
    </div>
  );
}

export default App;
