import react from "react";
import reactDom from "react-dom";
import React, { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
