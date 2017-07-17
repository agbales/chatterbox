import React from 'react';
import { render } from 'react-dom';
import style from './css/style.css'
import { SocketProvider, socketConnect } from 'socket.io-react';
import io from 'socket.io-client';

class App extends React.Component {
  componentDidMount() {
  }
  sendMessage() {
    socket.emit('message', 'Hello world!');
  }
  render() {
    return (
      <div className="user-bubble">
        <h1>Howdy.</h1>
        <button onClick={this.sendMessage}>
          Send!
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
