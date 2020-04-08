import React from "react";

const useNotification = (title, options) => {
  if(!("Notification" in window)) {
    return;
  }
  const fireNotif = () => {
    if(Notification.permission !== 'granted') {
      Notification.requestPermission()
        .then(permission => {
          if(permission === 'granted') {
            new Notification(title, options);
          } else {
            return;
          }
        });
    } else {
      new Notification(title, options);
    }
  }
  return fireNotif;
}

function App() {
  const trigger = useNotification("I love you", {
    body: "I love Yura"
  });

  return (
    <div>
      <button onClick={trigger}>Hello</button>
    </div>
  );
}

export default App;
