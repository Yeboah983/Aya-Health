import React from 'react'

const ChatBubble = ({ text, isUser }) => {
  const style = isUser ? "bg-blue-100 self-end" : "bg-gray-200 self-start";
  return (
    <div className={`p-3 rounded-xl max-w-xs mb-2 ${style}`}>
      <p>{text}</p>
    </div>
  );
};
export default ChatBubble;
