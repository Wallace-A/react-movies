import React from 'react'
import "./Row.css"
import db from "./Firebase";
import firebase from "firebase";
const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ movieList }) {
  
  const movieClicked = (e) => {
    const movieData = e.target.dataset;
    //add to firestore
    db.collection("watched_movies").add({
      title: movieData.title,
      poster_path: movieData.poster,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
  }

  return (
    <div className="movie_rows">
      {movieList && movieList.map(movie => (
        <div className="movie_container" onClick={movieClicked}>
          {/* <h1>{movie.title}</h1>
          <p>{movie.overview}</p> */}
          <img
            key={movie.id}
            className={"row_posterLarge"}
            src={`${base_url}${movie.poster_path}`} 
            alt={movie.title}
            data-title = {movie.title}
            data-poster={movie.poster_path}
          />
        </div>
      ))}
    </div>
      
    
  )
}

export default Row
