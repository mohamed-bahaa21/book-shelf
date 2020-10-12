import React, {Component} from 'react';

// components
import BookList from "./components/BookList"

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Book Shelf</h1>
        <BookList></BookList>
      </div>
    );
  }
}

export default App;
