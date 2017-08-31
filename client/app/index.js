import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

const Home = () => <h1>Hello Home!</h1>;

const Thing = () => <h1>Hello Thing!</h1>;

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/something" component={Thing} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
