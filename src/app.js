import React from 'react';
import { render } from 'react-dom';
import Home from './Home';

const App = () => (
  <div>
    <Home />
  </div>
);

render(<App />, document.getElementById('root'));
