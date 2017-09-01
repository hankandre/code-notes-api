import React from 'react';
import Home from './Home';
import glamorous, { ThemeProvider } from 'glamorous';
import { AppContainer } from 'react-hot-loader';

const CoolDiv = glamorous.div({
  display: 'grid',
  gridTemplateColumns: '.166666667fr 1fr .166666667fr',
  gridTemplateRows: '50px auto 50px',
  gridTemplateAreas: `
    "header header header"
    ". main ."
    "footer footer footer"
  `,
  justifyItems: 'center',
  alignItems: 'middle',
  minHeight: '100vh'
});

const App = () => (
  <CoolDiv>
    <header style={{ gridArea: 'header' }}>
      <h1>Header</h1>
    </header>
    <Home style={{ gridArea: 'main' }} />
    <footer
      style={{
        gridArea: 'footer / col2-start / last-line / col2-end'
      }}
    >
      Header
    </footer>
  </CoolDiv>
);

export default App;
