import React, { useState, useEffect } from 'react';
import './App.css';
import  'materialize-css';
import axios from "axios";

const App = () => {
  const [lastName, setlastName] = useState("kosbayev")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [salary, setSalary] = useState("")
  const [hobby, setHobby] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    // axios
    //   .get("https://sheet.best/api/sheets/cdf91326-594f-4762-a8dc-8f667179bad3")
    //   .then((response)=>{
    //     console.log(response)
    //   })
  },[]);

const handleSubmit = (e) => {
  // const object = { name, age, salary, hobby, email };
  // axios
  // .post(
  //   "https://sheet.best/api/sheets/cdf91326-594f-4762-a8dc-8f667179bad3",
  //   object
  //   )
  //   .then(()=>{
  //     setName("");
  //     setAge("");
  //     setSalary("");
  //     setHobby("");
  //     setEmail("");
  //   })
}


  return (
  <div className="row container">
    <form className="col s12" onSubmit={handleSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <select value="" className="browser-default">
            <option value="" disabled selected >Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
                value={name} 
                id="name" 
                type="text" 
                className="validate" 
                onChange={(e) => setName(e.target.value)} 
          />
          <label htmlFor="name">Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
                value={age} 
                id="age" 
                type="number" 
                className="validate"
                onChange={(e) => setAge(e.target.value)}
          />
          <label htmlFor="age">Age</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
                value={salary}
                id="salary" 
                type="number" 
                className="validate"
                onChange={(e) => setSalary(e.target.value)}
          />
          <label htmlFor="salary">Salary</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input 
                value={hobby}
                id="hobby" 
                type="text" 
                className="validate"
                onChange={(e) => setHobby(e.target.value)}
          />
          <label htmlFor="hobby">Hobby</label>
        </div>
      </div>
      <div className="row">
          <div className="input-field col s12">
            <input
                  value={email} 
                  id="email" 
                  type="email" 
                  className="validate"
                  onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>
      </div>
      <button className="btn" type="submit">SUBMIT</button>
    </form>
  </div>
  );
}

export default App;
