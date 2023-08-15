
import React from "react";
import './../styles/App.css';
import Modal from "./Modal";
import { useState } from "react";

const App = () => {

  const [status,setStatus]=useState(false);

  function update(){
    setStatus(false);
  }
  return (
    <div className="model-overlay">
        <button onClick={()=>{
          setStatus(true)
        }}>Show Modal</button>
        {(status)&&
        <Modal update={update}/>
        }
    </div>
  )
}

export default App
