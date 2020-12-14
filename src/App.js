import React from "react";

import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import request from "./request";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={request.fetchTop}></Row>
      <Row title="Action" fetchUrl={request.fetchAction}></Row>
      <Row title="Comedy" fetchUrl={request.fetchComedy}></Row>
      <Row title="Horror" fetchUrl={request.fetchHorror}></Row>
      <Row title="Romentic" fetchUrl={request.fetchRomance}></Row>
      <Row title="Documetries" fetchUrl={request.fetchDocu}></Row>
    </div>
  );
}

export default App;
