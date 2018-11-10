import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { App, SongList } from './components/';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import './style/style.css';
const client = new ApolloClient({ dataIdFromObject: o => o.id });
//uses id to allow apollo store to keep track of data

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route exact path="/" component={App} />
      <Route path="/songs" component={SongList} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
