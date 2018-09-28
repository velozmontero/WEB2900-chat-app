import React, { Component } from 'react';
import Chat from './components/Chat';

class App extends Component {
  state = {
    messages: [
      {
        id: 1,
        text: 'I love coding',
      },
      {
        id: 2,
        text: 'I love coding',
      },
      {
        id: 3,
        text: 'I love coding',
      },
      {
        id: 4,
        text: 'I love coding',
      },
    ],
    text: ''
  }

  onChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  onSendMessage = () => {
    this.setState({
      messages: this.state.messages.concat([{
        id: 5,
        text: this.state.text
      }]),
      text: ''
    });
  }

  render() {
    return (
      <div className="App">
        <Chat 
          {...this.state}
          onChange={this.onChange}
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }
}

export default App;
