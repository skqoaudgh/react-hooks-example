import React, { useEffect, useRef } from "react";

const useFadeIn = (duration=1, delay=0) => {
  const element = useRef();
  useEffect(() => {
    if(element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return {ref: element, style: {opacity: 0}};
};

function App() {
  const el = useFadeIn(2,2);
  const el2 = useFadeIn(5,5);

  return (
    <div>
      <h1 {...el}>HI</h1>
      <h1 {...el2}>Cada World!</h1>
    </div>
  );
}

export default App;
