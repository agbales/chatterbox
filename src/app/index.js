import React from 'react';
import { render } from 'react-dom';
import style from './css/style.css'

class App extends React.Component {
  render() {
    return (
      <div className="user-bubble">
        <h1>Howdy.</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
