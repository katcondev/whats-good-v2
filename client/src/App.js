import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About/index'
import Navbar from './components/Menu';
import Support from './components/Support';
import Old from './pages/SearchBusinesses'
import Search from './components/Search'
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.scss'
import Footer from './components/Footer';


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers, 
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink), 
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
  <Router>
     <>
      <Navbar className='navbar-wg' />
      <Switch>
      <Route exact path="/">
        <Redirect to="/About" />
      </Route>
        <Route path="/Search" component={Search} /> 
        <Route path="/Old" component={Old} /> 
        <Route path="/About" component={About} /> 
        <Route path="/Support" component={Support} /> 
        <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        
      </Switch>
      <Footer></Footer>
    </>
   </Router>
    </ApolloProvider>
  );
}



export default App;
