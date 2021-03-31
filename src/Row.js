import React from 'react'

function Row({ movieList }) {
  return (
    <div>
      {movieList.map(movie => (
        <h1>{movie.title}</h1>
      ))}
    </div>
  )
}

export default Row
