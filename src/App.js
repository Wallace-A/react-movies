import React, { useEffect, useState } from "react";
// PAGES
import Home from "./pages/Home";
import Search from "./pages/Search";
// OUTER COMPONENTS
import Nav from "./Nav";

import './App.css';
import db from "./Firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const API_KEY = `24450edec1c9dd57fb63c5afeb55d0f3`;

  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([])

  //when app loads listen to database and fectch new movies
  useEffect( () => {
   db.collection("watched_movies").onSnapshot(snapshot => {
    console.log(snapshot.docs.map(doc => doc.data()));
   });
  },[]);

  const getMovies = async () => {
    //get search string from url
    console.log(searchQuery);
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`);
    const data = await response.json();
    setMovies(data.results);
    console.log(data.results);
  };
  
  const updateSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="App">
      <Router>
        {/* render nav bar */}
        {/* move all this into the navbar? */}
        <Nav searchQuery={searchQuery} updateSearchQuery={updateSearchQuery} getMovies={getMovies}/>
        <Switch>
         
          {/* render routes */}
          <Route path="/" exact component={Home} />
          <Route path="/search"><Search movies={movies}/></Route> 
        
          
          {/* render footer */}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
