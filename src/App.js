import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/home/Home';
import Details from './components/details/Details';
import store from './redux/configureStore';
import './App.css';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: <Home />,
  },
  {
    path: '/coins/:id',
    name: 'Coins',
    component: <Details />,
  },
];

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        {routes.map(({ path, component }) => (
          <Route path={path} exact key={path}>{component}</Route>
        ))}
      </Switch>
    </Router>
  </Provider>
);

export default App;
