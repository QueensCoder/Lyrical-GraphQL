import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import {
  App,
  SongList,
  CreateSong,
  SongDetail,
  LyricCreate
} from './components/';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './style/style.css';

const client = new ApolloClient({ dataIdFromObject: o => o.id });
//uses id to allow apollo store to keep track of data

const Root = () => (
  <ApolloProvider client={client}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={SongList} />
      </Route>
      <Route path="/songs/new" component={CreateSong} />
      <Route path="/songs/:id" component={SongDetail} />
      <Route exact path="songs/:id/addlyric" componnent={LyricCreate} />
    </Router>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector('#root'));

//indexroute is nest inside of a route to send client to
//component when the path in the route is hit
