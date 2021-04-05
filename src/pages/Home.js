import React, { useEffect, useState } from "react";
//import Row from "./Row";
import { Link, useHistory } from "react-router-dom";
import Banner from "../Banner";

function Home() {
  return (
    <div>
      <h1>Home Channel</h1>
      <Link to={{
        pathname: "/Search",
        search: "?sort=name"}}  
        className="button-search" >SEARCHING FOR THING</Link>
    </div>
  )
}

export default Home
