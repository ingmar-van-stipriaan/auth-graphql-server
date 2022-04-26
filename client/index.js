import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { HashRouter } from "react-router-dom";

import App from "./components/App";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
