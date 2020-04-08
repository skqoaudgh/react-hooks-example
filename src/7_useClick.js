import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      element.current.addEventListener("click", onClick); // 컴포넌트가 UnMount될 떄, 이벤트리스너를 지워줘야함.
    }
    return () => { // 함수를 return하면 컴포넌트가 UnMount될 때 그 함수가 실행됨
      if(element.current) {
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);

  return element;
}

function App() {
  const sayHello = () => console.log('Hello!');
  const title = useClick(sayHello);

  return (
    <div>
      <h1 ref={title}>HI</h1>
    </div>
  );
}


export default App;
