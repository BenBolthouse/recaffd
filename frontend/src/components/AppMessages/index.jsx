import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDidMountEffect } from '../../hooks';

// Scoped styles
import './styles.css';

const AppMessages = () => {
  // Hooks
  const queues = useSelector(s => s.queues);

  // State
  const [messageVisual, setMessageIsVisible] = useState('hidden');
  const [message, setMessage] = useState({
    message: '',
    type: 'none',
  });

  // Finds new messages and renders them to the message container in the DOM
  useDidMountEffect(() => {
    const queueLen = queues.appMessages.length;
    const lastMsg = queueLen ? queues.appMessages[queueLen - 1] : { message: '' };
    const isNewMsg = message.message !== lastMsg.message;
    if (isNewMsg || messageVisual === 'hidden') {
      setMessage(lastMsg);
      setMessageIsVisible('show');
      setTimeout(() => setMessageIsVisible('hidden'), 3000);
    }
  }, [queues]);

  return (
    <div className='app-messages-wrapper'>
      <div className='app-messages page-width'>
        <div className={`app-messages__message ${message.type} ${messageVisual}`}>
          {message.message}
        </div>
      </div>
    </div>
  );
};

export default AppMessages;
