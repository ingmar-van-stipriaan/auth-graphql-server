import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<App />}></Route>
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
