import React, { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine)
  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    }
  }, []);
  return status;
}
 
function App() {
  const handleNetworkChange = (online) => {
    console.log(online ? 'we just went online' : 'we are offline');
  }
  const status = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>{status ? 'On' : 'Off'}</h1>
    </div>
  );
}

export default App;
