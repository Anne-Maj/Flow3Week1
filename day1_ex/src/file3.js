import React from 'react';
import {persons} from './file2';


function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }

  function WelcomePerson(props){
  return <h1>Hello, {props.person.firstName} {props.person.lastName}. Email: {props.person.email}</h1>  

  }


  function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        <WelcomePerson person={persons[0]}  />
        <WelcomePerson person={persons[1]}  />
        <WelcomePerson person={persons[2]}  />
        {persons.map((pers)=><WelcomePerson person={pers}/>)}
      </div>
      
    );
  }




export default MultiWelcome;

