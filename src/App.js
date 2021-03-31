import React, { useEffect, useState } from "react";
import './App.css';



function App() {
  const API_KEY = `24450edec1c9dd57fb63c5afeb55d0f3`;
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${"star-wars"}`; 

  useEffect( () => {
    getMovies();
  },[]);

  const getMovies = async () => {
    const response = await fetch(SEARCH_URL);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div className="App">

    </div>
  );
}

export default App;
