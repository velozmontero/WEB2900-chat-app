import React from 'react';
import OutlineInput from './OutlineInput';
import CircleButton from './CircleButton';

const Chat = (props) => {
  const { messages, text, onChange, onSendMessage, onKeyPress } = props;

  return (
    <div className="chat-container">
      <div style={{
        height: '400px',
        backgroundColor: '#ff0000'
      }}>
        {
          messages.map((message) => (
            <div key={message._id}>{message.text}</div>
          ))
        }
      </div>

      <OutlineInput 
        text={text}
        onChange={onChange} 
        onKeyPress={onKeyPress}
      />

      <CircleButton 
        onSendMessage={onSendMessage}
      />
    </div>
  )
}

export default Chat;