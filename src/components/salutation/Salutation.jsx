import React, { useState, useEffect } from 'react';

const Salutation = () => {
  const [message, setMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessage((prevMessage) => (prevMessage + 1) % 3);
    }, 2000);

    return () => clearInterval(interval);
    }, []);

    const getMessageText = () => {
        if (message === 0) {
          return 'HELLO!';
        } else if (message === 1) {
          return 'HOLA!';
        } else {
          return 'OI!';
        }
    };

  return <div>{getMessageText()}</div>;
};

export default Salutation;