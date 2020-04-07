import React, { Component, useState } from 'react';

// 클래스형 컴포넌트 : 상태정의 - modify 함수 작성 - 이벤트 bind
class App extends Component {
  state = {
    count: 0
  };

  modify = (n) => {
    this.setState({
      count: n
    });
  }

  render() {
    const { count } = this.state;
    return (
      <React.Fragment>
        <div>{count}</div>
        <button onClick={() => this.modify(count + 1)}>Add</button>
      </React.Fragment>
    )
  }
}

// 함수형 컴포넌트 : useState 함수로 [상태초기값, Reducer]를 받음
function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </React.Fragment>
  );
}


export default App;
