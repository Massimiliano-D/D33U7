import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import fantasy from "./components/assets/fantasy.json";
import React from "react";
// import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <Container>
      {" "}
      <MyNav />
      <Welcome />
      {/* <AllTheBooks /> */}
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  );
}

export default App;
