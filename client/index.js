import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import SongList from './components/SongList';
import App from './components/app';
import CreateSong from './components/CreateSong';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
const client = new ApolloClient({});

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route exact path="/" component={App} />
      <Route exact path="/songs" component={SongList} />
      <Route path="/songs/create" component={CreateSong} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));
