import React, { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current) {
      element.current.requestFullscreen();
      callback(true);
    }
  }
  const exitFull = () => {
    if(document.fullscreen) {
      document.exitFullscreen();
      callback(false);
    }
  }
  return {element, triggerFull, exitFull}
};

function App() {
  const onFullS = (isFull) => {
    console.log(isFull ? 'we are full' : 'we are small');
  }

  const {element, triggerFull, exitFull} = useFullScreen(onFullS);
  return (
    <div>
      <img ref={element} src='http://img.etoday.co.kr/pto_db/2018/01/20180118101220_1176870_710_340.jpg' alt=""></img>
      <button onClick={triggerFull}>Make fullscreen</button>
      <button onClick={exitFull}>Exit fullscreen</button>
    </div>
  );
}

export default App;
