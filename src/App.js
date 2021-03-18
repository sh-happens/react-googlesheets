import React, { useState } from 'react';
import './App.css';
import  'materialize-css';

const App = () => {
  const [name, setname] = useState("")
  const [age, setage] = useState("")
  const [salary, setsalary] = useState("")
  const [hobby, sethobby] = useState("")

  return (
  <div className="row container">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s10">
          <input value={name} id="name" type="text" className="validate"/>
          <label className="active" for="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s10">
          <input value="" id="age" type="text" className="validate"/>
          <label className="active" for="age">Age</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s10">
          <input id="salary" type="number" className="validate"/>
          <label className="active" for="salary">Salary</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s10">
          <input id="hobby" type="text" className="validate"/>
          <label className="active" for="hobby">Hobby</label>
        </div>
      </div>
      <div className="row">
          <div className="input-field col s10">
            <input id="email" type="email" className="validate"/>
            <label className="active" for="email">Email</label>
          </div>
      </div>
    </form>
  </div>
  );
}

export default App;
