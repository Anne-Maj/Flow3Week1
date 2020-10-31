import React from 'react';
import './App.css';
import person, {males, females} from "./file2";
import './file3.js';

function App2() {
  const { firstName, email } = person;
  const personV2 = person;
  personV2.friends = [...males, ...females];
  personV2.phone = 123456;
  return (
    <div>
       <h2>Exercise 2</h2>
          <p>Name: {firstName} Email: {email}</p>
          {console.log([...males, ...females])}
          {console.log([...males, "Kurt", "Helle", ...females, "Tina"])}
          {console.log(personV2)}
      
  
    </div>
  );
}


export default App2;