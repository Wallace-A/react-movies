import React, { useEffect, useState } from "react";
import Row from "../Row";
import { Link, useHistory } from "react-router-dom";
import db from "../Firebase"
import Banner from "../Banner";

function Home() {
  const [watchedMovies, setWatchedMovies] = useState([]);
  useEffect( () => {
    // setWatchedMovies(db.collection("watched_movies").doc);
    return db.collection("watched_movies").onSnapshot(snapshot => {
     setWatchedMovies(snapshot.docs.map(doc => doc.data()));
     console.log(watchedMovies);
    });
  
   },[]);

  return (
    <div>
      <h1>Home Channel</h1>
      <Link to={{
        pathname: "/Search",
        search: "?sort=name"}}  
        className="button-search" >SEARCHING FOR THING
      </Link>
      <Row movieList={watchedMovies}/>

    </div>
  )
}

export default Home
