import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const sayHello = () => console.log('Hello');
  useEffect(() => {
    sayHello();
  }, [count]); // count의 숫자가 바뀌면 실행. count2의 숫자가 바뀌면 실행되지 않음

  const incrementCount = () => setCount(count + 1);
  const incrementCount2 = () => setCount2(count2 + 1);

  return (
    <React.Fragment>
      <div>{count} - {count2}</div>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={incrementCount2}>Increment2</button>
    </React.Fragment>
  );
}


export default App;
