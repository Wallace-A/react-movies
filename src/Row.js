import React from 'react'
import "./Row.css"

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ movieList }) {
  
  return (
    <div className="movie_rows">
      {movieList.map(movie => (
        <div className="movie_container">
          {/* <h1>{movie.title}</h1>
          <p>{movie.overview}</p> */}
          <img
            key={movie.id}
            className={"row_posterLarge"}
            src={`${base_url}${movie.poster_path}`} 
            alt={movie.title}
          />
        </div>
      ))}
    </div>
      
    
  )
}

export default Row
