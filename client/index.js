import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import ApolloClient from "apollo-boost";
import { Routes, Route, HashRouter } from "react-router-dom";
import App from "./components/App";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

const client = new ApolloClient({
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <HashRouter>
      <ApolloProvider client={client}>
        <Header />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="login" element={<LoginForm />}></Route>
        </Routes>
      </ApolloProvider>
    </HashRouter>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
