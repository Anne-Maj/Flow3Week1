
import './App.css';
import React, {useState, useEffect} from 'react';


function App2() {
  const [cnJoke, setcnJoke] = useState("");
  const [dadJoke, setDadJoke] = useState("");

  const getChuckJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res=>res.json())
    .then(data=>{
      setcnJoke(data.value);
    });

  }

  const getDadJoke = () => {

    fetch("https://icanhazdadjoke.com/", {
      headers: new Headers({
          Accept: "application/json"
      })
  })
      .then(res => res.json())
      .then(joke => {
          setDadJoke(joke);
        })
        
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getDadJoke();
    }, 10000);
    return function reset(){
                clearInterval(interval);
              }
          });


  return (
    <div className="App2">
      
    <h1>Exercise 2</h1>
    <p>{cnJoke}</p>
    
        <button onClick={getChuckJoke}>
        Chuck Norris Joke</button>
        
        <br></br>
        <h3>Here comes a dad joke: {dadJoke}</h3>
        
        </div>
      );

  }

  



export default App2;