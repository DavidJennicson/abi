import React, { useEffect, useState } from 'react';

const NotificationsComponent = () => {
  const [notification, setNotification] = useState('');
  useEffect(() => {
    const eventSource = new EventSource('http://localhost:5000/notifications');
    eventSource.onmessage = (event) => {
      setNotification(event.data);
    };
    return () => {
      eventSource.close();
    };
  }, []);
  return (
    <div>
      <h2>Server-Sent Events (SSE) Notifications:</h2>
      <p>{notification}</p>
    </div>
  );
};
export default NotificationsComponent;