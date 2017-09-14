import React from 'react';
import { render } from 'react-dom';
import style from './css/style.css'
import { SocketProvider, socketConnect } from 'socket.io-react';
import io from 'socket.io-client';
var socket = io();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: props.messages
    }
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this._handleMessageEvent = this._handleMessageEvent.bind(this)
  }
  componentDidMount(){
    this._handleMessageEvent()
  }

  _handleMessageEvent(){
    socket.on('message', (inboundMessage) => {
      this.props.newMessage({user: 'test_user', message: inboundMessage})
    })
  }

  handleOnChange(ev) {
    this.setState({ input: ev.target.value })
  }

  handleOnSubmit(ev) {
    ev.preventDefault()
    socket.emit('message', { message: this.state.input })

    this.setState({ input: '' })
  }

  render() {
    return (
      <div className="user-bubble">
        <input type="text" onChange={this.handleOnChange} value={this.state.input} />
        <button type="submit" onClick={this.handleOnSubmit}> Send </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
