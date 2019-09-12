import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";

import App from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    //make a request to the same origin that the browser is on
    //it is safe to send cookies across the network
    credentials: "same-origin"
  }
});
const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Header />
        <Route path="/" component={App}></Route>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
