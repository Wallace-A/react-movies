import React, { useState, useEffect } from 'react'
import db from "../Firebase";
import { Link, useHistory } from "react-router-dom";
import Row from "../Row";

function Search({movies}) {

  
  //load search from query in url
  return ( 
    <div>
      <h1>SEACH RESULTS</h1>
      <Row movieList={movies}/>
    </div>
  )
}

export default Search
