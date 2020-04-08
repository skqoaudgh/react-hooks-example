import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
}

function App() {
  const bogForLife = () => console.log('plz don`t leave');
  useBeforeLeave(bogForLife);
  return (
    <div>

    </div>
  );
}

export default App;
