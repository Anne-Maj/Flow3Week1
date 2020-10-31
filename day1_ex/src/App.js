import React from 'react';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person, {males, females} from "./file2";
import './file3.js';





function App() {
  const { firstName, email } = person;
 
  return (
    <div>
      <h2>Exercise 1</h2>
    <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>


 
      

  
    </div>
  );
}


export default App;