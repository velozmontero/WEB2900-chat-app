import React from 'react';
import OutlineInput from './OutlineInput';
import CircleButton from './CircleButton';

const Chat = (props) => {
  const { messages, text, onChange, onSendMessage, onKeyPress, onMessagesContainerRef } = props;

  return (
    <div className="chat-container">
      <div className="chat-header">
        General Chat
      </div>

      <div ref={onMessagesContainerRef} className="chat-messages cool-scroll-bar">
        {
          messages.map((message) => (
            <div className="bubble-left" key={message._id}>{message.text}</div>
          ))
        }
      </div>

      <div className="chat-input-btn-container">
        <OutlineInput
          text={text}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />

        <CircleButton
          onSendMessage={onSendMessage}
        />
      </div>
      
    </div>
  )
}

export default Chat;