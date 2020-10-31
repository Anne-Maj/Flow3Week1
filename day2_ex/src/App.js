
import './App.css';
import React, { useState } from 'react';




function Counter(props) {
  const [value, setValue] = useState(props.startValue); 

  function Increment() {
     setValue(value + props.incrementValue);
  }
  function Decrement() {
    setValue(value - props.decrementValue);
 }


  return (
    <div>
      <h1>Exercise 1</h1>
      <button onClick={Decrement}>Decrement</button>
      {value}
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

function App(){
  return (
    <Counter startValue={10} incrementValue={5} decrementValue={2}/>
  )
}

export default App;
