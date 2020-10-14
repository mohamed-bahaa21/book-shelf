import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// components
import BookList from "./components/BookList"
import AddBook from "./components/AddBook"

import "./App.css"

// apollo client setup
const client = new ApolloClient({
  uri: "https://book-shelf-server.herokuapp.com/___graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>

        <div className="app-header">
          <BookList />
          <AddBook />
        </div>

      </ApolloProvider>
    );
  }
}

export default App;
