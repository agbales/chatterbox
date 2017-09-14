import React from 'react';
import { render } from 'react-dom';
import style from './css/style.css'
import { SocketProvider, socketConnect } from 'socket.io-react';
import io from 'socket.io-client';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: 'chatterbox'
    }
  }
  componentDidMount() {
  }
  sendMessage() {
    socket.emit('message', 'Hello world!');
  }
  updateWords(event) {
    console.log('hi..' + this.state.words)
    this.setState({ words: event.target.value })
  }
  render() {
    return (
      <div className="user-bubble">
        <input type="text" value={this.state.words} onChange={this.updateWords} />
        <button onClick={this.sendMessage}>
          Send!
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
