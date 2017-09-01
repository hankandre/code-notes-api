import React from 'react';
import './styles.styl';

export default ({ style }) => (
  <div
    style={Object.assign(style, {
      height: '500px'
    })}
  >
    <h1>stuff</h1>
  </div>
);
