import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if(typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if(willUpdate) {
      setValue(value);
    }
  }
  return { value, onChange };
};

function App() {
  const maxLen = (value) => value.length <= 10 && !value.includes('@');

  const name = useInput('Mr.', maxLen);

  return (
    <React.Fragment>
     <input type="text" placeholder="Name" {...name} />
    </React.Fragment>
  );
}


export default App;
