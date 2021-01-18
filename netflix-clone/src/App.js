import React from "react";
import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import Nav from "./Nav";
import requests from "./requests";

function App() {
  return (
    <div className="App">
   <Nav/>
   <Banner/>
    <Row title= "NETFLIX ORIGINALS"  fetchurl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title= "Trending Now" fetchurl={requests.fetchTrending}/>
    <Row title= "Top Rated" fetchurl={requests.fetchTopRated}/>
    <Row title= "Action Movies" fetchurl={requests.fetchActionMovies}/>
    <Row title= "Comedy Movies" fetchurl={requests.fetchComedyMovies}/>
    <Row title= "Horror Movies" fetchurl={requests.fetchHorrorMovies}/>
    <Row title= "Romance Movies" fetchurl={requests.fetchRomanceMovies}/>
    <Row title= "Documentaries" fetchurl={requests.fetchDocumentariesMovies}/>

    </div>
  );
}

export default App;
