import React, { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <div id="counter-value">{counter}</div>
      <button onClick={() => setCounter(counter + 1)} id="increment-button">Increment</button>
      <button disabled={!counter} onClick={() => setCounter(counter - 1)} id="decrement-button">Decrement</button>
    </div>
  )
}

export default App
